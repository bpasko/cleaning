import "./featuredJobs.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

const FeaturedJobs = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <Carousel>
                    <Carousel.Item className="obrazekMieszkanie">
                        <div className="custom-carousel-item">
                            <Container>
                                <Row>
                                    <div className="text-center mt-4">
                                        <h1 className="mb-4 mt-3">SPRZĄTANIE MIESZKAŃ</h1>
                                        <h4>
                                            <ul className="mt-1">
                                                <li className="mt-2">Sprzątanie pokoi</li>
                                                <li className="mt-2">Sprzątanie łazienek</li>
                                                <li className="mt-2">Sprzątanie kuchni</li>
                                                <li className="mt-2">Odkurzanie</li>
                                                <li className="mt-2">Mycie podłóg</li>
                                                <li className="mt-2">Sprzątanie balkonu</li>
                                                <li className="mt-2">Mycie okien</li>
                                            </ul>
                                        </h4>
                                    </div>
                                </Row>
                            </Container>
                        </div>

                        {/* <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE MIESZKAŃ</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    </Carousel>
            </div>
        </div>
    );
}


export default FeaturedJobs


// const FeaturedJobs = () => {
//     return (
//         <><div className="fj">
//             <div className="fjItem">
//             <img src="http://www.tutorialsscripts.com/free-icons/home-icons/blue-home-icon-256-x-256.gif" alt="" className="fjImg" />
//             <span className="fjName">Superszczotka deluxe</span>
//             <span className="fjRoom">WWA</span>
//             <span className="fjPrice">od 100$</span>
//             <div clasName="fjpRating">
//                 <button>9</button>
//                 <span>Excellent</span>
//             </div>
//         </div>
//         </div>
//         <div className="fj">
//             <div className="fjItem">
//                 <img src="http://www.tutorialsscripts.com/free-icons/home-icons/blue-home-icon-256-x-256.gif" alt="" className="fjImg" />
//                 <span className="fjName">Superszczotka deluxe</span>
//                 <span className="fjRoom">WWA</span>
//                 <span className="fjPrice">od 100$</span>
//                 <div clasName="fjRating">
//                     <button>9</button>
//                     <span>Excellent</span>
//                 </div>
//                 </div>
//             </div><div className="fj">
//             <div className="fjItem">
//                 <img src="http://www.tutorialsscripts.com/free-icons/home-icons/blue-home-icon-256-x-256.gif" alt="" className="fjImg" />
//                 <span className="fjName">Superszczotka deluxe</span>
//                 <span className="fjRoom">WWA</span>
//                 <span className="fjPrice">od 100$</span>
//                 <div clasName="fjRating">
//                     <button>9</button>
//                     <span>Excellent</span>
//                 </div>
//                 </div>
//             </div><div className="fj">
//             <div className="fjItem">
//                 <img src="http://www.tutorialsscripts.com/free-icons/home-icons/blue-home-icon-256-x-256.gif" alt="" className="fjImg" />
//                 <span className="fjName">Superszczotka deluxe</span>
//                 <span className="fjRoom">WWA</span>
//                 <span className="fjPrice">od 100$</span>
//                 <div clasName="fjRating">
//                     <button>9</button>
//                     <span>Excellent</span>
//                 </div>
//                 </div>
//             </div></>
        
//     );
// };

// export default FeaturedJobs