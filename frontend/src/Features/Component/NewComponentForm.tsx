import $ from 'jquery';
import 'select2';
import { useEffect } from 'react';
const NewComponentForm = () =>{
    let listopen: boolean = false;
    useEffect(() => {
        // Initialize Select2 with custom templates
        $('#Comptype').select2({
          placeholder: 'Select a component',
          width: '100%',
          templateResult: formatState,  
          templateSelection: formatState, 
        });
    
        

        $(document).on('click','.select2-container',function() {
            if(!listopen){
                $('#Comptype').select2('open')
            }else{
                $('#Comptype').select2('close')
            }
            
        })

        $('#Compytype').on("select2:open",function(){
            listopen = true
        })
        $('#Compytype').on("select2:close",function(){
            listopen = false
        })
        
        
        // Cleanup on component unmount
        return () => {
            $('#Comptype').css('display', 'none')
            $('#Comptype').select2('destroy')
        };
      }, []);
      
      $('.select2-container').on('click', function () {
        $(this).find('.select2-selection').trigger('click');
      });
      

      // Function to format the dropdown items
      function formatState(state: any) {
        const baseUrl = 'Images/Icons/';
        if (state.text==="Braking system" || state.text === "Electrified powertrain components"||state.text==="Engine Cooling system" || state.text==="Engine oil system" || state.text==="Exhaust system" || state.text==="Fuel supply system" || state.text==="Suspension and steering systems" || state.text==="Transmission system") {

            return $(
              `<span className="Group-title"><img className="optgroup-image" style="width:32px; height:32px;" src="${baseUrl}/${state.text.toLowerCase()}.png" alt="Noimg" />${state.text}</span>`
            );

        }
        else{
            return $(
                `<span className="Component-text">${state.text}</span>`
              );
        }
      }
      
    const content = (
    <>
        
        <form className='NewCompForm'>
            <div className='NewCompContainer'>
                <label className="InputLabel">Component Name</label>
                {/*<img src="https://cdn-icons-png.flaticon.com/512/950/950484.png" alt="idk lol"></img>*/}

                <select name="Comptype" id="Comptype" className='Comptype'>
                    
                    <optgroup label="Braking system" className="Optgroup">    
                        <option value="ABS">ABS</option>
                        <option value="Adjuster-star-wheel">Adjuster star wheel</option>
                        <option value="Anchor">Anchor</option>
                        <option value="Bleed-nipple">Bleed nipple</option>
                        <option value="Brake-backing-plate">Brake backing plate</option>
                        <option value="Brake-backing-pad">Brake backing pad</option>
                        <option value="Brake-cooling-duct">Brake cooling duct</option>
                        <option value="Brake-disk">Brake disk</option>
                        <option value="Brake-fluid">Brake fluid</option>
                        <option value="Brake-drum">Brake drum</option>
                        <option value="Brake-lining">Brake lining</option>
                        <option value="Brake-pad">Brake pad</option>
                        <option value="Brake-pedal">Brake pedal</option>
                        <option value="Brake-piston">Brake piston</option>
                        <option value="Brake-pump">Brake pump</option>
                        <option value="Brake-roll">Brake roll</option>
                        <option value="Brake-rotor">Brake rotor</option>
                        <option value="Brake-servo">Brake servo</option>
                        <option value="Brake-shoe">Brake shoe</option>
                        <option value="Brake-warning-light">Brake warning light</option>
                        <option value="Calibrated-friction-brake">Calibrated friction brake</option>
                        <option value="Caliper">Caliper</option>
                        <option value="Combination-valve">Combination valve</option>
                        <option value="Dual-circuit-brake-system">Dual circuit brake system</option>
                        <option value="Hold-down-springs">Hold-down springs</option>
                        <option value="Hose">Hose</option>
                        <option value="Hydraulic-booster-unit">Hydraulic booster unit</option>
                        <option value="Load-sensing-valve">Load-sensing valve</option>
                    </optgroup>

                    <optgroup label="Electrified powertrain components" className='Optgroup'>
                        <option value="Electric-motor">Electric motor</option>
                        <option value="High-voltage-battery-pack">High voltage battery pack</option>
                        <option value="Battery-management-system">Battery management system</option>
                        <option value="Fuel-cell">Fuel cell</option>
                        <option value="Hydrogen-tank">Hydrogen tank</option>
                        <option value="DC-DC-converter">DC-DC converter</option>
                        <option value="Inverter">Inverter</option>
                        <option value="Charge-port" className='electric'>Charge port</option>
                        <option value="Antifreeze">Antifreeze</option>
                        <option value="Charger" className='electric'>Charger</option>
                    </optgroup>

                    <optgroup label="Engine Cooling system">
                        <option value="Air-blower">Air Blower</option>
                        <option value="Coolant-hose">Coolant hose</option>
                        <option value="Cooling-fan">Cooling fan</option>
                        <option value="Fan-belt">Fan belt</option>
                        <option value="Fan-clutch">Fan clutch</option>
                        <option value="Radiator">Radiator</option>
                        <option value="Water-neck">Water neck</option>
                        <option value="Water-pipe">Water pipe</option>
                        <option value="Water-pump">Water pump</option>
                        <option value="Water-pump-gasket">Water pump gasket</option>
                        <option value="Water-tank">Water tank</option>
                    </optgroup>

                    <optgroup label="Engine oil system">
                        <option value="Oil-filter">Oil filter</option>
                        <option value="Oil-gasket">Oil gasket</option>
                        <option value="Oil-pan">Oil pan</option>
                        <option value="Oil-pipe">Oil pipe</option>
                        <option value="Oil-pump">Oil pump</option>
                        <option value="Oil-strainer">Oil strainer</option>
                        <option value="Oil-suction-filter">Oil suction filter</option>
                    </optgroup>

                    <optgroup label="Exhaust system">
                        <option value="Catalytic-converter">Catalytic converter</option>
                        <option value="Exhaust-pipe">Exhaust pipe</option>
                        <option value="Heat-Shield">Heat shield</option>
                        <option value="Resonator">Resonator</option>
                        <option value="Muffler">Muffler</option>
                        <option value="Spacer-ring">Spacer ring</option>
                    </optgroup>

                    <optgroup label="Fuel supply system">
                        <option value="Air-filter">Air filter</option>
                        <option value="Carburetor">Carburetor</option>
                        <option value="Choke-cable">Choke cable</option>
                        <option value="EGR-valve">EGR valve</option>
                        <option value="Fuel-cap">Fuel cap</option>
                        <option value="Fuel-cell">Fuel cell</option>
                        <option value="Fuel-cooler">Fuel cooler</option>
                        <option value="Fuel-distributor">Fuel distributor</option>
                        <option value="Fuel-filter">Fuel filter</option>
                        <option value="Fuel-filter-seal">Fuel filter seal</option>
                        <option value="Fuel-injector">Fuel injector</option>
                        <option value="Fuel-injector-nozzle">Fuel injector nozzle</option>
                        <option value="Fuel-line">Fuel line</option>
                        <option value="Fuel-pump">Fuel pump</option>
                        <option value="Fuel-pump-gasket">Fuel pump gasket</option>
                        <option value="Fuel-pressure-regulator">Fuel pressure regulator</option>
                        <option value="Fuel-rail">Fuel rail</option>
                        <option value="Fuel-tank">Fuel tank</option>
                        <option value="Fuel-water-separator">Fuel water separator</option>
                        <option value="Intake-manifold">Intake-manifold</option>
                        <option value="Intake-manifold-gasket">Intake manifold gasket</option>
                        <option value="LPG-system-assembly">LPG system assembly</option>
                        <option value="Throttle-body">Throttle body</option>
                    </optgroup>

                    <optgroup label="Suspension and steering systems">
                        <option value="Axle">Axle</option>
                        <option value="Ball-joint">Ball oint</option>
                        <option value="Camber-arm">Camber arm</option>
                        <option value="Control-arm">Control arm</option>
                        <option value="Idler-arm">Idler arm</option>
                        <option value="Kingpin">Kingpin</option>
                        <option value="Lateral-link">Lateral link</option>
                        <option value="Panhard-rod">Panhard rod</option>
                        <option value="Pitman-arm">Pitman arm</option>
                        <option value="Power-steering">Power steering</option>
                        <option value="Rack-end">Rack end</option>
                        <option value="Shock-absorber">Shock absorber</option>
                        <option value="Spindle">Spindle</option>
                        <option value="Spring">Spring</option>
                        <option value="Stabilizer-bars">Stabilizer bars</option>
                        <option value="Steering-arm">Steering arm</option>
                        <option value="Steering-box">Steering box</option>
                        <option value="Steering-pump">Steering pump</option>
                        <option value="Steering-column-assembly">Steering column assembly</option>
                        <option value="Steering-rack">Steering rack</option>
                        <option value="Steering-shaft">Steering shaft</option>
                        <option value="Steering-wheel">Steering wheel</option>
                        <option value="Strut">Strut</option>
                        <option value="Stub-axle">Stub axle</option>
                        <option value="Suspension-link">Suspension link</option>
                        <option value="Tie-Rod-End">Tie Rod End</option>
                        <option value="Trailing-arm">Trailing arm</option>
                    </optgroup>


                    <optgroup label="Transmission system">
                        <option value="Adjustable-pedal">Adjustable pedal</option>
                        <option value="Axle-shaft">Axle shaft</option>
                        <option value="Bell-housing">Bell housing</option>
                        <option value="Universal-joint">Universal joint</option>
                        <option value="Carrier-assembly">Carrier assembly</option>
                        <option value="Chain-wheel-and-sprocket">Chain wheel and sprocket</option>
                        <option value="Clutch-assembly">Clutch assembly</option>
                        <option value="Clutch-cable">Clutch cable</option>
                        <option value="Clutch-disk">Clutch disk</option>
                        <option value="Clutch-fan">Clutch fan</option>
                        <option value="Clutch-fork">Clutch fork</option>
                        <option value="Clutch-hose">Clutch hose</option>
                        <option value="Clutch-lever">Clutch lever</option>
                        <option value="Clutch-lining">Clutch lining</option>
                        <option value="Differential">Differential</option>
                        <option value="Flywheel">Flywheel</option>
                        <option value="Gear-stick">Gear stick</option>
                        <option value="Gearbox">Gearbox</option>
                        <option value="Idler-gear">Idler gear</option>
                        <option value="Knuckle">Knuckle</option>
                        <option value="Master-cylinder">Master cylinder</option>
                        <option value="Output-shaft">Output shaft</option>
                        <option value="Pinion">Pinion</option>
                        <option value="Planetary-gear-set">Planetary gear set</option>
                        <option value="Prop-shaft">Prop shaft</option>
                        <option value="Shift-cable">Shift cable</option>
                        <option value="Shift-fork">Shift fork</option>
                        <option value="Shift-knob">Shift knob</option>
                        <option value="Slave-cylinder">Slave cylinder</option>
                        <option value="Speed-reducer">Speed reducer</option>
                        <option value="Speedometer-gear">Speedometer gear</option>
                        <option value="Steering-gear">Steering gear</option>
                        <option value="Torque-converter">Torque converter</option>
                        <option value="Trans-axle-housing">Trans-axle housing</option>
                        <option value="Transfer-case">Transfer case</option>
                        <option value="Transmission-gear">Transmission gear</option>
                        <option value="Transmission-pan">Transmission pan</option>
                        <option value="Transmission-seal-and-bonded-piston">Transmission seal and bonded piston</option>
                        <option value="Transmission-spring">Transmission spring</option>
                        <option value="Transmission-yoke">Transmission yoke</option>
                    </optgroup>


                </select>
                <br/>
                <label className="InputLabel">Change date</label>
                <input type="date" id="ChangeDate" name="ChangeDate"/>
                <br/>
                <label className="InputLabel">Mileage on change</label>
                <input type="number" min="1" id="MileChange" name="MileChange"/>
                <br/>
                
                <input type="submit" value="Submit"/>
                <a href="https://www.flaticon.com/authors/ddara" title="icons">Component icons created by dDara</a>
            </div>
        </form>
    </>
    )
    return content
}

export default NewComponentForm