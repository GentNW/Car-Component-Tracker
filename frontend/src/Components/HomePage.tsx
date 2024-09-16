import { Link } from "react-router-dom";
const Homepage = () => {
    
    const content = (
        <section className=''>
            {/*<header>
                <p className=''>Your station for self expression!</p>
            </header>*/}

            <main className='Main-content'>
                <div className=''>
                        <h1 className='Main-title'>Welcome to Car Doctor!</h1>
                        <nav className='Main-buttons'>
                            <span className='Main-button'><Link to="/login">Login</Link></span>
                            <span className='Main-button'><Link to="/register">Sign up</Link></span>
                        </nav>
                </div>
                
            </main>
            {/*<footer>
            <p>Made by: Zeyad Medhat</p>
            </footer>*/}  
        </section>
    )
    return content
}

export default Homepage
