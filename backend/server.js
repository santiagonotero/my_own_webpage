const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const nodemailer = require("nodemailer");
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const path = require('path');
const cors = require("cors");
require('dotenv').config();
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(async (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    
    try {
        // Llama a la API de ipinfo.io para obtener los datos de geolocalización

        const response = await axios.get(`https://ipinfo.io/${ip}/json`);
        req.geoInfo = response.data;
    } catch (error) {
        console.error('Error obteniendo la información geográfica:', error);
        req.geoInfo = null;
    }
    next();
});


app.post('/send-email', async (req, res) => {


    const {emailName, emailAddress, emailText} = req.body;
    let mailBody= emailText.split('\n');

        let htmlEmail = `
        <p>Hola ¿Cómo estás?</p>
        <p>Te llegó este correo electrónico porque te alguien te contactó desde tu página web personal.</p>
        <p>Ésta es la información que recibimos de tu formulario de contacto:</p>
        <ul>
            <li>Email: ${emailAddress}</li>
            <li>Nombre: ${emailName}</li>
        </ul>
        <h3>Mensaje</h3>`;

        for (let i=0; i<mailBody.length; i++){

            if(mailBody[i].length===0){
                htmlEmail += 
                `<br />`;
            }
            else{
                htmlEmail +=
                `<p> ${mailBody[i]} <p>
                `;
            }
        }

        htmlEmail += `<br /> <br />`
        htmlEmail += `<p>Saludos!!!</p>`

        let transporter = nodemailer.createTransport({
            host: process.env.HOSTINGER_EMAIL_HOST,
            port: process.env.HOSTINGER_EMAIL_PORT,
            secure: true,
            auth:{
                user: process.env.HOSTINGER_EMAIL_USER,
                pass: process.env.HOSTINGER_EMAIL_PASSWORD
            },
            tls:{
                rejectUnauthorized: false
            },
            connectionTimeout: 10000, // Ajusta el tiempo de espera según sea necesario
            greetingTimeout: 5000, // Ajusta el tiempo de espera de saludo
            socketTimeout: 10000, // Ajusta el tiempo de espera del socket
            keepAlive: true
        });

        try{
          let info = await transporter.sendMail({
              from: '"Santiagootero.online" <contact@santiagootero.online>',
              to: process.env.GLOBAL_EMAIL_ADDRESS_2,
              subject: 'Te enviaron un mensaje desde tu página web https://santiagootero.online',
              cc: process.env.GLOBAL_EMAIL_ADDRESS_3,
              text: `Nombre: ${emailName}\nEmail: ${emailAddress}\nMensaje: ${mailBody}`,
              html: htmlEmail
          });
          return res.send(`succes: ${info.messageId}`)
        } catch (error) {
          console.log('there was an error', error);
          return res.sendStatus(500);
        }


});


app.get('/get-country', (req,res)=>{
    if (req.geoInfo) {
        res.send(`${req.geoInfo.country}`);
    } 
    else {
        res.send('unknown');
    }

})

app.get('/get-city', (req,res)=>{
    if(req.geoInfo) {
        res.send(`${req.geoInfo.city}`);
    }
    else{
        res.send('unknown');
    }
})


app.get('/test',(req,res)=>{
    res.status(200).send('Server is alive');
});


const PORT = process.env.PORT || 5001;

app.listen(PORT, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
});



