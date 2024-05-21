
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const SwiperDemo = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>

                
            </Swiper>
        </div>
    );
};

export default SwiperDemo;