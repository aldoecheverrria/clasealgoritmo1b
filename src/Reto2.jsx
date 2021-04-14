import React from 'react'

export default function Reto2() {
    const crearElementos = (n=40) => {
        const elementos = [];
        for (let i=0; i<n; i=i+2) {
            elementos.push(<div>{i} - como elemento</div>)
        }
        return elementos;
    }

    return (
        <div>
            <h1>Print numbers with an increment</h1>
         {crearElementos(20)}
         <p>Type your JSX answer. Click the "Compare" button to see the JSX answer</p>
         <textarea/>
         <br/>
         <button>Compare</button>
         
        
         <hr/>
         
        </div>
        
    )
}
