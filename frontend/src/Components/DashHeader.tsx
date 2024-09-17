import { Link, useNavigate } from "react-router-dom"
const DashHeader = () =>{
    
    const navigate = useNavigate()
    const onAddCompClicked = () => navigate('./newcomp')
    const onAddCarClicked = () => navigate('./newcar')

    //User menu toggle
    function OnProfileClick(){
        const menu = document.getElementById("user-menu")!
        if((menu.style.display === 'none' || menu.style.display === '') ){
            menu.style.display = 'block'

        }else if(menu.style.display === 'block'){
            menu.style.display = 'none'

        }
    }

    const AddCompbutton = (
        
        <>
            <button
                className="Dash-Header__Button"
                title = "Add Component"
                onClick={onAddCompClicked}
            >
                    AddComp
            </button>
        </>
    )
    const AddCarbutton = (
        <>
            <button
                className="Dash-Header__Button"
                title = "Add Car"
                onClick={onAddCarClicked}
            >
                    AddCar
            </button>
        </>
    )
    const UserIconbutton = (
        <>
            <button onClick={OnProfileClick} className="user-icon"><img id='Dash-Icon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' alt='icon' className="user-icon" /></button>
        </>
    )
     

    const buttonContent=(
        <>
            {AddCompbutton}
            {AddCarbutton}
            {UserIconbutton}
            {/*<p>Buttons(AddComp,AddCar,Usericon)</p>*/}
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
                            {buttonContent}
                        </nav>
                    </div>
                    
                </div>

        </header>
        <section id="user-menu" className="user-menu">
                    <ul>
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