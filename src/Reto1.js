import React from 'react'

export default function Reto1() {

    const crearElementos = (n=40) => {
        const elementos = [];
        for (let i=0; i<n; i++) {
            elementos.push(<div>{i} - como elemento</div>)
        }
        return elementos;
    }

    return (
        <div>
            <h1>Print numbers with an increment</h1>
         {crearElementos(20)}
         <hr/>
        </div>
        
    )
}
