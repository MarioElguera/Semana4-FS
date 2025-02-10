'use client';
import Image from "next/image";
import Slider from '../components/ej1';
import Carousel from '../components/ej2';

export default function Home() {
  const images = [
    'https://www.afoe.org/wp-content/uploads/2018/01/enlace-web-url.jpg',
    'https://sigdeletras.com/images/blog/202004_react_leaflet/react.png',
    'https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fs15ubgod56c7butyt7eu.jpg',
    'https://cloudappi.net/wp-content/uploads/2024/08/Diseno-sin-titulo-5.png',
  ];

  return (
    <div>
      <h1>Slider</h1>
      <Slider images={images} autoplay={true} interval={1000} />
      <br></br>
      <hr></hr>
      <br></br>
      <h1>Carousel</h1>
      <Carousel images={images} />

    </div>



  );
}
