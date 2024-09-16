import { Link } from "react-router-dom";
const Homepage = () => {
    

    function OnLoginClick(){
        const form = document.getElementById("Login-Form")!
        const content = document.querySelector(".Main-Header")!
        if(form.style.display === 'none' || form.style.display === ''){
            form.style.display = 'block'
            content.classList.toggle("blur")
        }else{
            form.style.display = 'none'
            content.classList.toggle("blur")
        }
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
                        <Link to="/register"><button className='Main-button'>Sign up</button></Link>
                        </nav>
                </div>
                
                <form id='Login-Form' className='Login-Form'>
                    <img className="Exit-Button" src="https://cdn-icons-png.flaticon.com/512/75/75519.png" alt="exit button" onClick={OnLoginClick}></img>    
                    <div className='Login-Container'>

                        <label className="InputLabel">Username</label>
                        <input type="text" id="username" name="username"/>
                        <br/>
                        <label className="InputLabel">Password</label>
                        <input type="password" id="username" name="username"/>
                        <br/>
                        
                        <input type="submit" value="Submit"/>
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
