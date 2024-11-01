import './footer.css';

const Footer = () => {
  return (
    <div className="footer mt-5">
        <footer className="text-center text-white footer--items">
        
            <div className="container p-4">              
                <div className="mb-4">               
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/RTPadventures" role="button" target='_blank'
                        ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href='https://www.instagram.com/triangleadventures?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' role="button"
                        ><i className="fab fa-instagram"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.tiktok.com/@triangleadventures?fbclid=IwAR1HdlLPS7IhsTF_RPjWTZduqpEmrB2qsP2dFf7soJrqdm3EB9UEsfG3pls" target='_blank' role="button"
                        ><i className="fa-brands fa-tiktok"></i
                    ></a> 
                </div>     
                <div>                 
                    <div className="row d-flex justify-content-center">
                        <div className="row justify-content-center pb-4" >
                            <div className="col-auto">
                                <h5 className="pt-2  ">
                                    <strong>Subscribe to our newsletter</strong>
                                </h5>
                            </div>
                        </div>
                        <div className="col-auto">                            
                            <a  className="btn btn-outline-light mb-4" href='https://squareup.com/customer-programs/enroll/117pbzsBXauM?utm_medium=copied-link&utm_source=online!' target='_blank'>
                                Subscribe
                            </a>
                        </div>                   
                    </div>                   
                </div>    
                <div className="row">    
                    <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase footer--title">About Us</h5>
                        <ul className="list-unstyled mb-0 foo--list">
                            <li className='m-3'>
                                <a href="#" className="text-white footer--opts ">Who We Are</a>
                            </li>
                            <li className='m-3'>
                                <a href="#" className="text-white footer--opts">How It Works</a>
                            </li>
                            <li className='m-3'>
                                <a href="#" className="text-white footer--opts">Faq</a>
                            </li>                           
                        </ul>
                    </div>
                

                    
                    <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase footer--title">Contact Us</h5>

                        <ul className="list-unstyled mb-0 foo--list">
                            <li className='m-3'>
                                <a href="#" className="text-white footer--opts">Email</a>
                            </li>
                            <li className='m-3'>
                                <a href="#" className="text-white footer--opts">Phone</a>
                            </li>
                            
                        </ul>
                    </div>

                    
                </div>
            </div>
            <div className="text-center p-2">
                © 2024 Triangle's Adventures. All rights reserved
            </div>
            <div className="text-center p-2 pb-5">
                Design by: WebSense Studio
            </div> 
        </footer>
    </div>   
  )
}

export default Footer;