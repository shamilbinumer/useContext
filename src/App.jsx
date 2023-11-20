// import { useState } from 'react'
// import './App.css'

// function App() {
// const [user,setUser]=useState("shamil")
//   return (
//     <>
//      <Data user={user}/>
//     </>
//   )
// }

// export default App

// const Data=({user})=>{
//   return(
//    <>
//     <h1>Data 1</h1>
//     <Data2/></>
//   )
// }

// const Data2=({user})=>{
//   return(
//    <>
//     <h2>Data 2</h2>
//     <Data3/>
//     </>
//   )
// }

// const Data3=({user})=>{
//   return(
//    <>
//     <h2>Data 3</h2>
//     <Data4/></>
//   )
// }

// const Data4=({user})=>{
//   return(
//    <>
//     <h2>Data 4</h2>
//    </>
//   )
// }


import React, { useState,createContext,useContext } from 'react'
import './App.css'


const UserContext=createContext();
function App() {
  
   const [user,setUser]=useState("Shibily")
  return (
    <>
    
     <UserContext.Provider value={user}>
     <h1>this is App</h1>
      <h2>user is {user}</h2>
      <Context1 />
     </UserContext.Provider>
     
    </>
  )
}
export default App
const Context1 = () => {
  return (
    <div>
        <h1>context1</h1>
      <Context2 />
    </div>
  )
}
const Context2 = () => {
  return (
    <div>
        <h1>context2</h1>
      <Context3 />
    </div>
  )
}

const Context3 = () => {
  return (
    <div>
        <h1>context 3</h1>
      <Context4 />
    </div>
  )
}
const Context4 = () => {

 const context = useContext(UserContext);
return (
  <div>
    <h1>context4 {context}</h1>
  </div>
)
}