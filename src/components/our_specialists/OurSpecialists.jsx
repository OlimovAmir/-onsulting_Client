import React from 'react'
import styles from './OurSpecialists.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Импорт базовых стилей Swiper
import 'swiper/css/navigation'; // Импорт стилей для навигации
import 'swiper/css/pagination'; // Импорт стилей для пагинации
import 'swiper/css/scrollbar'; // Импорт стилей для скроллбара


function OurSpecialists() {
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center p-4">
                <div className="row text-center">
                    <div className="col">
                        <h1 className={styles.textStyleH1} >Наши спициалисты</h1>
                    </div>

                </div>
            </div>
            <div className="container">
                <div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        <SwiperSlide>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='' alt="Description1" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                                    </div>
                                    <div className="col-md-7 text-bold">
                                        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='' alt="Description1" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                                    </div>
                                    <div className="col-md-7">
                                        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src='' alt="Description1" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                                    </div>
                                    <div className="col-md-7">
                                        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5" >
                                        <img src='' alt="Description1" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                                    </div>
                                    <div className="col-md-7">
                                        
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default OurSpecialists