import { Link } from 'react-router-dom'
//import useAuth from '../../hooks/useAuth'


const Welcome = () => {

  //const { username, isBlogger, isAdmin } = useAuth()
    const username = "UserName Placeholder"
    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long',timeZone:"Africa/Cairo"}).format(date)

    const CarName1 = "Nissan X-trail"
    const CarName2 = "Mercedes C180"

    const content = (
        <>
        <section className='Welcome-Section'>
            <h1>Welcome {username} !</h1>
        </section>
        <div className='Car-List'>
            <ul className='Car-ul'>
                <div className='Car-Box'>
                    <button>
                    <h3 className='Car-Box-Text'>{CarName1}</h3>
                    <img src='https://www.brayleys.co.uk/assets/brands/nissan/x-trail/nissanx-trailteknaepowerdiamond_blackrhs.png' alt="car"></img>
                    </button>
                </div>
                <div className='Car-Box'>
                    <button>
                    <h3 className='Car-Box-Text'> {CarName2}</h3>
                    <img src='https://www.mercedes-benz.com.eg/content/dam/hq/passengercars/cars/c-class/c-class-saloon-w206-pi/modeloverview/06-2022/images/mercedes-benz-c-class-w206-modeloverview-696x392-06-2022.png' alt="car"></img>
                    </button>
                </div>
                <button className='Add-Icon'><img  src='https://cdn-icons-png.flaticon.com/512/8922/8922789.png' alt="Add icon"/></button>
            </ul>
            
            
        </div >
        </>
    )
    return content
}

export default Welcome
