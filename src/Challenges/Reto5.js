import React from 'react'

export default function Reto5() {
    const crearElementos = (n=10) => {
        const elementos = [];
        let k = 1;
        for (let i=1; i<2; i++) {
            
            for (let j=2; j<=n; j++) {
                elementos.push(<div> {k} + {j}  = {k=k+j}//</div>)
            }
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


/*
const crearElementos = (n=10) => {
        const elementos = [];
        let k = 0;
        for (let i=1; i<=10; i++) {
            elementos.push(<div>{k} + {i} = {k=k+i}</div>)
        }
        return elementos;
    }

*/


/*

const crearElementos = (n=10) => {
        const elementos = [];
        let k = 1;
        for (let i=1; i<2; i++) {
            
            for (let j=2; j<=n; j++) {
                elementos.push(<div> {k} + {j}  = {k=k+j}//</div>)
            }
        }
        return elementos;
    }


*/