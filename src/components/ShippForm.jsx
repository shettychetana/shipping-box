
import React, {useState} from 'react';

function ShippForm(props) {
     const [title, setTitle]=useState("");
    const [weight, setWeight]=useState(1);
    const [color, setColor]=useState("");
    const [place, setPlace]=useState("");

    const handleSubmit=(e) =>{
        e.preventDefault();
        
        const data={
            title: title,
            weight:weight,
            color: color,
            place:place
        };
        props.addToListCallback(data)

    };
 return (
    <div>
         <h1>shipping form</h1>
        <form  onSubmit={handleSubmit}>
            
            <input type ="text" value={title} placeholder='title' onChange={(e) =>setTitle(e.target.value)}/>
            <br></br>
            <br></br>
            <input type ="number" value={weight}  placeholder='weight' onChange={(e) =>setWeight(e.target.value)}/>
            <br></br>
            <br></br>
            <label>Color</label>
            <input type ="color" onChange={(e) =>setColor(e.target.value)}/>
            <br></br>
            <br></br>
            <input type ="text" value={place} placeholder='place' onChange={(e) =>setPlace(e.target.value)}/>
            <br></br>
            <br></br>
            <button type = "submit">Submit</button>
        
        </form>
    </div>
    
    )
    }

export default ShippForm;