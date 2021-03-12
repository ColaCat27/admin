const express = require('express');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();

// const urlencodedParser = bodyParser.urlencoded({extended: true});
const jsonParse = express.json();


app.use(express.static(__dirname + '/public'));

async function start() {
    try {
      await mongoose.connect('mongodb+srv://colacat:sMqHVlIICvEleBln@cluster0.igcby.mongodb.net/coffee', {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log('Server has been started');
        });
    } catch(e) {
        console.log(e);
    }
};

start();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\public\\index.html');
});

app.post('/', jsonParse ,(req, res) => {
    console.log(req);
    if(!req.body) return res.sendStatus(400);
     
    res.json(req.body); // отправляем пришедший ответ обратно
});
