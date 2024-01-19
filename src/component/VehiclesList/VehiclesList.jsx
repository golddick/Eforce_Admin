import React,{useRef} from 'react'
import { IoIosArrowBack , IoIosArrowForward} from "react-icons/io";
import './vehicleList.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { Pagination,  EffectFade, Grid, A11y, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 
import "swiper/css/effect-fade";
import 'swiper/css/navigation'
import 'swiper/css/grid';

function VehiclesList() {

    const VehicleDetail = [
        {
            id:1,
            name:"Tesla Model S",
            carNumber:'JJK-800-AR',
            image:"https://www.usnews.com/object/image/00000186-0f0d-da67-a5ef-2f5f87990000/2023-lucid-air-1.jpg?update-time=1675289789997&size=responsive640",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
        {
            id:2,
            name:"Toyota Camry LE",
            carNumber:'KYC-900-FC',
            image:"https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
        {
            id:3,
            name:"Tesla Model S",
            carNumber:'JJK-800-AR',
            image:"https://www.usnews.com/object/image/00000186-0f0d-da67-a5ef-2f5f87990000/2023-lucid-air-1.jpg?update-time=1675289789997&size=responsive640",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
        {
            id:4,
            name:"Toyota Camry LE",
            carNumber:'KYC-900-FC',
            image:"https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
        {
            id:5,
            name:"Tesla Model S",
            carNumber:'JJK-800-AR',
            image:"https://www.usnews.com/object/image/00000186-0f0d-da67-a5ef-2f5f87990000/2023-lucid-air-1.jpg?update-time=1675289789997&size=responsive640",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
        {
            id:6,
            name:"Toyota Camry LE",
            carNumber:'KYC-900-FC',
            image:"https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
        {
            id:7,
            name:"Tesla Model S",
            carNumber:'JJK-800-AR',
            image:"https://www.usnews.com/object/image/00000186-0f0d-da67-a5ef-2f5f87990000/2023-lucid-air-1.jpg?update-time=1675289789997&size=responsive640",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
        {
            id:8,
            name:"Toyota Camry LE",
            carNumber:'KYC-900-FC',
            image:"https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
        {
            id:9,
            name:"Tesla Model S",
            carNumber:'JJK-800-AR',
            image:"https://www.usnews.com/object/image/00000186-0f0d-da67-a5ef-2f5f87990000/2023-lucid-air-1.jpg?update-time=1675289789997&size=responsive640",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
        {
            id:10,
            name:"Toyota Camry LE",
            carNumber:'KYC-900-FC',
            image:"https://imageio.forbes.com/specials-images/imageserve/6064b148afc9b47d022718d1/Hennessey-Venom-F5/960x0.jpg?height=473&width=711&fit=bounds",
            date:'14d:32m:55s',
            vehicleStatus:'Impounded',
        },
    ]

    const swiperRef = useRef(null);

    const navigateTo = useNavigate();

    const handleProceedClick = () => {
      navigateTo('/vehicle-Details');
     
    };

  return (
    <div className='VehiclesList'>
        <div className="VLTop">
            <div className="OfficeStation">
                <div className="OSText">
                    <span className='SText'>Station</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                    <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.66304 9.23661 8.29893 8.76777 8.76777C8.29893 9.23661 7.66304 9.5 7 9.5Z" fill="#047DD6"/>
                    </svg>
                </div>
                <div className="stationLocation">
                    <span className='SText'> District  11, Ikeja, Lagos.</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                    <path d="M13 1L7 7L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="NOCar">
                <div className="carIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 27 25" fill="none">
                <path d="M19.7667 8.01837e-08C20.7301 -0.000188854 21.6639 0.333513 22.409 0.944305C23.1541 1.5551 23.6645 2.40523 23.8533 3.35L24.1817 5H25.4167C25.7187 5.00001 26.0106 5.1094 26.2382 5.30795C26.4659 5.50649 26.6139 5.78074 26.655 6.08L26.6667 6.25C26.6667 6.55206 26.5573 6.8439 26.3587 7.07155C26.1602 7.2992 25.8859 7.44725 25.5867 7.48833L25.4167 7.5H24.6817L24.8683 8.43333C25.3873 8.58509 25.8431 8.90102 26.1673 9.33374C26.4916 9.76645 26.6668 10.2926 26.6667 10.8333V19.1667C26.6667 19.8297 26.4033 20.4656 25.9344 20.9344C25.4656 21.4033 24.8297 21.6667 24.1667 21.6667H23.3333V23.3333C23.3333 23.7754 23.1577 24.1993 22.8452 24.5118C22.5326 24.8244 22.1087 25 21.6667 25C21.2246 25 20.8007 24.8244 20.4882 24.5118C20.1756 24.1993 20 23.7754 20 23.3333V21.6667H6.66667V23.3333C6.66667 23.7754 6.49107 24.1993 6.17851 24.5118C5.86595 24.8244 5.44203 25 5 25C4.55797 25 4.13405 24.8244 3.82149 24.5118C3.50893 24.1993 3.33333 23.7754 3.33333 23.3333V21.6667H2.5C1.83696 21.6667 1.20107 21.4033 0.732233 20.9344C0.263392 20.4656 4.74115e-08 19.8297 4.74115e-08 19.1667V10.8333C-0.000105224 10.2926 0.175099 9.76645 0.499333 9.33374C0.823568 8.90102 1.27936 8.58509 1.79833 8.43333L1.98333 7.5H1.25C0.91848 7.5 0.600537 7.3683 0.366117 7.13388C0.131696 6.89946 4.74115e-08 6.58152 4.74115e-08 6.25C4.74115e-08 5.91848 0.131696 5.60054 0.366117 5.36612C0.600537 5.1317 0.91848 5 1.25 5H2.48333L2.81333 3.35C3.00217 2.40523 3.51258 1.5551 4.25769 0.944305C5.0028 0.333513 5.93654 -0.000188854 6.9 8.01837e-08H19.7667ZM24.1667 10H2.5C2.27899 10 2.06703 10.0878 1.91075 10.2441C1.75446 10.4004 1.66667 10.6123 1.66667 10.8333V19.1667C1.66667 19.3877 1.75446 19.5996 1.91075 19.7559C2.06703 19.9122 2.27899 20 2.5 20H24.1667C24.3877 20 24.5997 19.9122 24.7559 19.7559C24.9122 19.5996 25 19.3877 25 19.1667V10.8333C25 10.6123 24.9122 10.4004 24.7559 10.2441C24.5997 10.0878 24.3877 10 24.1667 10ZM6.66667 13.3333C7.1087 13.3333 7.53262 13.5089 7.84518 13.8215C8.15774 14.134 8.33334 14.558 8.33334 15C8.33334 15.442 8.15774 15.8659 7.84518 16.1785C7.53262 16.4911 7.1087 16.6667 6.66667 16.6667C6.22464 16.6667 5.80072 16.4911 5.48816 16.1785C5.1756 15.8659 5 15.442 5 15C5 14.558 5.1756 14.134 5.48816 13.8215C5.80072 13.5089 6.22464 13.3333 6.66667 13.3333ZM20 13.3333C20.442 13.3333 20.866 13.5089 21.1785 13.8215C21.4911 14.134 21.6667 14.558 21.6667 15C21.6667 15.442 21.4911 15.8659 21.1785 16.1785C20.866 16.4911 20.442 16.6667 20 16.6667C19.558 16.6667 19.1341 16.4911 18.8215 16.1785C18.5089 15.8659 18.3333 15.442 18.3333 15C18.3333 14.558 18.5089 14.134 18.8215 13.8215C19.1341 13.5089 19.558 13.3333 20 13.3333ZM19.7667 1.66667H6.9C6.32198 1.66663 5.76181 1.86689 5.31482 2.23336C4.86782 2.59982 4.56163 3.10986 4.44834 3.67667L3.515 8.33333H23.15L22.2183 3.67667C22.1051 3.11014 21.7992 2.60032 21.3525 2.23388C20.9058 1.86745 20.3461 1.66702 19.7683 1.66667H19.7667Z" fill="white"/>
                </svg>
                </div>
                <div className="noCarText">
                    <span>No of Impounded Cars in Lot</span>
                    <span> <b>43</b> </span>
                </div>
            </div>
        </div>

        <div className="carList">

        <Swiper
       ref={swiperRef}
       slidesPerView={4}
       spaceBetween={30}
       pagination={{
         clickable: true,
        el:'.pag_numbers', 
     

       }}
       grid={{
         rows: 2,
         fill: "row",
       }}
       navigation={{
        nextEl: '.next-nav',
        prevEl: '.prev-nav',
       }}
       breakpoints={{
         300: {
           slidesPerView: 1,
           spaceBetween: 20,
           grid: {
             rows: 2,
             fill: "row", 
           },
         },
         600: {
           slidesPerView: 2,
           spaceBetween: 20,
           grid: {
            rows: 2,
            fill: "row",
          },
         },
         1000: {
           slidesPerView: 4,
           spaceBetween: 20,
         },
       }}
       modules={[ Grid ,Pagination, Navigation, A11y]} 
       className="mySwiper"
     >

               {
                VehicleDetail.map((vehicle) =>(
                    <SwiperSlide className="carCard" key={vehicle.id}>
                    <img src={vehicle.image} alt="Vehicle"  className='carImg'/>
                    <div className="carInf0_">
                        <div className="CnameInfo">
                            <span className='_carName'>{vehicle.name}</span>
                            <span className='_carVDate'>{vehicle.date}</span>
                        </div>
                        <div className="_carDe">
                            <div className="DeLeft">
                                <span className='_carName'>{vehicle.carNumber}</span>
                                <span className='cStatus'>{vehicle.vehicleStatus}</span>
                            </div>
                            <div className="DeRight">
                                <button className="_viewBtn" onClick={handleProceedClick}>View</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>  
                ))
               }

</Swiper>

        </div>

   <div className="navigationSwiper">
        <IoIosArrowBack className="prev-nav" />
        <span className='pag_numbers'></span>
        <IoIosArrowForward className="next-nav"/>   
   </div>
    </div>
  )
}

export default VehiclesList