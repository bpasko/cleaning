import "./featured.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Container } from 'react-bootstrap';


{/* !!!!!!!!! PRZĄTANIE MIESZKAŃ - wstawilam <Container fluid>  !!!!!! */ }

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <Carousel>
                    <Carousel.Item>
                        <div className="featured-div custom-carousel-item">
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="image-container d-flex align-items-center justify-content-center">
                                            <img
                                                className="d-block w-100 obrazek"
                                                src={require('./files/mieszkanie.png')}
                                                alt="SPRZĄTANIE MIESZKAŃ" />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="text-column">
                                            <p><h2>Firma sprzątająca mieszkania oferuje szeroki zakres usług, w tym:</h2>
                                                <h4>
                                                    <ul>
                                                        <li>Sprzątanie pokoi</li>
                                                        <li>Sprzątanie łazienek</li>
                                                        <li>Sprzątanie kuchni</li>
                                                        <li>Odkurzanie</li>
                                                        <li>Mycie podłóg</li>
                                                        <li>Sprzątanie balkonu</li>
                                                        <li>Mycie okien</li>
                                                    </ul>
                                                </h4>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>

                        <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE MIESZKAŃ</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

  {/* !!!!!!! SPRZĄTANIE DOMÓW !!!!!! */}
                    <Carousel.Item>
                        <div className="featured-div custom-carousel-item">
                            <Row>
                                <Col>
                                    <div className="image-container d-flex align-items-center justify-content-center">
                                        <img
                                            className="d-block w-100 obrazek"
                                            src={require('./files/dom.png')}
                                            alt="SPRZĄTANIE DOMÓW" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="text-column">
                                        <p><h2>Firma sprzątająca oferuje różnorodne usługi, aby zadbać o czystość i porządek w całym domu. Sprzątanie domu obejmuje:</h2>
                                            <h4>
                                                <ul>
                                                    <li>Czyszczenie mebli </li>
                                                    <li>Sprzątanie podłóg</li>
                                                    <li>Czyszczenie łazienek</li>
                                                    <li>Czyszczenie kuchni</li>
                                                    <li>Pranie dywanów i wykładzin</li>
                                                    <li>Sprzątanie balkonów i tarasów</li>
                                                    <li>Mycie okien</li>
                                                </ul>
                                            </h4>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE DOMÓW</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

 {/* !!!!!! SPRZĄTANIE BIUR !!!!! */}
                    <Carousel.Item>
                        <div className="featured-div custom-carousel-item">
                            <Row>
                                <Col>
                                    <div className="image-container d-flex align-items-center justify-content-center">
                                        <img
                                            className="d-block w-100 obrazek"
                                            src={require('./files/biuro.png')}
                                            alt="SPRZĄTANIE BIUR" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="text-column">
                                        <p>
                                            <h2>Firma sprzątająca oferuje usługi regularnego czyszczenia biur w celu utrzymania ich w czystości i dobrym stanie. Usługi te obejmują:
                                            </h2>
                                            <h4>
                                                <ul>
                                                    <li>Sprzątanie biur</li>
                                                    <li>Opróżnianie koszy na śmieci</li>
                                                    <li>Czyszczenie i dezynfekcję łazienek</li>
                                                    <li>Czyszczenie kuchni lub aneksu kuchennego</li>
                                                    <li>Mycie podłóg</li>
                                                    <li>Czyszczenie wykładzin lub dywanów</li>
                                                    <li>Mycie okien</li>
                                                </ul>
                                            </h4>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE BIUR</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

  {/* !!!!!! SPRZĄTANIE PO REMONCIE !!!!!! */}

                    <Carousel.Item>
                        <div className="featured-div custom-carousel-item">
                            <Row>
                                <Col>
                                    <div className="image-container d-flex align-items-center justify-content-center">
                                        <img
                                            className="d-block w-100 obrazek"
                                            src={require('./files/remont.png')}
                                            alt="SPRZĄTANIE MIESZKAŃ" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="text-column">
                                        <p>
                                            <h2>Usługa "sprzątania po remoncie" polega na przeprowadzeniu kompleksowego sprzątania po zakończeniu prac budowlanych oraz obejmuje:
                                            </h2>
                                            <h4>
                                                <ul>
                                                    <li>Usuwanie gruzu</li>
                                                    <li>Usuwanie wszelkich pozostałości takich jak resztki farby, taśmy czy kleju.</li>
                                                    <li>Czyszczeniu pomieszczeń</li>
                                                    <li>Myciu podłóg</li>
                                                    <li>Czyszczeniu wykładzin lub dywanów</li>
                                                    <li>Myciu okien</li>
                                                </ul>
                                            </h4>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE PO REMONCIE</h3>
                            {/* <p>przyukladowty tekst SPRZĄTANIE MIESZKAŃ</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>

  {/* !!!!! SPRZĄTANIE PO WYNAJMIE !!!! */}

                    <Carousel.Item>
                        <div className="featured-div custom-carousel-item">
                            <Row>
                                <Col>
                                    <div className="image-container d-flex align-items-center justify-content-center">
                                        <img
                                            className="d-block w-100 obrazek"
                                            src={require('./files/wynajem.png')}
                                            alt="SPRZĄTANIE PO WYNAJMIE" />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="text-column">
                                        <p>
                                            <h2>Celem tej usługi jest przywrócenie porządku i czystości w pomieszczeniach, aby były gotowe do dalszego użytku. Oferowana usługa polega na:
                                            </h2>
                                            <h4>
                                                <ul>
                                                    <li>Sprzątaniu pokoi</li>
                                                    <li>Czyszczeniuaneksu kuchennego lub kuchni</li>
                                                    <li>Czyszczeniu i dezynfekcji łazienek</li>
                                                    <li>Myciu podłóg</li>
                                                    <li>Czyszczeniu wykładzin lub dywanów</li>
                                                    <li>Myciu okien</li>
                                                </ul>
                                            </h4>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE PO WYNAJMIE</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Featured;


// <div className="featuredItem">
//                 <img src="https://media.istockphoto.com/id/1316473356/pl/zdjęcie/pracownik-wyciąga-wózek-do-biur-sprzątających-sprzątaczka-kobieta-jest-zaangażowana-w-pracę.jpg?s=612x612&w=is&k=20&c=uyFBwUGOi8nwALAUhn-Ydl3Tkdt-07jPngdnNV48RDQ=" alt="" className="featuredImg" />
//                 <div className="featuredTitles">
//                     <h1>odkurzaszmichate</h1>
//                     <h2>myjeszmiokno</h2>
//                 </div>
//             </div>
//             <div className="featuredItem">
//                 <img src="https://media.istockphoto.com/id/1316473356/pl/zdjęcie/pracownik-wyciąga-wózek-do-biur-sprzątających-sprzątaczka-kobieta-jest-zaangażowana-w-pracę.jpg?s=612x612&w=is&k=20&c=uyFBwUGOi8nwALAUhn-Ydl3Tkdt-07jPngdnNV48RDQ=" alt="" className="featuredImg" />
//                 <div className="featuredTitles">
//                     <h1>odkurzaszmichate</h1>
//                     <h2>myjeszmiokno</h2>
//                 </div>
//             </div>