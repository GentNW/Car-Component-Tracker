import { useState, useEffect } from "react"
//import { useAddNewUsersMutation } from "../Features/Signup/SignupApiSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

const USER_REGEX = /^[A-z_]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

const Homepage = () => {

    const [errMsg,setErrMsg] = useState('')
    //const [persist,setPersis] = usePersist()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    function blur(){
        const content = document.querySelector(".Main-Header")!
        content.classList.toggle("blur")
    }
    function displayform (form: HTMLElement,otherform: HTMLElement){   

        if((form.style.display === 'none' || form.style.display === '') && (otherform?.style.display==='none' || otherform?.style.display==='') ){
            form.style.display = 'block'
            blur()
        }else if(form.style.display === 'block'){
            form.style.display = 'none'
            blur()
        }
    }

    function OnLoginClick(){
        const form = document.getElementById("Login-Form")!
        const otherform = document.getElementById('Signup-Form')!
        displayform(form,otherform)
    }

    function OnSignupClick(){
        const form = document.getElementById("Signup-Form")!
        const otherform = document.getElementById("Login-Form")!
        displayform(form,otherform)
    }

    const content = (
        <section className=''>
            {/*<header>
                <p className=''>Your station for self expression!</p>
            </header>*/}

            <main id='Main-Content' className='Main-Content'>
                <div id='Main-Header' className='Main-Header'>
                        <h1 className='Main-title'>Welcome to Car Doctor!</h1>
                        <nav className='Main-buttons'>
                        <button className='Main-button' onClick={OnLoginClick}>Login</button>
                        <button className='Main-button' onClick={OnSignupClick}>Sign up</button>
                        </nav>
                </div>
                
                <form id='Login-Form' className='Main-Form'>
                    <img className="Exit-Button" src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="exit button" onClick={OnLoginClick}></img>    
                    <div className='Main-Container'>

                        <label className="InputLabel">Username</label>
                        <input type="text" id="username" name="username"/>
                        <br/>
                        <label className="InputLabel">Password</label>
                        <input type="password" id="username" name="username"/>
                        <br/>
                        
                        <input type="submit" value="Login"/>
                    </div>
                </form>

                
                
            </main>
            {/*<footer>
            <p>Made by: Zeyad Medhat</p>
            </footer>*/}  
        </section>
    )
    return content
}

export default Homepage
