import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const MyCarousel = () => {
    return (
        <Carousel responsive={responsive} autoplay infinite>
            <div><img src="https://sigdeletras.com/images/blog/202004_react_leaflet/react.png" alt="Slide 1" /></div>
            <div><img src="https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fs15ubgod56c7butyt7eu.jpg" alt="Slide 2" /></div>
            <div><img src="https://cloudappi.net/wp-content/uploads/2024/08/Diseno-sin-titulo-5.png" alt="Slide 3" /></div>
        </Carousel>
    )
};

export default MyCarousel;