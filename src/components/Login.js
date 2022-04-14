import React, { useState, useContext} from 'react'
import UserContext from '../context/UserContext'
import {useNavigate } from 'react-router-dom';
import { TOKEN } from '../constants/constants';
import { setToken } from '../utils/utils';

import "../index.css";

export const Login = () =>{
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);
  const [usuario, setUsuario] = useState('');
  const [pass, setPass] = useState(null);
  const [data, setData] = useState(null);

  
    function llamada() {

      return fetch ('https://virtserver.swaggerhub.com/rantunam/accounting/1.0.0/login', {
      method:'POST',
      headers: {
        'Content-Type':'aplication/json'
      },
      body:JSON.stringify({usuario, pass}),
    })
      .then (respuesta => respuesta.json())
      // .then (json =>{
      //   setData(json.user);
      //   sessionStorage.setItem("token", json.token);
      //   setUser(`X-UserID: ${json.token}`);
      //   navigate("/brand");
      // });
    
  }
    const enviarDatos = async (event) =>{
        event.preventDefault();
        // llamada();
        const json = await llamada();
        setData(json.user);
        // sessionStorage.setItem(TOKEN, json.token);
        setToken(json.token);
        setUser(`X-UserID: ${json.token}`);  
        navigate("/brand"); 
    }
    //asignamos el texto escrito al useState
  const cogerUsuario = (e) => setUsuario(e.target.value);
  const cogerPassword = (e) => setPass(e.target.value);
  
  return (
    <>
        <h2>Pantalla de login</h2>
        <form onSubmit={enviarDatos}>
        <input
          type="text"
          name='usuario'
          placeholder='Introduzca usuario'
          onChange={cogerUsuario}
          >  
        </input>
        <input
          type="password"
          name='pass'
          placeholder='contraseña'
          onChange={cogerPassword}
          >
        </input>
        <button type='submit'>Login</button>
        </form>
        {/* si data no es nulo, entonces muestralo en p */}
        {
          data && <p>{JSON.stringify(data,null,1)}</p>
        }
        
    </>
  )
}
// async function llamada() {

//   return fetch ('https://virtserver.swaggerhub.com/rantunam/accounting/1.0.0/login', {
//   method:'POST',
//   headers: {
//     'Content-Type':'aplication/json'
//   },
//   body:JSON.stringify({usuario, pass}),
// })
//   .then (respuesta => respuesta.json())

// }
// const enviarDatos = async (event) =>{
//     event.preventDefault();
//     const json = await llamada();
//     setData(json.user);
//     sessionStorage.setItem("token", json.token);
//     setUser(`X-UserID: ${json.token}`);
//     navigate("/brand");    
// }