## Советы по выполнению задания Momentum
- [ссылка на задание](momentum-stage1.md)

## 9. Получение фонового изображения от API

В ходе выполнения этого пункта требований вы научитесь работать с двумя популярными Images API: Unsplash API и Flickr API.

#### Unsplash API
- сайт: https://unsplash.com/developers
- документация: https://unsplash.com/documentation
- у данного сервиса есть лимит - 50 изображений в час
- регистрируемся на сайте
- подтверждаем email (переходим по ссылке, которая пришла на почту)
- создаём приложение `https://unsplash.com/oauth/applications`
- получаем Access Key
- генерируем ссылку:  
`https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`  
В ней:  
  - `orientation=landscape` - фото вытянутое по горизонтали
  - `query=nature` - запрос, по которому ищем фото
  - `client_id=` - Access Key, у вас будет другой.

Для удобного просмотра результатов, которые возвращает API, установите расширение [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=ru)

Асинхронная функция, позволяющия получить ссылку на изображение в большом размере:

```js
 function getLinkToImage() {
 const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
 fetch(url)
   .then(res => res.json())
   .then(data => {
     console.log(data.urls.regular)
   });
 }
 ```

 При повторном запуске функции фото будет другим.

 Самостоятельно перепишите функцию `getLinkToImage()` при помощи `async/await`.  
 Обратите внимание, что `async/await` функции работают только на сервере. Live Server (расширение VS Code) подойдёт.

<details>
  <summary>Проверьте полученный результат</summary>

  ```js
 async function getLinkToImage() {
   const url = 'https://api.unsplash.com/photos/random?query=morning&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17';
   const res = await fetch(url);
   const data = await res.json();
   console.log(data.urls.regular)
 }
  ```
</details>

---

#### Flickr API
- сайт: https://www.flickr.com/services/
- документация https://www.flickr.com/services/api/flickr.photos.search.html
- регистрируемся на сайте
- подтверждаем email (переходим по ссылке, которая пришла на почту)
- создаём приложение `https://www.flickr.com/services/apps/create/apply/`
- получаем API Key
- генерируем ссылку:  
`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=nature&extras=url_l&format=json&nojsoncallback=1`  
В ней:  
- `api_key=` - API Key, у вас будет другой.
- `tags=nature` - запрос, по которым ищем фото
- `extras=url_h` - возвращать только большие (large) фото.

Асинхронную функцию для получения ссылки на изображение вам предстоит написать самостоятельно.

Вы убедились, что алгоритм работы с различными API очень похож, научившись работать с одним из них, можно работать с любым другим.