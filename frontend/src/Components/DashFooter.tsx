import { Link } from "react-router-dom"

const DashFooter = () =>{

    const content = (
        <>
            <footer className="Dash-footer">
                <div className="Dash-footer__container">
                    <div className="Dash-footer__center">
                            <p className = "Dash-footer__title">© 2024 idk, Inc.</p>
                            
                            <a className = "Dash-footer-link" href="/TOS">Terms of service</a>
                            <a className = "Dash-footer-link" href="/FAQ">FAQ</a>
                            <a className = "Dash-footer-link" href="/aboutus">about us</a>
                            <a className = "Dash-footer-link" href="/support">contact</a>
                    </div>    
                    <p>This web app is not affiliated with or endorsed by any car manufacturer mentioned.</p>
                </div>
                
            </footer>
        </>
    )

    return content
}

export default DashFooter