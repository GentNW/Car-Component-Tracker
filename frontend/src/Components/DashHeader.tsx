import { Link, useNavigate } from "react-router-dom"
import $ from 'jquery';
const DashHeader = () =>{
    
    const navigate = useNavigate()
    const onAddCompClicked = () => navigate('./newcomp')
    const onAddCarClicked = () => navigate('./newcar')
    const userIcon = document.getElementById('Dash-Icon');
    let isopen:boolean;
    /*$(document).ready(function(){
        $("img").click(function(){
          $("user-menu").toggle();
          console.log("i want to kms")
        });
      });*/

    //User menu toggle
    if(userIcon){
        userIcon.addEventListener('click', function() {
            const userMenu = document.getElementById('user-menu');
            if(userMenu){
                const currentDisplay = window.getComputedStyle(userMenu).display;
                if (!isopen) {
                    console.log(currentDisplay);
                    userMenu.style.display = 'block';
                    isopen = true;
                }  else if (isopen){
                    //console.log(isopen)
                    console.log('Hiding user menu');
                    userMenu.style.display = 'none';
                    isopen = false;
                }
            }
            
        });
    }
    
    
    

    const AddCompbutton = (
        
        <>
            <button
                className="Dash-button"
                title = "Add Component"
                onClick={onAddCompClicked}
            >AddComp</button>
        </>
    )
    const AddCarbutton = (
        <>
            <button
                className="Dash-button"
                title = "Add Car"
                onClick={onAddCarClicked}
            >AddCar</button>
        </>
    )
    const myStyle = {
        width: "40px",
        height: "40px",
        cursor: "pointer",
      };

    const UserIconbutton = (
        <>
            <img id='Dash-Icon' src='https://cdn-icons-png.flaticon.com/512/1144/1144760.png' alt='icon' className="user-icon" style={myStyle} />
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
                        <h2 className="dash-header__button"></h2>
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