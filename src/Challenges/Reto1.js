import React from 'react'

export default function Reto1() {

    

    const crearElementos = (n=40) => {
        const elementos = [];
        for (let i=0; i<=n; i++) {
            elementos.push(<div>//Element {i}</div>)
        }
        return elementos;
    }

    return (
        <div className="app__wrapper">
            <h2>Print numbers with an increment</h2>
         <span >{crearElementos(20)}</span>
         <p>Type your JSX answer. Click the "Compare" button to see the JSX answer</p>
         <textarea/>
         <br/>
         <button>Compare</button>
         
        
         <hr/>
         
        </div>
        
    )
}
