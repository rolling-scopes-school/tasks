# Риски и митигации: Supabase + WebContainer

Специфические риски для Варианта B и стратегии их смягчения.

> **Архитектура и навигация**: [README.md](./README.md)

---

## 1. Supabase Free Tier лимиты

**Риск:** Supabase Free Plan имеет ограничения: 500 MB базы данных, 2 Edge Function invocations/sec, 500K Edge Function invocations/мес.

**Митигация:**

- **Для учебного проекта этого достаточно.** 10-50 задач + сотни submissions — далеко от лимитов.
- **Edge Function: кэширование.** Не вызывайте Groq API при повторном сабмите того же ответа — возвращайте cached результат.
- **Мониторинг.** Supabase Dashboard показывает использование ресурсов. Проверяйте раз в неделю.
- **Fallback для демо.** Подготовьте 5-10 pre-recorded результатов. Если Edge Function не отвечает, покажите cached ответы.

---

## 2. WebContainer ограничения

**Риск:** WebContainer работает только в Chromium-браузерах (Chrome, Edge). Не работает в Firefox, Safari. Первый boot() занимает 3-5 секунд.

**Митигация:**

- **Browser detection.** Покажите предупреждение если браузер не поддерживается. Предложите использовать Chrome.
- **Loading state.** При первом `boot()` покажите анимацию "Загрузка среды выполнения...".
- **Кэширование контейнера.** WebContainer инициализируется один раз (`getContainer()` паттерн), последующие запуски мгновенные.
- **Fallback: без Code Runner.** Если WebContainer недоступен, coding tasks показывают только условие без возможности запуска. Theory tasks работают всегда.
- **Только JavaScript/Node.js.** Если нужны другие языки — переходите на [Вариант A](../variant-a/) с Judge0.

---

## 3. RLS: неправильная конфигурация

**Риск:** Ошибка в Row Level Security может раскрыть `golden_answer` клиенту — это сломает всю логику AI Judge.

**Митигация:**

- **VIEW вместо RLS для tasks.** `public_tasks` VIEW физически не содержит секретных полей. Даже если RLS отключен, golden_answer не утечёт.
- **Тестирование.** После настройки RLS проверьте через Supabase SQL Editor: `SELECT * FROM tasks` с ролью `anon` — golden_answer не должен быть видимым.
- **Edge Function + Service Role Key.** Только Edge Function (с `SUPABASE_SERVICE_ROLE_KEY`) имеет доступ к секретным полям. Клиент использует `anon` key.
- **Документация.** Зафиксируйте RLS политики в [data-contracts.md](./data-contracts.md) — все участники должны понимать модель доступа.

---

## 4. Edge Function: холодный старт

**Риск:** Supabase Edge Functions (Deno) имеют холодный старт ~1-2 секунды при первом вызове после простоя.

**Митигация:**

- **Loading state.** Покажите "Оценка ответа..." с анимацией. Пользователь ожидает задержку при AI-оценке.
- **Warm-up.** Перед демо сделайте тестовый запрос к Edge Function, чтобы "прогреть" её.
- **Timeout handling.** Установите таймаут 15 секунд на клиенте. Если Edge Function не ответила — покажите "Попробуйте ещё раз".

---

## 5. Supabase Auth: OAuth настройка

**Риск:** OAuth провайдеры (Google, GitHub) требуют настройки redirect URL, client ID, client secret. Ошибки в конфигурации приводят к белому экрану при логине.

**Митигация:**

- **Email/password сначала.** Начните с email-авторизации (работает без OAuth настройки). Добавьте Google/GitHub когда email работает.
- **Тестирование на localhost.** Supabase поддерживает `http://localhost:*` как redirect URL по умолчанию для разработки.
- **Документация.** Зафиксируйте шаги настройки OAuth (GitHub → Settings → Developer settings → OAuth Apps). Менторы часто забывают добавить redirect URL для production домена.

---

## 6. Зависимость от Supabase Cloud

**Риск:** Supabase Cloud может быть недоступен (maintenance, outage). Все данные и авторизация завязаны на внешний сервис.

**Митигация:**

- **Mock API Layer.** Фронтенд-разработчики работают с `USE_MOCK=true` и не зависят от Supabase в Sprint 1.
- **Локальный Supabase.** `supabase start` поднимает полную копию Supabase локально через Docker. Разработка не зависит от облака.
- **Status page.** Следите за [status.supabase.com](https://status.supabase.com) если что-то не работает.
- **Экспорт данных.** Supabase позволяет экспортировать данные через `pg_dump`. Для учебного проекта потеря данных некритична (seed script восстановит всё).
