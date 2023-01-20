import React, { useEffect, useState } from 'react'

function Form() {
  const data={name:"",email:"",password:""};
  const [inputData,setInputData]=useState(data) 
  const [flag,setFlag]=useState(false)
  // function handleData(e){
  //   //setInputData({...inputData,[e.target.name]:e.target.value})
  //   setInputData(e)
  //   console.log(inputData)
  // }
  useEffect (()=>{
    console.log("Registered")
  },[flag])
  const handleData=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputData(values=>({...values,[name]:value}))
    //console.log(inputData)
  }

function handleSubmit(e){
  e.preventDefault();
  if(!inputData.name || !inputData.email || !inputData.password){alert("All fields are compulsory")}
  else setFlag(true)
}


  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Resistration form</h1>
         </div>
          <div><input type='text' placeholder="Enter your name" name="name" value={inputData.name} onChange={handleData}></input></div>
          <div><input type='text' placeholder="Enter your email" name="email" value={inputData.email} onChange={handleData}></input></div>
          <div><input type='text' placeholder="Enter your password" name="password" value={inputData.password} onChange={handleData}></input></div>
         <div> 
         <button type="button" className="btn btn-primary" onClick={handleSubmit}>submit</button>
         </div>

    </form>
    </>
  )
}
export default Form


