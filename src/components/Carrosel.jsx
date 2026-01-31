import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide_image_1 from "../assets/img/arte-cafe.png";
import slide_image_2 from "../assets/img/caricatura.png";
import slide_image_3 from "../assets/img/celphone.png";
import slide_image_4 from "../assets/img/Daki.jpg";
import slide_image_5 from "../assets/img/demon-slayer-digital.jpg";
import slide_image_6 from "../assets/img/demon-slayer-rosa.jpg";
import slide_image_7 from "../assets/img/doodle-rosa.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Carrossel() {
  return <>
  <div className="h-[100dvh] flex flex-column justify-center items-center" id="desenhos">
  <div className=" w-full max-w-7xl mx-auto px-4 py-8 text-[10px]">
      <h1 className="text-[24px] text-center font-bold mb-8 text-[#fff]  font-semibold uppercase tracking-[0.5rem] ">
        Meus desenhos
      </h1>

      <div className="relative">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="!py-12"
          breakpoints={{
            320: {
              slidesPerView: 1,
              coverflowEffect: {
                depth: 100,
                modifier: 1,
              },
            },
            640: {
              slidesPerView: 2,
              coverflowEffect: {
                depth: 120,
                modifier: 1.2,
              },
            },
            1024: {
              slidesPerView: 3,
              coverflowEffect: {
                depth: 150,
                modifier: 1.5,
              },
            },
          }}
        >
          <SwiperSlide>
            <img
              src={slide_image_1}
              alt="Arte Café"
              className="w-full h-[400px] max-[767px]:h-[400px] max-[767px]:w-[400px] max-[767px]:mx-auto md:h-[400px]  rounded-2xl object-cover shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_2}
              alt="Caricatura"
              className="w-full h-[400px] max-[767px]:h-[400px] max-[767px]:w-[400px] max-[767px]:mx-auto md:h-[400px]  rounded-2xl object-cover shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_3}
              alt="Celphone"
              className="w-full h-[400px] max-[767px]:h-[400px] max-[767px]:w-[400px] max-[767px]:mx-auto md:h-[400px]  rounded-2xl object-cover shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_4}
              alt="Daki"
              className="w-full h-[400px] max-[767px]:h-[400px] max-[767px]:w-[400px] max-[767px]:mx-auto md:h-[400px]  rounded-2xl object-cover shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_5}
              alt="Demon Slayer Digital"
              className="w-full h-[400px] max-[767px]:h-[400px] max-[767px]:w-[400px] max-[767px]:mx-auto md:h-[400px]  rounded-2xl object-cover shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_6}
              alt="Demon Slayer Rosa"
              className="w-full h-[400px] max-[767px]:h-[400px] max-[767px]:w-[400px] max-[767px]:mx-auto md:h-[400px]  rounded-2xl object-cover shadow-2xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide_image_7}
              alt="Doodle Rosa"
              className="w-full h-[400px] max-[767px]:h-[400px] max-[767px]:w-[400px] max-[767px]:mx-auto md:h-[400px]  rounded-2xl object-cover shadow-2xl"
            />
          </SwiperSlide>

          {/* Botões de navegação */}
          <div className="swiper-button-prev !w-10 !h-10 !bg-white/70 !rounded-full !shadow-lg after:!text-xl after:!text-gray-800 after:!font-bold hover:!bg-gray-100 !transition-all py-2"></div>
          <div className="swiper-button-next !w-10 !h-10 !bg-white/70 !rounded-full !shadow-lg after:!text-xl after:!text-gray-800 after:!font-bold hover:!bg-gray-100 !transition-all py-2"></div>

          {/* Paginação */}
          <div className="swiper-pagination !relative !mt-8"></div>
        </Swiper>
      </div>
    </div>

  </div>
  
  </>
    
    

}

export default Carrossel;
