import React from "react"

function BatchName() {

    const name = "Marshmellow"
    return (
     <div className="batch">
     <Details 
     img = 'https://img.icons8.com/color/48/null/user-female.png'
      Name = "Gokila"
      Batch = "B43 TAMIL"/>
     <Details 
     img = "https://img.icons8.com/clouds/48/null/user-male.png"
     Name = "Gokul"
      Batch = "B43 TAMIL"/>
     <Details 
     img = "https://img.icons8.com/emoji/48/null/baby-angel.png"
     Name = "Dhev"
      Batch = "B43 TAMIL"/>
     <Details 
     img = "https://img.icons8.com/clouds/48/null/user-male.png"
     Name = "Marsh"
      Batch = "B43 TAMIL"/>
     
     </div>
    )
}

export default BatchName

function Details(props){
     
    return(
        <div className='card'>
        <img src={props.img} alt='image'></img>
        <h3>{props.Name}</h3>
        <p>{props.Batch}</p>
        </div>
    )
}

