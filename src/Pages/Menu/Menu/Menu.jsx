import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle subheading="Don't Miss" heading="ToDay's Offer"></SectionTitle>
            {/* offered menu item */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu item */}
            <MenuCategory
            items={desserts}
            title="Dessert"
            img={dessertImg}
            ></MenuCategory>
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;