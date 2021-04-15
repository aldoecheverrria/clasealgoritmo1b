import React from 'react'

export default function Reto6() {
    const crearElementos = (n=10) => {
        const elementos = [];
        let k = 1;
        for (let i=1; i<n; i++) {
                elementos.push(<div> {i} * {k}  = {k*=i}//</div>)
        }
        return elementos;
    }


    return (
        <div>
            <h1>Print in the screen the sum of numbers from 1 to 11, calculate with a loop </h1>
         <span>{crearElementos(10)} </span>
         <p>Type your JSX answer. Click the "Compare" button to see the JSX answer</p>
         <textarea/>
         <br/>
         <button>Compare</button>
         
        
         <hr/>
         
        </div>
        
    )
}
