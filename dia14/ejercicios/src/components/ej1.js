import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spacebetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="w-full max-w-3xl"
        >
            <SwiperSlide>
                <img src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fs15ubgod56c7butyt7eu.jpg" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cloudappi.net/wp-content/uploads/2024/08/Diseno-sin-titulo-5.png" alt="Slide 3" />
            </SwiperSlide>
        </Swiper>
    )
};

export default Slider;