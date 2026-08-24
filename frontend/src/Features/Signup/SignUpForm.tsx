import { useState } from "react"
import { FormProps } from "react-router-dom";
import { useAddNewUsersMutation } from "./SignupApiSlice";

//To ensure the data is given
interface SignUpFormProps{
    onSubmit: (data: {email:string; username:string; password:string}) => void
}

const SignUpForm:React.FC<FormProps> = ({ onSubmit }) => {

    const [AddNewUser, {
            isLoading,
            isSuccess,
            isError,
            error
            }] = useAddNewUsersMutation()
            const onNewUserSubmit = async(e: { preventDefault: () => void; }) => { 
                e.preventDefault()
                await AddNewUser({Email,UserName,Password})
            }


    const [Email,setEmail] = useState('')
    const [UserName,setUsername] = useState('')
    const [Password,setPassword] = useState('')

     function blur(){
        const content = document.querySelector(".Main-Header")!
        content.classList.toggle("blur")
    }
    function displayform (form: HTMLElement){   

        if((form.style.display === 'none' || form.style.display === '')){
            form.style.display = 'block'
            blur()
        }else if(form.style.display === 'block'){
            form.style.display = 'none'
            blur()
        }
    }

    function OnSignupClick(){
        const form = document.getElementById("Signup-Form")!
        //const otherform = document.getElementById("Login-Form")!
        displayform(form)
    }
    return <form id='Signup-Form' className='Main-Form' onSubmit={onNewUserSubmit}>
                    <img className="Exit-Button" src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="exit button" onClick={OnSignupClick}
                    ></img>    
                    <div className='Main-Container'>
                        
                        <label className="InputLabel">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <br/>
                        <label className="InputLabel">Username</label>
                        <input 
                        type="text" 
                        id="UserName" 
                        name="UserName"
                        value={UserName}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                        <br/>
                        <label className="InputLabel">Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <br/>
                        
                        <input type="submit" value="Sign up"/>
                    </div>
            </form>
}

export default SignUpForm