import React, { useState } from 'react'
import styles from './Footer.module.css';
import { Button ,Form, Modal } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';



function Footer() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);

    const handleClick = () => {
        const inputValue = document.getElementById("textInput").value;
        const currentDate = new Date().toISOString(); // Получаем текущую дату и время

        axios.post('https://localhost:7023/MessageFromUser/Create', {
            textMessage: inputValue,
            date: currentDate
        })
        .then(response => {
            console.log('Успешный запрос:', response);
            // Очистка содержимого текстового поля
            document.getElementById("textInput").value = "";
            // Показ модального окна
            setShowModal(true);
        })
        .catch(error => {
            console.error('Ошибка запроса:', error);
        });
    };

    return (
        <div>
            <div className={styles.wrapper}>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Получить бесплатную консультацию</h4>
                        </div>
                        <div className="col-md-1">

                        </div>
                        <div className="col-md-4">
                            <div className="container d-flex justify-content-center align-items-center p-4">
                                <div className="row text-center">
                                    <div className="col">
                                        <Form.Control size="text" id="textInput" type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="container d-flex justify-content-center align-items-center p-4">
                                <div className="row text-center">
                                    <div className="col">
                                        <Button onClick={handleClick} variant="primary">Заказать звонок</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <p className={styles.footerP1}>Адрес</p>
                            <p>Таджикистан, город Худжанд</p>
                        </div>
                        <div className="col-md-3">
                            <p className={styles.footerP1}>Время работы</p>
                            <p>Понедельник - Суббота <br /> С 09:00 до 20:00</p>
                        </div>
                        <div className="col-md-3">
                            <p className={styles.footerP1}>Телефоны</p>
                            <p>+992 92 775 75 77</p>
                        </div>
                        <div className="col-md-3">
                            <p className={styles.footerP1}>Мы в соцсетях</p>
                            <div className='row'>
                                <div className='col-4 col-md-4 col-sm-4 col-xs-4'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                                <div className='col-4 col-md-4 col-sm-4 col-xs-4'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                                <div className='col-4 col-md-4 col-sm-4 col-xs-4'>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer