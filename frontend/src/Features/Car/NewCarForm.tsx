import $ from 'jquery';
import 'select2';
import { useEffect } from 'react';
const NewCarForm = () =>{

      
    const content = (
    <>
        
        <form className='CompForm'>
            <div className='CompContainer'>

                <label className='InputLabel'>Car Brand</label>
                <select name="Comptype" id="Comptype" className='Comptype'>
                    
                    <optgroup label="Asia" className="Optgroup">    
                        <option value="Toyota">Toyota</option>
                        <option value="Hyundai">Hyundai</option>
                        <option value="Nissan">Nissan</option>
                        <option value="Kia">Kia</option>
                        <option value="Lexus">Lexus</option>
                        <option value="Suberu">Suberu</option>
                        <option value="Suzuki">Suzuki</option>
                        <option value="Mitsubishi">Mitsubishi</option>
                        <option value="Mazda">Mazda</option>
                        <option value="Isuzu">Isuzu</option>
                    </optgroup>

                    <optgroup label="Europe" className='Optgroup'>
                        <option value="BMW">BMW</option>
                        <option value="Audi">Audi</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="Opel">Opel</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Maybach">Maybach</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Renault">Renault</option>
                        <option value="Peugeot">Peugeot</option>
                        <option value="Fiat">Fiat</option>
                        <option value="Škoda">Škoda</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Alfa-Romeo">Alfa Romeo</option>
                    </optgroup>

                    <optgroup label="North America">
                        <option value="Ford">Ford</option>
                        <option value="Chevrolet">Chevrolet</option>
                        <option value="Tesla">Tesla</option>
                        <option value="Dodge">Dodge</option>
                        <option value="Jeep">Jeep</option>
                        <option value="GMC">GMC</option>
                        <option value="Cadillac">Cadillac</option>
                        <option value="Ram">Ram</option>
                    </optgroup>

                    <optgroup label="Australia">
                        <option value="Holden">Holden</option>
                    </optgroup>
                </select>

                <label className="InputLabel">Car Model</label>
                <input type="text" id="CarModel" name="CarModel"/>
                <br/>
                
                <label className="InputLabel">Mileage</label>
                <input type="number" id="Mileage" name="Mileage"/>
                <br/>
                
                <input type="submit" value="Submit"/>
            </div>
        </form>
    </>
    )
    return content
}

export default NewCarForm