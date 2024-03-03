import React from 'react'

function Footer() {
    const textStyle = {
        color: 'primary', // белый цвет шрифта
        fontWeight: 'bold', // жирный стиль шрифта
        textShadow: '1px 1px 1px black', // контур шрифта черным
    }
  return (
    <div>
        <div className="container d-flex justify-content-center align-items-center p-4">
                <div className="row text-center">
                    <div className="col">
                        <h1 style={textStyle} >Широкий профиль услуг</h1>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Footer