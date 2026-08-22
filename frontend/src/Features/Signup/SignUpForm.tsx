import { useState } from "react"
import { FormProps } from "react-router-dom";

//To ensure the data is given
interface SignUpFormProps{
    onSubmit: (data: {email:string; username:string; password:string}) => void
}

const SignUpForm:React.FC<FormProps> = ({ onSubmit }) => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    return <form id='Signup-Form' className='Main-Form'>
                    <img className="Exit-Button" src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="exit button" 
                    //onClick={OnSignupClick}
                    ></img>    
                    <div className='Main-Container'>
                        
                        <label className="InputLabel">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email"
                        //value={email}
                        //onChange={onemailChange}
                        />
                        <br/>
                        <label className="InputLabel">Username</label>
                        <input 
                        type="text" 
                        id="username" 
                        name="username"
                        value={username}
                        //onChange={onUsernameChange}
                        />
                        <br/>
                        <label className="InputLabel">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={password}
                        //onChange={onPassowrdChange}
                        />
                        <br/>
                        
                        <input type="submit" value="Sign up"/>
                    </div>
            </form>
}

export default SignUpForm