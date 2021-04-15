import React from 'react'

export default function Reto9() {
    const crearElementos = (n=10) => {
        let temperatura = 0; 
        const elementos = [];
        temperatura = ((n-32)/1.8);
        elementos.push(<div>The temperature in celsius is {n}, converted to Fahrenheit is {temperatura}</div>);
        return elementos;
    }


    return (
        <div>
            <h1>Wee need a function that converts from Celsius to Fahrenheit </h1>
         <span>{crearElementos(10)} </span>
         <p>Type your JSX answer. Click the "Compare" button to see the JSX answer</p>
         <textarea/>
         <br/>
         <button>Compare</button>
         
        
         <hr/>
         
        </div>
        
    )
}
