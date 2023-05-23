import "./joblist.css"

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import img1 from './files/piekarnikAmica.jpeg';
import img2 from './files/kuchenkaBeko.jpeg';
import img3 from './files/lodowkaCandy.jpeg';
import img4 from './files/mikrofalowkaOk.jpeg';
import img5 from './files/okno.png';
import img6 from './files/odkurzacz.jpeg';
import img7 from './files/kontener.jpeg';
import img8 from './files/zelazko.jpg';


const Joblist = () => {
  const cardData = [
    {
      title: 'Mycie piekarnika',
      description: 'cena: 20zł',
      image: img1
    },
    {
      title: 'Mycie kuchenki',
      description: 'cena: 30zł',
      image: img2
    },
    {
      title: 'Mycie lodówki',
      description: 'cena: 30zł',
      image: img3
    },
    {
      title: 'Mycie mikrofalówki',
      description: 'cena: 20zł',
      image: img4
    },
    {
      title: 'Mycie okien',
      description: 'cena: 50zł/szt.',
      image: img5
    },
    {
      title: 'Czyszczenie dywanów',
      description: 'cena: 30zł/m2',
      image: img6
    },
    {
      title: 'Wywóz gruzu',
      description: 'cena: 200zł/kontener',
      image: img7
    },
    {
      title: 'Prasowanie',
      description: 'cena: 50zł/h.',
      image: img8
    },
    // Dodaj dane dla kolejnych kart
  ];
  return (
    <Row xs={1} md={4} className="g-4">
      {cardData.map((card, idx) => (
        <Col key={idx} >
          <Card border="primary">
            <Card.Img variant="top" src={card.image} className="card-image image-center"/>
            <Card.Body className="text-center">
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Joblist;



// import "./joblist.css"

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';


// const Joblist = () => {
//   const cardData = [
//     {
//       title: 'Card 1',
//       description: 'This is the description for Card 1.',
//       image: './files/piekarnik.png'
//     },
//     {
//       title: 'Card 1',
//       description: 'This is the description for Card 1.',
//       image: './files/kuchenkaZokapem.jpeg'
//     },
//     {
//       title: 'Card 1',
//       description: 'This is the description for Card 1.',
//       image: './files/lodowka.png'
//     },
//     {
//       title: 'Card 1',
//       description: 'This is the description for Card 1.',
//       image: './files/mikrofalowka.png'
//     },
//     {
//       title: 'Card 1',
//       description: 'This is the description for Card 1.',
//       image: './files/okno.png'
//     },
//     {
//       title: 'Card 1',
//       description: 'This is the description for Card 1.'
//     },
//     {
//       title: 'Card 2',
//       description: 'This is the description for Card 2.'
//     },
//     // Dodaj dane dla kolejnych kart
//   ];
//   return (
//     <Row xs={1} md={4} className="g-4">
//       {cardData.map((card, idx) => (
//         <Col key={idx}>
//           <Card>
//             <Card.Img variant="top" src={require(`${card.image}`)} />
//             <Card.Body>
//               <Card.Title>{card.title}</Card.Title>
//               <Card.Text>{card.description}</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default Joblist;






{/* <div className="jList">
            <div className="jListItem">
                <img src="https://media.gettyimages.com/id/183881669/photo/house.jpg?s=1024x1024&w=gi&k=20&c=jlhoZnSUOQgfnv2Ohr1bpb_m9G5K3RL5Jpvzwt_zCkU=" alt="" className="pList" />
            <div className="jListTitles">
                <h1>Jobs</h1>
                <h2>999 open</h2>
            </div>
            </div>
            <div className="jListItem">
                <img src="https://media.gettyimages.com/id/183881669/photo/house.jpg?s=1024x1024&w=gi&k=20&c=jlhoZnSUOQgfnv2Ohr1bpb_m9G5K3RL5Jpvzwt_zCkU=" alt="" className="pList" />
            <div className="jListTitles">
                <h1>Jobs</h1>
                <h2>999 open</h2>
            </div>
            </div>
            <div className="jListItem">
                <img src="https://media.gettyimages.com/id/183881669/photo/house.jpg?s=1024x1024&w=gi&k=20&c=jlhoZnSUOQgfnv2Ohr1bpb_m9G5K3RL5Jpvzwt_zCkU=" alt="" className="pList" />
            <div className="jListTitles">
                <h1>Jobs</h1>
                <h2>999 open</h2>
            </div>
            </div>
            <div className="jListItem">
                <img src="https://media.gettyimages.com/id/183881669/photo/house.jpg?s=1024x1024&w=gi&k=20&c=jlhoZnSUOQgfnv2Ohr1bpb_m9G5K3RL5Jpvzwt_zCkU=" alt="" className="pList" />
            <div className="jListTitles">
                <h1>Jobs</h1>
                <h2>999 open</h2>
            </div>
            </div>
            <div className="jListItem">
                <img src="https://media.gettyimages.com/id/183881669/photo/house.jpg?s=1024x1024&w=gi&k=20&c=jlhoZnSUOQgfnv2Ohr1bpb_m9G5K3RL5Jpvzwt_zCkU=" alt="" className="pList" />
            <div className="jListTitles">
                <h1>Jobs</h1>
                <h2>999 open</h2>
            </div>
            </div>
        </div> */}