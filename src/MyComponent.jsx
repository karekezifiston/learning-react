import React,{useState} from "react";
function MyComponent(){

    const[name,setName]=useState('Guest');
    const[age,setAge] =useState(0);

    const upDateName= ()=>{
        setName('Spongebob');
    }  
    const incrementAge= ()=>{
        setAge(age+1);
    }
    
    return(
        <div className="mycomponent">
            <h1>Second Project </h1>
            <p>Name:{name}</p>
            <button onClick={upDateName}>Set Name</button>;

            <p>Age:{age}</p>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    )
}
export default MyComponentttt