import React,{useEffect, useState} from "react";

function Admin() {

    const [serverStatus, setServerStatus] =useState('Desconocido');
    const [country, getCountry] = useState('');
    const [city, getCity] =useState('');

    useEffect(()=>{
        fetch('https://api.santiagootero.online/test',{
            method: 'GET', 
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            })
                .then(response =>response.text())
                .then( data => {setServerStatus(data)});

        fetch('https://api.santiagootero.online/get-country')
            .then(response =>{if(response.ok){return(response.text())}})
            .then( data => {getCountry(data);})

        fetch('https://api.santiagootero.online/get-city')
            .then(response =>{if(response.ok){return(response.text())}})
            .then( data => {getCity(data);})
    },[])
    
    
    return(
        <div className ='grid w-full flex-grow' >
            <div className='self-center'>
                <h1 className='md:text-h1-md sm:text-h1-sm xsm:text-h1-xsm'>Página de administración</h1>
            </div>
            <div className='mx-12 my-6'><h2>Estado del servidor de correo</h2><p>{serverStatus}</p></div>
            <div className='mx-12 my-6'><h2>El sitio está siendo accedido desde:</h2><p>{city} - {country}</p></div>
        </div>
    )

}

export default Admin;