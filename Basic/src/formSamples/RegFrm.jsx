import React, { useState } from 'react';
import "./RegFrm.css";

export const RegFrm = () => {
    const [user, setUser] = useState({
        name: "Ram",
        age: 21,
        gender: "Male",
        isMarried: false,
        country:"INDIA",
        bio:"Write something about you"
    });

    function changeHandler(e){
        const name=e.target.name;
        const value =e.target.type==="checkbox"? e.target.checked:e.target.value;
        setUser({...user,[name]:value})
    };

    return (
        <>
    <h1 style={{height:"50px",width:"100vw",color:"black"}}>REGISTRATION FORM</h1>

            <table>
                <tbody>
                    <tr><td>Name</td><td>{user.name}</td></tr>
                    <tr><td>Age</td><td>{user.age}</td></tr>
                    <tr><td>Gender</td><td>{user.gender}</td></tr>
                    <tr><td>isMarried</td><td>{user.isMarried ? "Married" : "NotMarried"}</td></tr>
                    <tr><td>Country</td><td>{user.country}</td></tr>
                    <tr><td>Bio</td><td>{user.bio}</td></tr>
                </tbody>
            </table>
            <form>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Full Name' 
                    value={user.name} 
                    onChange={changeHandler} 
                />
                <input 
                    type='number' 
                    name='age' 
                    placeholder='Age' 
                    value={user.age} 
                    onChange={changeHandler} 
                />
                <div className='gender'>
                    <label htmlFor='male'>
                        <input 
                            type='radio' 
                            name='gender' 
                            value='Male' 
                            checked={user.gender === "Male"} 
                            onChange={changeHandler} 
                            id='male'
                        />
                        Male
                    </label>
                    <label htmlFor='female'>
                        <input 
                            type='radio' 
                            name='gender' 
                            value='Female' 
                            checked={user.gender === "Female"} 
                            onChange={changeHandler} 
                            id='female'
                        />
                        Female
                    </label>
                </div>
                <label htmlFor='isMarried'>
                    <input 
                        type='checkbox' 
                        name='isMarried'
                        checked={user.isMarried} 
                        onChange={changeHandler} 
                        id='isMarried'
                    />
                    Married
                </label>
                <div>
                    <label htmlFor='country'>Select country:</label>
                    <select name='country' id="country" value={user.country} onChange={changeHandler}
                    >
                        <option value="india">INDIA</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                    </select>
                </div>
                <textarea name="bio" id="bio" placeholder='Write about You' value={user.bio} onChange={changeHandler}></textarea>
            </form>
            <div className="card_con" style={{height:"100px",width:"100vw", opacity:"0"}}/>
        </>
    );
};
