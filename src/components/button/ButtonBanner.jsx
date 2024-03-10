import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function ButtonBanner() {
  const [showModal, setShowModal] = useState(false); // Состояние для управления отображением модального окна
  const [inputValue, setInputValue] = useState(''); // Состояние для хранения введенного текста

  const buttonStyle = {
    fontSize: '20px', // желаемый размер шрифта
    padding: '10px 20px', // желаемая внутренняя отступ кнопки
  };

  // Функция для открытия модального окна
  const openModal = () => {
    setShowModal(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setShowModal(false);
  };

  // Функция для обработки изменения ввода текста
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Функция для отправки данных на сервер
  const handleSubmit = () => {
    // Здесь можно добавить код для отправки данных на сервер
    console.log('Отправка данных на сервер:', inputValue);
    // После отправки данных можно закрыть модальное окно
    closeModal();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center p-4">
      <div className="row text-center">
        <div className="col">
          {/* Кнопка для открытия модального окна */}
          <Button variant="primary" style={buttonStyle} onClick={openModal}>Получить консультацию</Button>
        </div>
      </div>

      {/* Модальное окно */}
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
    </div>
  );
}

export default ButtonBanner;