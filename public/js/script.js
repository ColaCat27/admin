"use strict"

window.addEventListener('DOMContentLoaded', () => {

const greetings = document.querySelector('form[data-form="greetings"]');
const about = document.querySelector('form[data-form="about"]');
const events = document.querySelector('form[data-form="events"]');

function sendData(ur, form) {
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

    async function postData(url, data) {
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

});