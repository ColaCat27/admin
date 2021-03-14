"use strict"

window.addEventListener('DOMContentLoaded', () => {

function sendData(ur, form, selector) {
    const elem = document.querySelector(selector);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(form);
    
        postData(ur,formData)
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })
    });

    async function postData(url, data = '') {
        const result = await fetch(url, {
            method: 'POST',
            body: data
        });
        return result;
    }
}

sendData('/greetings', 'form[data-form="greetings"]');
sendData('/about', 'form[data-form="about"]');
sendData('/events', 'form[data-form="events"]');

sendData('/upload', '');

function getData(url, func) {
    async function getInfo(u) {
        const result = await fetch(u, {
            method: 'POST'
        })
        return result;
    }

    getInfo(url)
    .then(resp => {
        return resp.json()
    })
    .then(info => {
        func(info);
    })
    .catch(e => {
        console.log(e);
    })
}

getData('/getinfo', useData);
getData('/getitems', createItem);

function useData(d) {
const greetings = document.querySelector('form[data-form="greetings"]');
const about = document.querySelector('form[data-form="about"]');
const events = document.querySelector('form[data-form="events"]');

greetings.querySelector('input').value = d.greetings;
about.querySelector('input').value = d.about;
events.querySelector('input').value = d.events;

}

const add = document.querySelector('.shop__add-item');

add.addEventListener('click', (e) => {
    createItem();
});


function createItem(data = [{
    name: 'Введите имя',
    price: 'Введите цену',
    weight: 'Введите вес',
    photo: 'Задайте фото'
}]) {
    data.forEach(item => {
       const form = document.createElement('form');
       const wrapper = document.querySelector('.shop__wrapper');

        form.innerHTML = `<div class="shop__delete">&times;</div>
        <input type="text" name="name" value="${item.name}">
        <input type="text" name="price" value="${item.price}">
        <input type="text" name="weight" value="${item.weight}">
        <input type="file" name="photo" value="${item.photo}">
        <button class="shop__button">Добавить в базу</button>`;
        form.classList.add('shop__form')
        wrapper.append(form); 
    });
}


});