import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function Banner() {
    const textStyle = {
        color: 'white', // белый цвет шрифта
        fontWeight: 'bold', // жирный стиль шрифта
        textShadow: '1px 1px 1px black', // контур шрифта черным
        
    };
    const textStyle2 = {
        color: 'white', // белый цвет шрифта
        fontWeight: 'bold', // жирный стиль шрифта
        textShadow: '1px 1px 1px black', // контур шрифта черным
        paddingTop: '40px', // внутренний отступ сверху
    };
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
            <div className="row text-center">
                <div className="col ">
                    <h1 style={textStyle2}>Комплексно подходим к решению</h1>
                    <h1 style={textStyle}>любой вашей бизнес-задачи</h1>
                    <p style={textStyle}>Мы предлагаем нашим клиентам комплексные решения по оптимизации бизнеса, построению</p>
                    <p style={textStyle}>дилерских и франчайзинговых сетей, увеличения доходности и снижению издержек бизнеса</p>
                </div>
            </div>
        </div>
    )
}

export default Banner