"use strict"

window.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);

    postData(formData)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })
});

async function postData(data) {
    const result = await fetch('/', {
        method: 'POST',
        body: data
    });
    return result;
}

});