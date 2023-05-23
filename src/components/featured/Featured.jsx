import "./featured.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';


{/* !!!!!!!!! PRZĄTANIE MIESZKAŃ - wstawilam <Container fluid>  !!!!!! */ }

const Featured = () => {
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



                    {/* !!!!!!! SPRZĄTANIE DOMÓW !!!!!! */}
                    <Carousel.Item className="obrazekDom">
                        <div className="custom-carousel-item">
                            <Container>
                                <Row>
                                    <div className="text-center mt-4">
                                        <h1 className="mb-4 mt-3">SPRZĄTANIE DOMÓW</h1>
                                        <h4>
                                            <ul className="mt-1">
                                                <li className="mt-2">Czyszczenie mebli </li>
                                                <li className="mt-2">Sprzątanie podłóg</li>
                                                <li className="mt-2">Czyszczenie łazienek</li>
                                                <li className="mt-2">Czyszczenie kuchni</li>
                                                <li className="mt-2">Mycie okien</li>
                                                <li className="mt-2">Sprzątanie balkonów i tarasów</li>
                                                <li className="mt-2">Pranie dywanów i wykładzin</li>
                                            </ul>
                                        </h4>
                                    </div>
                                </Row>
                            </Container>
                        </div>

                        {/* <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE DOMÓW</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                    {/* !!!!!! SPRZĄTANIE BIUR !!!!! */}
                    <Carousel.Item className="obrazekBiuro">
                        <div className="custom-carousel-item">
                            <Container>
                                <Row>
                                <div className="text-center mt-4">
                                    <h1 className="mb-4 mt-3">SPRZĄTANIE BIUR</h1>
                                    <h4>
                                        <ul className="mt-1">
                                            <li className="mt-2">Sprzątanie biur</li>
                                            <li className="mt-2">Opróżnianie koszy na śmieci</li>
                                            <li className="mt-2">Czyszczenie i dezynfekcję łazienek</li>
                                            <li className="mt-2">Czyszczenie kuchni lub aneksu kuchennego</li>
                                            <li className="mt-2">Mycie podłóg</li>
                                            <li className="mt-2">Czyszczenie wykładzin lub dywanów</li>
                                            <li className="mt-2">Mycie okien</li>
                                        </ul>
                                    </h4>
                                    </div>
                                </Row>
                            </Container>
                        </div>

                        {/* <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE BIUR</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                    {/* !!!!!! SPRZĄTANIE PO REMONCIE !!!!!! */}

                    <Carousel.Item className="obrazekRemont">
                        <div className="custom-carousel-item">
                            <Container>
                                <Row>
                                <div className="text-center mt-4">
                                    <h1 className="mb-4 mt-3">SPRZĄTANIE PO REMONCIE
                                    </h1>
                                    <h4>
                                        <ul className="mt-1">
                                            <li className="mt-2">Usuwanie gruzu</li>
                                            <li className="mt-2">Usuwanie wszelkich pozostałości takich jak resztki farby, taśmy czy kleju</li>
                                            <li className="mt-2">Czyszczenie pomieszczeń</li>
                                            <li className="mt-2">Mycie podłóg</li>
                                            <li className="mt-2">Mycie okien</li>
                                            <li className="mt-2">Czyszczenie wykładzin lub dywanów</li>
                                        </ul>
                                    </h4>
                                    </div>
                                </Row>
                            </Container>
                        </div>

                        {/* <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE PO REMONCIE</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>

                    {/* !!!!! SPRZĄTANIE PO WYNAJMIE !!!! */}

                    <Carousel.Item className="obrazekWynajem">
                        <div className="custom-carousel-item">
                            <Container>
                                <Row>
                                <div className="text-center mt-4">
                                    <h1 className="mb-4 mt-3">SPRZATANIE PO WYNAJMIE
                                    </h1>
                                    <h4>
                                        <ul className="mt-1">
                                            <li className="mt-2">Sprzątanie pokoi</li>
                                            <li className="mt-2">Czyszczenie aneksu kuchennego lub kuchni</li>
                                            <li className="mt-2">Czyszczenie i dezynfekcji łazienek</li>
                                            <li className="mt-2">Mycie podłóg</li>
                                            <li className="mt-2">Czyszczenie wykładzin lub dywanów</li>
                                            <li className="mt-2">Mycie okien</li>
                                        </ul>
                                    </h4>
                                    </div>
                                </Row>
                            </Container>
                        </div>

                        {/* <Carousel.Caption className="caption-black">
                            <h3>SPRZĄTANIE PO WYNAJMIE</h3>
                        </Carousel.Caption> */}
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