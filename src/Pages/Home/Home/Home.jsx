import Swiper from "swiper";
import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import SwiperDemo from "../Swiper/Swiper";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Bannar></Bannar>
            <Category></Category>
            <Services></Services>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <SwiperDemo></SwiperDemo>
        </div>
    );
};

export default Home;