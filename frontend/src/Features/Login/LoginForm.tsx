import { useState } from "react"
import { FormProps } from "react-router-dom";
import { useLoginMutation } from "../Auth/AuthApiSlice";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../Auth/AuthSlice";
import { useDispatch, UseDispatch } from "react-redux";
const LoginForm:React.FC<FormProps> = ({ onSubmit }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [GetUser, {
            isLoading,
            isSuccess,
            isError,
            error
            }] = useLoginMutation()
            const onLoggerSubmit = async(e: { preventDefault: () => void; }) => { 
                e.preventDefault() 
                try{
                    const {accessToken} = await GetUser({UserName,Password}).unwrap()
                    dispatch(setCredentials({ accessToken }))
                    navigate('/dash')
                }
                catch(err){
                    console.error(err)
                }
            }


    //const [Email,setEmail] = useState('')
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

    function OnLoginClick(){
        const form = document.getElementById("Login-Form")!
        displayform(form)
    }
    return <form id='Login-Form' className='Main-Form' onSubmit={onLoggerSubmit}>
                    <img className="Exit-Button" src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="exit button" onClick={OnLoginClick}></img>    
                    <div className='Main-Container'>

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
                        <input type="password" id="password" name="password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <br/>
                        
                        <input type="submit" value="Login"/>
                    </div>
                </form>
}

export default LoginForm