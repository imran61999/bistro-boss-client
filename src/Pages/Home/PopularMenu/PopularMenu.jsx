
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');


    return (
        <div className="p-8">
            <section className="mb-12">
                <SectionTitle
                subheading={"From Our Menu"}
                heading={"Popular Items"}
                ></SectionTitle>

                <div className="grid md:grid-cols-2 gap-10 mt-16">
                    {
                        popular.map(item=> <MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;