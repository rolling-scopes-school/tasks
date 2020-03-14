export const task = "RSS Виртуальная клавиатура";

export const criteria = [
  {
    type: "title",
    title: "Минимальный набор"
  },
  {
    type: 'subtask',
    text: "Реализована генерация DOM-элементов и index.html пустой изначально",
    max: 20,
  },
  {
    type: 'subtask',
    text: "Нажатие на кнопку на физической клавиатуре подсвечивает кнопку на виртуальной",
    max: 10
  },
  {
    type: "title",
    title: "Стандартный набор"
  },
  {
    type: 'subtask',
    text: "Есть переключение между русским и английским языком, а так же сохранение выбранного языка",
    max: 15
  },
  {
    type: 'subtask',
    text: "Клики по кнопкам на виртуальной клавиатуре выводят символы в инпут",
    max: 15
  },
  {
    type: "title",
    title: "Дополнительный набор"
  },
  {
    type: 'subtask',
    text: "Реализована анимация нажатия на кнопку",
    max: 15,
  },
  {
    type: "title",
    title: "Технические требования"
  },
  {
    type: 'subtask',
    text: "Использование в коде фишек стандарта ES6 и выше (classes, деструктуризация и т.д.)",
    max: 15
  },
  {
    type: 'subtask',
    text: "Использование eslint",
    max: 10
  },
  {
    type: 'subtask',
    text: "Требования к репозиторию, коммитам и PR выполнены",
    max: 10
  },
  {
    type: "title",
    title: "Штрафы"
  },
  {
    type: 'penalty',
    text: "Oшибки или предупреждения eslint-config-airbnb-base",
    max: -15
  },
  {
    type: 'penalty',
    text: " Тестовый - Oшибки или предупреждения eslint-config-airbnb-base",
    max: -15
  }
]
