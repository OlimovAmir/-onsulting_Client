import React from 'react'
import styles from './Footer.module.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
function Footer() {
    return (
        <div>
            <div className={styles.wrapper}>
                <div className="container">
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
                                        <Form.Control size="text" type="text" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="container d-flex justify-content-center align-items-center p-4">
                                <div className="row text-center">
                                    <div className="col">
                                        <Button variant="primary">Заказать звонок</Button>
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
                            <p  className={styles.footerP1}>Время работы</p>
                            <p>Понедельник - Суббота <br/> С 09:00 до 20:00</p>
                        </div>
                        <div className="col-md-3">
                            <p className={styles.footerP1}>Телефоны</p>
                            <p>+992 92 775 75 77</p>
                        </div>
                        <div className="col-md-3">
                            <p className={styles.footerP1}>Мы в соцсетях</p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer