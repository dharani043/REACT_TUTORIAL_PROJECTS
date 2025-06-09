import {useState} from 'react'

export const UserDetails = () => {
    // const [userName,setUserName]=useState("Ram")
    // // const [userAge,setUserAge]=useState(21)
    // const updateName=()=>
        //     {
    //         setUser({...user,name:"Shyam"})
    //         // userName==="Ram"?setUserName("Shyam"):setUserName("Ram")
    //     };
    //     const updateAge=()=>
        //         {
    //         setUser({...user,age:22})
    //         // userAge===21?setUserAge(22):setUserAge(21)
    //     }
    // const [user,setUser]=useState({name:"Ram",age:21})
    // function changeName(e){
        // const newStateObject={...user}
        // newStateObject.name=e.target.value;
        // setUser(newStateObject)
        // setUser(oldState=>({...oldState,name:e.target.value}))
    // }
    // function changeAge(e){
    //     setUser(oldState=>({...oldState,age:e.target.value}))
        // alert(e.target.value)}

        const [user,setUser]=useState({fname:"ram",lname:"kumar",age:25})
        function changehandler(e){
            setUser(oldState=>({...oldState,[e.target.name]:e.target.value}))
        }
    return (
    <>
    {/* <h1>User Details</h1> */}
    {/* <h3>{userName}</h3>
    <h3>{userAge}</h3> */}
    {/* <h3>{user.name}</h3>
    <h3>{user.age}</h3>
    <button onClick={updateName}>Change Name</button>
    <button onClick={updateAge}>Change Age </button> */}
    {/* <h2>{user.name},{user.age}</h2>
    <form>
        <input type="text" placeholder="Enter your name" onChange={changeName}/>
        <input type="text" placeholder="Enter your age" onChange={changeAge}/>
    </form> */}


    <h1 style={{height:"50px",width:"100vw",color:"black"}}>User Details</h1>
    <h2>{user.fname} {user.lname} {user.age}</h2>
    <form>
        <input type="text" placeholder="Enter firstname" onChange={changehandler}value={user.fname} name="fname"/>
        <input type="text" placeholder="Enter last name" onChange={changehandler}alue={user.lname} name="lname"/>
        <input type="text" placeholder="Enter your age" onChange={changehandler}value={user.age}name="age"/>
    </form>
    <div className="card_con" style={{height:"100px",width:"100vw", opacity:"0"}}/>
    </>
  )
}
