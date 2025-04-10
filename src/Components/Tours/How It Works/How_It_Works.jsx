
import './how_it_works.css'
import imgOne from '../../../assets/how it works.png'
import imgTwo from '../../../assets/what we provide.png'
import imgThree from '../../../assets/what to bring.png'


const How_It_Works = () => {
  return (
    <section className='section' id='#how-it-works'>
        <div className="container mt-lg-2 pt-5  my-lg-3 my-md-3 my-sm-2">
            <div className="tours--title text-center">
              <h3 >How <span> it works</span></h3>
            </div> 
            <div className="row">     
                <div className="col-lg-4 col-md-12 work--items">
                    <img src={imgOne} alt="img" className="w--img" />
                    <h4 className="w--title"><span>How</span> to Book</h4>
                    <p className="w--description text-center">
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Pick your preferred adventure. (we add adventure packages regularly for holidays and events!). <br />
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Click on the calendar link, and select the date you want to go.<br />
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Click Book Now. <br />
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Go to the payment screen, register, then check out.<br/>
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        That’s it! You will be emailed the starting point.<br/>
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Any questions, please email us at: info@triangle-adventures.com.<br/>
                    </p>
                </div>
                <div className="col-lg-4 col-md-12 work--items">
                    <img src={imgTwo} alt="img" className="w--img" />
                    <h4 className="w--title"><span>what</span> we provide</h4>
                    <p className="w--description text-center">
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Pedal assist, state of the art E-Bike <br />
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Small snack. <br />
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Bottled water. <br />
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Disinfected helmet (you are welcome to bring your own if preferred).<br/>
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Instruction on bikes, program overview, safety briefing...<br/>
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        If you love the bike and want to purchase a brand new one, just ask. We can even build them for you.<br/>
                    </p>
                </div>
                <div className="col-lg-4 col-md-12 work--items">
                    <img src={imgThree} alt="img" className="w--img" />
                    <h4 className="w--title"><span>what</span> to bring</h4>
                    <p className="w--description text-center">
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Bring layered warm clothes just in case. Even 80 degree weather on an e-bike can feel a bit chilly.. <br />
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Close-toed shoes.<br />
                        <i className="fa-solid fa-circle-notch" style={{color: "#f9b717", width: "30px",}}></i>
                        Your ID and credit cards for purchases of additional drinks or food during the adventure. <br />
                    </p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default How_It_Works