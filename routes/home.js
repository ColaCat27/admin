const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    if (req.cookies.key == '2359235012foEIW412') {
        let path = __dirname.replace(/routes/, '');
        res.send(` <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>CoffeCake - Панель администратора</title>
            <link rel="stylesheet" href="css/style.min.css">
        </head>
        <body>
            <header class="header">
                <div class="container">
                    <div class="header__wrapper">
                        <div class="header__logo">
                            <img src="img/logo.png" alt="logotype">
                        </div>
                        <div class="header__text">Coffe Cake Admin
                            <span>Панель администратора</span>
                        </div>
                    </div>
                </div>
            </header>
        
            <section class="info">
                <div class="container">
                    <div class="info__header">
                        Общая информация
                    </div>
                    <div class="info__wrapper">
                        <div class="info__item">
                            <div class="info__title title">
                                Добавить приветствие
                            </div>
                            
                            <form class="info__form" data-form="greetings">
                                <input class="info__input" type="text" name="greetings" placeholder="Добавить приветствие" value="">
                                </input>
                                <button class="info__button button">Сохранить</button>
                            </form>
                        </div>
        
                            
                        <div class="info__item">
                            <div class="info__title title">
                                Добавить информацию о событиях
                            </div>
                            
                            <form class="info__form" data-form="events">
                                <input class="info__input" type="text" name="events" placeholder="Добавить информацию о событиях" value="">
                                </input>
                                <button class="info__button button">Сохранить</button>
                            </form>
                        </div>
        
                        <div class="info__item">
                            <div class="info__title title">
                                Добавить информацию о себе
                            </div>
                            
                            <form class="info__form" data-form="about">
                                <input class="info__input" type="text" name="about" placeholder="Добавить информацию о себе" value="">
                                </input>
                                <button class="info__button button">Сохранить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        
        
            <section class="shop">
                <div class="container">
                    <div class="shop__header">Раздел товаров</div>
        
                    <button class="shop__add-item">Добавить товар
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder-plus" class="svg-inline--fa fa-folder-plus fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z"></path></svg>
                    </button>
        
                    <div class="shop__wrapper">
                        
                    </div>
                </div>
            </section>
        
        
            <script src="js/script.js"></script>
            <script src="js/test.js"></script>
            <script src="js/logout.js"></script>
        </body>
        </html>`);
    } else {
        let path = __dirname.replace(/routes/, '');
        res.sendFile(path + '/public/auth.html');
    }

});


module.exports = router;