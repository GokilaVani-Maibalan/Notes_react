
import React from "react";

// function Name(){
//  const name = 'Gokul'
//     return(
//         <h1>Hello {name}</h1>
//     )
// }

// export default Name;

function Greeting() {

    return(
        React.createElement('div', {className: "name"}, React.createElement('h2', null, 'Hello Guvi'))
    )
}

export default Greeting