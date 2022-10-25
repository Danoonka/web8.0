const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.json({"users": [{"email": "pinkion04@tycoonsleep.ga" , "password": "12345678"}]})
})

app.listen(5000, ()=>{
    console.log('Server started on port 5000')
})