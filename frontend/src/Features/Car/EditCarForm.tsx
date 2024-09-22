const EditComponentForm = () =>{
    //the selected component
    let CarNamePlaceholder: string ="CarNamePlaceholder"
    let CarBrandPlaceholder: string ="CarBrandPlaceholder"

    const content = (
    <>
        <form className='CompForm'>
            <div className='CompContainer'>
                
                <label className="InputLabel">Car Brand</label>
                <label className='InputLabel'>{CarBrandPlaceholder}</label>  
                <br/>

                <label className="InputLabel">Car Model</label>
                <label className='InputLabel'>{CarNamePlaceholder}</label>
                <br/>

                <label className="InputLabel">Mileage</label>
                <input type="number" min="1" id="Mileage" name="Mileage"/>
                <br/>
                
                <input type="submit" value="Submit"/>
            </div>
        </form>
    </>
    )
    return content
}

export default EditComponentForm