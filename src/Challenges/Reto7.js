import React from 'react'

export default function Reto7() {
    const crearElementos = (n=10) => {
        const elementos = [];
        let k = 0;
        for (let i=11; i<30; i++) {
                if (i%2) elementos.push(<div>//{i} its an odd number, we had {k}, now we have: {k=k+i} //</div>)
        }
        return elementos;
    }


    return (
        <div>
            <h1>Summ all odd numbers greater than 10 and less than 30 </h1>
         <span>{crearElementos(10)} </span>
         <p>Type your JSX answer. Click the "Compare" button to see the JSX answer</p>
         <textarea/>
         <br/>
         <button>Compare</button>
         
        
         <hr/>
         
        </div>
        
    )
}
