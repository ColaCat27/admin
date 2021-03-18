window.addEventListener('DOMContentLoaded', () => {
    
    function auth() {
        const form = document.querySelector('.auth__form');

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);

                postData('/auth', formData)
                .then(res => {
                    return res.json()
                    .then(data => {
                        if (data.isAuthenticated == true) {
                            document.cookie = `key=${data.key}`;
                            window.location = '/admin';
                        }
                    })
                })
                .catch(e => {
                    console.log(e);
                })
            })

            async function postData(u,d) {
                const result = await fetch(u, {
                    method: 'POST',
                    body: d
                });
                return result;
            }
        }
        auth();

});