import React, { useState, useEffect } from 'react'
import { TOKEN } from '../constants/constants';
import { getToken } from '../utils/utils';

export const Brand = () =>{
  // const mostrarImagen = require.context('../assets/')
  // const [imagen, setImagen] = useState();
  // const [alter, setAlter] = useState();
  const [empresa, setEmpresa] = useState({
    brand: "",
    brandId: ""
  });
  
   useEffect(() => {
     llamada();
     
           
  
   },[])

  async function llamada() {
    const respuesta = await fetch ('https://virtserver.swaggerhub.com/rantunam/accounting/1.0.0/brand', {
    method:"GET",
    headers: {
      'Content-Type':'aplication/json',
      'name':`${getToken()}`,
      required:true
    },
    
  })
    const json = await respuesta.json();
    

    setEmpresa({
      brand: json.brand,
      brandId: json.brandId
    })  
    
}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  //   function seleccionImagen(){

  //   if(empresa.brand === "caixa"){
  //   return (setImagen(caixa), setAlter("logo caixa"))
  //  }
  //  else if(empresa.brand ==="mcdonalds"){
  //  return (setImagen(mcdonalds), setAlter("logo McDonalds"));
  //  }   
  //  else return setImagen('');
  // }
    return (
        <>
        {/* <img src={imagen} alt={alter}/> */}
        <img src={process.env.PUBLIC_URL + `${empresa.brand}.jpg`} alt={empresa.brand}/>
        <p>nombre de la empresa: {empresa.brand}</p>
        <p>ID de la empresa: {empresa.brandId}</p>
        </>
   
  )
}

