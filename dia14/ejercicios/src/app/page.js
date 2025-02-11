'use client';
import Image from "next/image";
import Slider from '../components/ej1';
import MyCarousel from '../components/ej3';
import MyMenu from '../components/ej5';

export default function Home() {
  return (
    <div>
      <Slider />
      <br></br>
      <hr></hr>
      <MyCarousel />
      <br></br>
      <hr></hr>
      <MyMenu />
    </div>
  );
}
