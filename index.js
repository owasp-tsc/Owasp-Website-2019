const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req , res)=>{
    res.sendFile(__dirname + '/home.html');
});

app.get('/team' , (req , res)=>{
    res.sendFile(__dirname + '/team.html');
});


const port = process.env.PORT || 2000;
app.listen(port , ()=>console.log(`listening on port ${port}`));