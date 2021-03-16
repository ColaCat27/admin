"use strict"

window.addEventListener('DOMContentLoaded', () => {

function sendData(ur, form) {
    const elem = document.querySelectorAll(form);

    elem.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let formData = new FormData(item);
    
            postData(ur,formData)
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            })
        })
    })

    async function postData(url, data = '') {
        const result = await fetch(url, {
            method: 'POST',
            body: data
        });
        return result;
    }
}

sendData('/info/greetings', 'form[data-form="greetings"]');
sendData('/info/about', 'form[data-form="about"]');
sendData('/info/events', 'form[data-form="events"]');

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

getData('/info/getinfo', useData);
getData('/items/getitems', createItem);

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

        form.innerHTML = `
        <button class="shop__delete">&times;</button>
        <input type="text" name="name" placeholder="Название товара" value="${item.name}">
        <input type="text" name="price" placeholder="Цена товара" value="${item.price}">
        <input type="text" name="weight" placeholder="Вес товара" value="${item.weight}">
        <input type="file" name="photo">
        <button class="shop__button">Добавить в базу</button>`;
        form.classList.add('shop__item')
        wrapper.append(form);
    });
    sendData('/items/upload', '.shop__form');
    deleteItem();
    }

function deleteItem() {
    const buttonDel = document.querySelectorAll('.shop__delete');

    buttonDel.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target;
            const formData = new FormData(target.parentNode);
            target.parentNode.remove();
            removeFromBase('/delete', formData);
        });
    })    
}

function removeFromBase(u, da) {
    
    postData(u,da)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })

    async function postData(url, data = '') {
        const result = await fetch(url, {
            method: 'POST',
            body: data
        });
        return result;
    }
}

});