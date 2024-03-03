import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Импорт базовых стилей Swiper
import 'swiper/css/navigation'; // Импорт стилей для навигации
import 'swiper/css/pagination'; // Импорт стилей для пагинации
import 'swiper/css/scrollbar'; // Импорт стилей для скроллбара
import foto1 from '../../images/foto-office1.jpg';
import foto2 from '../../images/foto-office2.jpg';
import foto3 from '../../images/foto-office3.jpg';

function Service() {
    const textStyle = {
        color: 'primary', // белый цвет шрифта
        fontWeight: 'bold', // жирный стиль шрифта
        textShadow: '1px 1px 1px black', // контур шрифта черным
    };
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center p-4">
                <div className="row text-center">
                    <div className="col">
                        <h1 style={textStyle} >Широкий профиль услуг</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide><img src={foto1} alt="Description1" style={{ width: '100%', height: 'auto' }}/></SwiperSlide>
                        <SwiperSlide><img src={foto2} alt="Description1" style={{ width: '100%', height: 'auto' }}/></SwiperSlide>
                        <SwiperSlide><img src={foto3} alt="Description1" style={{ width: '100%', height: 'auto' }}/></SwiperSlide>
                        {/* Дополнительные слайды */}
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Service;