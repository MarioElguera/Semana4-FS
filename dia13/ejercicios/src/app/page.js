'use client';
import Image from "next/image";
import Slider from '../components/ej1';
import Carousel from '../components/ej2';
import Menu from '../components/ej3';

export default function Home() {
  const images = [
    'https://www.afoe.org/wp-content/uploads/2018/01/enlace-web-url.jpg',
    'https://sigdeletras.com/images/blog/202004_react_leaflet/react.png',
    'https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fs15ubgod56c7butyt7eu.jpg',
    'https://cloudappi.net/wp-content/uploads/2024/08/Diseno-sin-titulo-5.png',
    'https://www.matridtech.net/wp-content/uploads/2018/01/Features-of-AngularJS.png',
    "https://es.mypet.com/wp-content/uploads/sites/23/2021/03/GettyImages-623368750-e1582816063521-1.jpg",
    "https://es.onlyfresh.com/cdn/shop/articles/AManova_diarrea_nei_gatti.jpg",
  ];

  const menuItems = [
    {
      name: "Inicio",
      path: "/inicio",
    },
    {
      name: "Servicios",
      path: "/servicios",
      submenu: [
        {
          name: "Desarrollo Web",
          path: "/servicios/web",
          submenu: [
            { name: "Frontend", path: "/servicios/web/frontend" },
            { name: "Backend", path: "/servicios/web/backend" }
          ]
        },
        {
          name: "Marketing Digital",
          path: "/servicios/marketing",
          submenu: [
            { name: "SEO", path: "/servicios/marketing/seo" },
            { name: "Publicidad", path: "/servicios/marketing/publicidad" }
          ]
        }
      ],
    },
    {
      name: "Productos",
      path: "/productos",
      submenu: [
        {
          name: "Software",
          path: "/productos/software",
          submenu: [
            { name: "Aplicaciones", path: "/productos/software/apps" },
            { name: "Sistemas", path: "/productos/software/sistemas" }
          ]
        },
        {
          name: "Hardware",
          path: "/productos/hardware",
          submenu: [
            { name: "Laptops", path: "/productos/hardware/laptops" },
            { name: "Periféricos", path: "/productos/hardware/perifericos" }
          ]
        }
      ],
    },
    {
      name: "Contacto",
      path: "/contacto",
      submenu: [
        {
          name: "Atención al Cliente",
          path: "/contacto/cliente",
          submenu: [
            { name: "Soporte Técnico", path: "/contacto/cliente/soporte" },
            { name: "Reclamos", path: "/contacto/cliente/reclamos" }
          ]
        },
        {
          name: "Ubicación",
          path: "/contacto/ubicacion",
          submenu: [
            { name: "Oficinas", path: "/contacto/ubicacion/oficinas" },
            { name: "Mapa", path: "/contacto/ubicacion/mapa" }
          ]
        }
      ],
    }
  ];

  return (
    <div>
      <Menu items={menuItems} />
      <h1>Slider</h1>
      <Slider images={images} autoplay={true} interval={1000} />
      <br></br>
      <hr></hr>
      <br></br>
      <h1>Carousel</h1>
      <Carousel images={images} visibleSlides={3} />

    </div>



  );
}
