"use strict"

window.addEventListener('DOMContentLoaded', () => {

const form = document.querySelectorAll('form');

form.forEach(item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(item);
    
        postData(formData)
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        })
    });
});

async function postData(data) {
    const result = await fetch('/greetings', {
        method: 'POST',
        body: data
    });
    return result;
}

});