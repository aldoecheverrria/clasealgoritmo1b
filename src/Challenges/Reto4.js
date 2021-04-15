import React from 'react'

export default function Reto4() {
    const crearElementos = (n=10) => {
        const elementos = [];
        for (let i=1; i<=n; i++) {
            
            for (let j=1; j<=n; j++) {
                elementos.push(<div>{i} x {j} = {i * j}//</div>)
            }
        }
        return elementos;
    }

    return (
        <div>
            <h1>Print all the multiplication tables with numbers from 1 to 10 </h1>
         <span>{crearElementos(10)} </span>
         <p>Type your JSX answer. Click the "Compare" button to see the JSX answer</p>
         <textarea/>
         <br/>
         <button>Compare</button>
         
        
         <hr/>
         
        </div>
        
    )
}
