import serviceimg from '../../../assets/home/chef-service.jpg';
const Services = () => {
    return (
        <div className='my-8 relative'>
            <img src={serviceimg} alt="" />
            <div className=' bg-white w-3/4 h-72 p-24 my-24 absolute -bottom-10 mx-28'>
                <h2 className='text-3xl text-center'>Bistro Boss</h2>
                <p className='text-center w-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Services;