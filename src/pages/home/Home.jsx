import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Joblist from "../../components/joblist/Joblist";
import Navbar from "../../components/navbar/Navbar";
import FeaturedJobs from "../../components/featuredJobs/FeaturedJobs";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./home.css";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <div className="mt-4 mt-md-5">
                <h1 className="homeTitle mb-4"><strong>Usługi główne</strong></h1>
                    <Featured />
                </div>
                <h1 className="homeTitle"><strong>Usługi dodatkowe</strong></h1>
                <Joblist />
                <h1 className="homeTitle">szukajzausluga2</h1>
                <FeaturedJobs />
                <MailList />
                <Footer />



            </div>
        </div>
    );
};

export default Home; 