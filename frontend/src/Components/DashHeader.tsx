import { Link} from "react-router-dom"
const DashHeader = () =>{

    

    //User menu toggle
    function HideSection(menu:HTMLElement){
        menu.style.display = 'none'
    }

    function OnClickOutside(event:MouseEvent){
        const menu = document.getElementById("user-menu")! as HTMLElement
        const icon = document.getElementById("user-icon")! as HTMLElement
        
        if(menu && !menu.contains(event.target as Node) ){
            if(icon && !icon.contains(event.target as Node)){
                HideSection(menu);
            }
            
        }
    }
    document.addEventListener('click', OnClickOutside);
    
    function OnProfileClick(){
        const menu = document.getElementById("user-menu")! as HTMLElement
        if((menu.style.display === 'none' || menu.style.display === '') ){
            menu.style.display = 'block'

        }else if(menu.style.display === 'block'){
            menu.style.display = 'none'

        }
    }

    //Button to display user menu
    const UserIconbutton = (
        <>
            <button onClick={OnProfileClick} className="user-icon" id="user-icon"><img id='Dash-Icon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' alt='icon' /></button>
        </>
    )
     

    const ButtonContent=(
        <>
            {UserIconbutton}
        </>
    )
    const content = (
        <>
            <p className="egg">D4 WILL COME BACK</p>
            <header className='dash-header'>
                <div className={`dash-header__container`}>
                    <div className="left-content">
                        <h2 className="dash-header__button">idk</h2>
                    </div>

                    <div className="center-content">
                        <Link to="/dash">
                            <h1 className='dash-header__title'>Car Doctor</h1>
                        </Link>

                    </div>

                    <div className="right-content">
                        <nav className='dash-header__nav'>
                            {ButtonContent}
                        </nav>
                    </div>
                    
                </div>

        </header>
        <section id="user-menu" className="user-menu">
                    <ul>
                        <li><a href="/newcomp">Add Component</a></li>
                        <li><a href="/newcar">Add Car</a></li>
                        <li><a href="/cars">Cars</a></li>
                        <li><a href="/settings">Settings</a></li>
                        <li><a href="/logout">logout</a></li>
                    </ul>
        </section>
        </>

    )

    return content
}

export default DashHeader