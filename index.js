const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const homeRoutes = require('./routes/home');
const infoRoutes = require('./routes/info');
const itemRoutes = require('./routes/items');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const PORT = 3000;
const app = express();

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

app.use(express.static('public'));
app.use(session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false
}));

app.use('/', homeRoutes);
app.use('/info', infoRoutes);
app.use('/items', itemRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);