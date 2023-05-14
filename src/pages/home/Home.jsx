import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Joblist from "../../components/joblist/Joblist";
import Navbar from "../../components/navbar/Navbar";
import FeaturedJobs from "../../components/featuredJobs/FeaturedJobs";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import "./home.css";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header />
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">szukajzausluga</h1>
                <button className="btn btn-primary">Click Me</button>
                <Joblist/>
                <h1 className="homeTitle">szukajzausluga2</h1>
                <FeaturedJobs/>
                <MailList/>
                <Footer/>

        
            
            </div>
            </div>
    );
};

export default Home; 