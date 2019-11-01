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


const particleJson = {
    "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 700
          }
        },
        "color": {
          "value": "#01579b"
        },
        "shape": {
            "type": "circle",
            "stroke": {
              "width": 1,
              "color": "#145ea8"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "",
              "width": 100,
              "height": 100
            }
        },
        "opacity": {
          "value": 0.7,
          "random": true
        },
        "size": {
          "value": 10,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 200,
          "color": "#007ecc",
          "opacity": 0.5,
          "width": 2
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false, 
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      }
};


app.listen(port , ()=>console.log(`listening on port ${port}`));