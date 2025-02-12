'use client';
import Image from "next/image";
import ApiWeather from '../components/weather';

export default function Home() {
  return (
    <div>
      <ApiWeather />
    </div>
  );
}
