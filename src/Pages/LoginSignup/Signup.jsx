import React, {useState} from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [user,setUser] = useState({
        name:"",username:"",password:""
    });

    let name,value;
    const handleInputs = (e)=>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value})


    }

    // const PostData = async (e)=>{
    //     e.preventDefault();
    //     const {name, username, password} = user;
    //     // console.log(user);

    //     const res = await fetch("/register",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify({
    //             name, username, password
    //         })
    //     })
    //     const data = await res.json();
    //     console.log(data);

    // }

    const [successMessage, setSuccessMessage] = useState('');
    
    // const history = useHistory();
    // const PostData = async (e) => {
    //     e.preventDefault();
    //     const res = await fetch("/register", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             name: user.name,
    //             username: user.username,
    //             password: user.password
    //         })
    //     });
    //     const data = await res.json();
    //     if (res.status === 200) {
    //         setSuccessMessage(data.message);
    //     } else {
    //         console.error('Error:', data.error);
    //     }
    // };




  return (
    <>
        <div id='main'>
            <Navbar/>

            <div className="signup-container">
                <h2>Sign Up</h2>
                <form>
                    <div className="form-group">
                        {/* <label htmlFor="name">Name:</label> */}
                        <input type="text" id="name" name="name" placeholder='Your Name' value={user.name}
                        onChange={handleInputs} required/>
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="email">Email:</label> */}
                        <input type="text" id="username" name="username" placeholder='Your Username' value={user.username}
                        onChange={handleInputs} required/>
                    </div>
                    <div className="form-group">
                        {/* <label htmlFor="password">Password:</label> */}
                        <input type="password" id="password" name="password" placeholder='Your Password' value={user.password}
                        onChange={handleInputs} required/>
                    </div>
                    <button type="submit" >Sign Up</button>
                    <Link to="/login" ><button style={{marginLeft:"21px"}}>Login</button></Link>
                </form>
            </div>
            
            {successMessage && (
                <div className='successMessage'>
                    <p>{successMessage}</p>
                    <Link to="/">Go to Homepage</Link>
                </div>
            )}

            {/* <Footer/> */}
        </div>
    </>
  )
}

export default Signup