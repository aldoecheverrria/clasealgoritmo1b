import React from 'react'

export default function Reto2() {
    const crearElementos = (n=40) => {
        const elementos = [];
        for (let i=0; i<=n; i=i+2) {
            elementos.push(<div>Element: {i} //</div>)
        }
        return elementos;
    }

    return (
        <div>
            <h1>Print pair numbers with an increment: until 100</h1>
         <span>{crearElementos(100)} </span>
         <p>Type your JSX answer. Click the "Compare" button to see the JSX answer</p>
         <textarea/>
         <br/>
         <button>Compare</button>
         
        
         <hr/>
         
        </div>
        
    )
}
