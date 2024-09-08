const EditComponentForm = () =>{
    let compnameplaceholder: string ="yes"

    const content = (
    <>
        <form className='CompForm'>
            <div className='CompContainer'>
                <label className="InputLabel">Component Name</label>
                <label className='InputLabel'>{compnameplaceholder}</label>  
                <br/>
                <label className="InputLabel">Change date</label>
                <input type="date" id="ChangeDate" name="ChangeDate"/>
                <br/>
                <label className="InputLabel">Mileage on change</label>
                <input type="number" min="1" id="MileChange" name="MileChange"/>
                <br/>
                
                <input type="submit" value="Submit"/>
            </div>
        </form>
    </>
    )
    return content
}

export default EditComponentForm