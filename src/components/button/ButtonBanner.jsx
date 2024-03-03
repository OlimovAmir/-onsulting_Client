import React from 'react'
import { Button } from 'react-bootstrap';


function ButtonBanner() {
    const buttonStyle = {
        fontSize: '20px', // желаемый размер шрифта
        padding: '10px 20px', // желаемая внутренняя отступ кнопки
      };
  return (
    <div className="container d-flex justify-content-center align-items-center p-4">
          <div className="row text-center">
            <div className="col">
              <Button variant="primary" style={buttonStyle}>Получить консультацию</Button>
            </div>
          </div>
        </div>
  )
}

export default ButtonBanner