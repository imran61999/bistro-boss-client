import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subheading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>
            <div className="md: flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md: ml-10">
                    <p>May 17, 2024</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque reprehenderit at exercitationem natus vel ab distinctio adipisci suscipit accusantium. Veniam maiores voluptate eligendi corrupti dolorem similique labore voluptatum distinctio quas expedita fugiat at minima eos, autem dolor tempora. Sint velit quae expedita id numquam tenetur sed incidunt ab autem.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;