require('dotenv').config();
const massive = require('massive');
const express = require('express');
const app = express();
app.use(express.json());
const{SERVER_PORT, CONNECTION_STRING} = process.env;

const {getInfo, postItem, deleteItem, updateItem} = require('./controller/controller');

massive(CONNECTION_STRING).then(db => {
    app.set('db',db);
    console.log('hooked up with db');
})


app.get(`/api/inventory`, getInfo);

app.post(`/api/inventory`, postItem);

app.delete(`/api/inventory/:id`, deleteItem);

app.put(`/api/inventory/:id`, updateItem);





app.listen(SERVER_PORT,() => {
    console.log(`Greetings from port${SERVER_PORT}`)});