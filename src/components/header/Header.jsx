import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">D & D CONSULTING </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Главгая</Nav.Link>
          <Nav.Link href="#pricing">О нас</Nav.Link>
          <NavDropdown title="Наши услуги" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">ИНВЕСТИЦИОННЫЙ КОНСАЛТИНГ И ФИНАНСИРОВАНИЕ</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">ВНУТРЕННИЙ АУДИТ</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">КОМПЛАEНС МЕНЕДЖМЕНТ</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">СИСТЕМА УПРАВЛЕНИЯ РИСКАМИ</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">СОВРЕМЕННОЕ КОРПОРАТИВНОЕ УПРАВЛЕНИЕ</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">СТРАТЕГИЧЕСКОЕ ПЛАНИРОВАНИЕ</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">БЮДЖЕТИРОВАНИЕ</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">ОБУЧЕНИЯ И ТРЕНИНГИ</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
            Спектр IT услуг 
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Новости</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Контакты
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header