
let API = 'http://localhost:8000/characters'
let ul = document.querySelector(".list");
let obj = null

function render(){
    fetch(`https://rickandmortyapi.com/api/character`).then((result) => result.json())
        .then((data) => {
            // fetch(API,{
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json; charset=utf-8"
            //     },
            //     body: JSON.stringify(data)
            // })
            // console.log(data)
            ul.innerHTML = ''
            data.results.forEach((elem) => {
                ul.innerHTML += `<li style="padding: 10px; margin: 10px; border: 1px solid pink; background-color: rgba(203,184,231,0.56)">
                      <div style="text-align: center"> Name: ${elem.name}</div>
                       <div style="text-align: center"> Gender: ${elem.gender}</div>
                       <div style="text-align: center"> Status: ${elem.status}</div>
                      <div><img src="${elem.image}" style="width: 250px" alt=""></div>
                      </li>`
            });
        });
}
render()

let ulTwo = document.querySelector(".list2");

function renderBlocktwo(){
    fetch(API).then((result) => result.json())
        .then((data) => {
            console.log(data)
            ulTwo.innerHTML = ''
            data[0].results.forEach((elem) => {
                console.log(elem)
                ulTwo.innerHTML += `<li style="padding: 10px; margin: 10px; border: 1px solid pink; background-color: rgba(203,184,231,0.56)">
                      <div style="text-align: center"> Name: ${elem.name}</div>
                       <div style="text-align: center"> Gender: ${elem.gender}</div>
                       <div style="text-align: center"> Status: ${elem.status}</div>
                      <div><img src="${elem.image}" style="width: 250px" alt=""></div>
                      </li>`
            });
        });
}

renderBlocktwo()









/* Задание №1.1.
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из
Рика и Морти в list.
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/

/* Задание №1.2.
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/

/* Задание №1.3.
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните
в локальном сервере db.json, в массиве под
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

/* Задание №1.4.
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые
вы получили (стянули) с db.json.
let block2 = $('.block2');
let list2 = $('.list2');
*/

/* Задание №1.5.
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
