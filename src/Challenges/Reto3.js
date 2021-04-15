import React from 'react'

export default function Reto3() {
    const crearElementos = (n=10) => {
        const elementos = [];
        for (let i=1; i<=n; i++) {
            elementos.push(<div>9 x {i} = {9 * i}//</div>)
        }
        return elementos;
    }

    return (
        <div>
            <h1>Print table number 9: </h1>
         <span>{crearElementos(10)} </span>
         <p>Type your JSX answer. Click the "Compare" button to see the JSX answer</p>
         <textarea/>
         <br/>
         <button>Compare</button>
         
        
         <hr/>
         
        </div>
        
    )
}
