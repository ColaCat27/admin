"use strict"

window.addEventListener('DOMContentLoaded', () => {

const greetings = document.querySelector('form[data-form="greetings"]');
const about = document.querySelector('form[data-form="about"]');
const events = document.querySelector('form[data-form="events"]');
const shop = document.querySelector('.shop__form');

function sendData(ur, form, translit = false) {
    if (translit) {
        
    }
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

sendData('/greetings', greetings);
sendData('/about', about);
sendData('/events', events);

sendData('/upload', shop);

function getData(url) {
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
        useData(info);
    })
    .catch(e => {
        console.log(e);
    })
}

getData('/getinfo');

function useData(d) {
const greetings = document.querySelector('form[data-form="greetings"]');
const about = document.querySelector('form[data-form="about"]');
const events = document.querySelector('form[data-form="events"]');

greetings.querySelector('input').value = d.greetings;
about.querySelector('input').value = d.about;
events.querySelector('input').value = d.events;

}





});