"use strict"

window.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('form');

async function postData(data) {
    const result = await fetch('http://localhost:3000', {
        method: 'POST',
        body: JSON.stringify({name: 'alex'})
    });
    return result;
}

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

});