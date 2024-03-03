import React from 'react';
import styles from './OurAdventage.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Импорт базовых стилей Swiper
import 'swiper/css/navigation'; // Импорт стилей для навигации
import 'swiper/css/pagination'; // Импорт стилей для пагинации
import 'swiper/css/scrollbar'; // Импорт стилей для скроллбара
import foto1 from '../../images/business-concept-with-graphic.jpg';
import foto2 from '../../images/istockphoto.jpg';
import foto3 from '../../images/istockphoto2.jpg';

function OurAdventage() {

    return (
        <div className={styles.back}>
            <div className="container d-flex justify-content-center align-items-center p-4">
                <div className="row text-center">
                    <div className="col">
                        <h1 className={styles.textStyleH1}>Вы можете быть уверенны за сроки и качество работ</h1>
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
                        <SwiperSlide>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={foto1} alt="Description1" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                                    </div>
                                    <div className="col-md-7 text-bold">
                                        <p className="text-center">Совокупный командный рост компании</p>
                                        <p>Проведем обучение сотрудников, а также создадим более эффективные команд и систем управления</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={foto2} alt="Description1" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                                    </div>
                                    <div className="col-md-7">
                                        <p className="text-center">Стабильный рост прибыли в вашей компании</p>
                                        <p>Построим долгосрочную стратегию для стабильного роста прибыли</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5">
                                        <img src={foto3} alt="Description1" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                                    </div>
                                    <div className="col-md-7">
                                        <p className="text-center">Увеличение старта продаж продукции компании</p>
                                        <p>Автоматизируем процесс комплексного подхода, бизнес-процессов и маркетинговых стратегий</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-5" >
                                        <img src={foto2} alt="Description1" style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                                    </div>
                                    <div className="col-md-7">
                                        <p className="text-center">Стабильный рост прибыли в вашей компании</p>
                                        <p>Построим долгосрочную стратегию для стабильного роста прибыли</p>
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

export default OurAdventage