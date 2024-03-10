import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function ButtonBanner() {
  const [showModal, setShowModal] = useState(false); // Состояние для управления отображением первого модального окна
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Состояние для управления отображением второго модального окна
  const [inputValue, setInputValue] = useState(''); // Состояние для хранения введенного текста

  const buttonStyle = {
    fontSize: '20px', // желаемый размер шрифта
    padding: '10px 20px', // желаемая внутренняя отступ кнопки
  };

  // Функция для открытия первого модального окна
  const openModal = () => {
    setShowModal(true);
  };

  // Функция для закрытия первого модального окна
  const closeModal = () => {
    setShowModal(false);
  };

  // Функция для закрытия второго модального окна
  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // Функция для обработки изменения ввода текста
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Функция для отправки данных на сервер
  const handleSubmit = () => {
    // Здесь можно добавить код для отправки данных на сервер
    console.log('Отправка данных на сервер:', inputValue);
    // После успешной отправки данных открываем второе модальное окно
    setShowSuccessModal(true);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center p-4">
      <div className="row text-center">
        <div className="col">
          {/* Кнопка для открытия первого модального окна */}
          <Button variant="primary" style={buttonStyle} onClick={openModal}>Получить консультацию</Button>
        </div>
      </div>

      {/* Первое модальное окно */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Модальное окно</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Форма с полями для ввода текста */}
          <Form.Group controlId="formInput">
            <Form.Label>Введите текст:</Form.Label>
            <Form.Control type="text" placeholder="Введите текст" value={inputValue} onChange={handleInputChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* Кнопка "Отправить заявку" */}
          <Button variant="primary" onClick={handleSubmit}>Отправить заявку</Button>
          {/* Кнопка "Закрыть" */}
          <Button variant="secondary" onClick={closeModal}>Закрыть</Button>
        </Modal.Footer>
      </Modal>

      {/* Второе модальное окно */}
      <Modal show={showSuccessModal} onHide={closeSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>Успешно отправлено</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ваша заявка успешно отправлена!
        </Modal.Body>
        <Modal.Footer>
          {/* Кнопка "Закрыть" */}
          <Button variant="secondary" onClick={closeSuccessModal}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ButtonBanner;