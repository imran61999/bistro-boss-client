import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu , setMenu] = useState([]);
    useEffect(()=>{
        fetch('Menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularIteams = data.filter(item => item.category === 'popular');
            setMenu(popularIteams)})
    }, [])


    return (
        <div>
            <section className="mb-12">
                <SectionTitle
                subheading={"From Our Menu"}
                heading={"Popular Items"}
                ></SectionTitle>

                <div className="grid md:grid-cols-2 gap-10">
                    {
                        menu.map(item=> <MenuItem
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