import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Category></Category>
            <Services></Services>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;