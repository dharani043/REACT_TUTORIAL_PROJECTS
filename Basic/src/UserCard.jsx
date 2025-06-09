import dharani from "./images/dharani.jpeg"
const userData=[{
  name:"DHARANI",
  city:"SALEM",
  description:"FULL STACK DEVELOPER",
  skills:[
    "C++","JAVA","PYTHON","HTML","CSS","REACT"
  ],
  online:true
},
{
  name:"DHIVYADHARSHAN J",
  city:"KARUR",
  description:"FULL STACK DEVELOPER",
  skills:[
    "C++","JAVA","PYTHON","HTML","CSS","REACT"
  ],
  online:true
},{
  name:"DHARANI",
  city:"SALEM",
  description:"FULL STACK DEVELOPER",
  skills:[
    "C++","JAVA","PYTHON","HTML","CSS","REACT"
  ],
  online:false
},
{
  name:"DHARANI",
  city:"SALEM",
  description:"FULL STACK DEVELOPER",
  skills:[
    "C++","JAVA","PYTHON","HTML","CSS","REACT"
  ],
  online:true
},{
  name:"DHARANI",
  city:"SALEM",
  description:"FULL STACK DEVELOPER",
  skills:[
    "C++","JAVA","PYTHON","HTML","CSS","REACT"
  ],
  online:true
},{
  name:"DHARANI",
  city:"SALEM",
  description:"FULL STACK DEVELOPER",
  skills:[
    "C++","JAVA","PYTHON","HTML","CSS","REACT"
  ],
  online:true
},{
  name:"DHARANI",
  city:"SALEM",
  description:"FULL STACK DEVELOPER",
  skills:[
    "C++","JAVA","PYTHON","HTML","CSS","REACT"
  ],
  online:true
}]
function User(props)
{
    return(
        <div className="card_con">
        <span className={props.online? "pro online":"pro offline"}>
        {props.online? "ONLINE":"OFFLINE"}
        </span>
        <img src={dharani} className="img"/>
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <h4>{props.description}</h4>
        <div className="button">
            <button className="primary">message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h4>Skills</h4>
            <ul>{props.skills.map((skill,index)=>
            (<li key={index}>{skill}</li>))}
            </ul>
        </div>
    </div>
    )
}
const UserCard = () => {
  return (
    <>
    <h1 style={{height:"50px",width:"100vw",color:"black"}}>User Cards</h1>

    {
    userData.map((user,index) => (
      <User 
        key={index} 
        name={user.name} 
        city={user.city}
        description={user.description} 
        online={user.online}
        skills={user.skills}
        />

    ))
    }
    <div className="card_con" style={{height:"100px",width:"100vw", opacity:"0"}}/>
    </>
  )
}

export default UserCard
