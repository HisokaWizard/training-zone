import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, } from 'react-bootstrap';

export class StartPage extends React.Component<{}, {}> {

	constructor(props: {}) {
		super(props);
		this.state = {
		};
	}

	renderCard = (title: string, text: string, icon?: string, image?: string) => {
		return (
			<div>
				{image ? <div className={`${image}`} aria-hidden='true'></div> : null}
				{icon
					? <div className='card-icon-container'>
						<div className='card-icon'>
							<span className={`${icon} icon-view`} aria-hidden='true'></span>
						</div>
					</div>
					: null}
				<div>
					<div className='page-less-titles'>{title}</div>
					<div className='page-text'>{text}</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				<Navbar bg='light' expand='lg' className={'fix-general-menu'}>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav' className='general-menu'>
						<Nav className='mr-auto nav-align'>
							<Nav.Link href='#about-app'>{'О Приложении'.toLocaleUpperCase()}</Nav.Link>
							<Nav.Link href='#general-aim'>{'Цели создания приложения'.toLocaleUpperCase()}</Nav.Link>
							<Nav.Link href='#app-occurs'>{'Возможности приложения'.toLocaleUpperCase()}</Nav.Link>
							<Nav.Link>
								<Link className={'nav-link-text'} to={'/counting'} >{'Подбор очистных сооружений'.toLocaleUpperCase()}</Link>
							</Nav.Link>
							<Nav.Link href='#contacts'>{'Контакты'.toLocaleUpperCase()}</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div className='header'>
					<div className='intro-box'>
						<div className='intro'>
							<div className='intro-title'>{'Механическая очистка сточных вод'.toLocaleUpperCase()}</div>
							<div className='intro-text'>Подберите очистные сооружения по своим данным</div>
							<Link className='btn intro-counting-btn' to='/counting'>Начать расчет</Link>
						</div>
					</div>
				</div>
				<div id='about-app'>
					<Container fluid>
						<Row>
							<Col md={{ span: 4, offset: 4 }} className='page-titles'>О приложении</Col>
							<Col md={{ span: 4, offset: 4 }} className='page-text'>{ABOUT_APP}</Col>
						</Row>
					</Container>
				</div>
				<div id='general-aim'>
					<Container fluid>
						<Row>
							<Col md={{ span: 6, offset: 3 }} className='page-titles'>Цели создания приложения</Col>
						</Row>
						<Row>
							<Col md={{ span: 2, offset: 3 }}>
								{this.renderCard('Свободный доступ', USE_MODERN_TECHNOLOGY, 'fa fa-laptop')}
							</Col>
							<Col md={{ span: 2 }}>
								{this.renderCard('Меньшие временные затраты', LESS_TIME_SPARE, 'fa fa-clock-o')}
							</Col>
							<Col md={{ span: 2 }}>
								{this.renderCard('Визуализация', VISUALIZATION, 'fa fa-picture-o')}
							</Col>
						</Row>
					</Container>
				</div>
				<div className='quote-image'>
					<div className='intro-box-quote'>
						{/* Quote, maybe will return */}
						{/* <Container fluid>
							<Row>
								<Col md={{ span: 12 }}>
									<div className='quote-symbol'></div>
									<div className='quote-text'>Тысячи людей живут без любви, но никто — без воды.</div>
									<div className='quote-author'>Уистен Хью Оден</div>
								</Col>
							</Row>
						</Container> */}
					</div>
				</div>
				<div id='app-occurs'>
					<Container fluid>
						<Row>
							<Col md={{ span: 6, offset: 3 }} className='page-titles'>Возможности приложения</Col>
						</Row>
						<Row>
							<Col md={{ span: 2, offset: 3 }}>
								{this.renderCard('Одиночный расчет', SINGLE_COUNTING, undefined, 'single-device')}
							</Col>
							<Col md={{ span: 2 }}>
								{this.renderCard('Расчет системы', SYSTEM_COUNTING, undefined, 'system')}
							</Col>
							<Col md={{ span: 2 }}>
								{this.renderCard('Соответствие законодательству', LAW_EQUALS, undefined, 'snip-doc')}
							</Col>
						</Row>
					</Container>
				</div>
				<div id='contacts'>
					<Container fluid>
						<Row>
							<Col md={{ span: 6, offset: 3 }} className='page-titles'>Контакты</Col>
						</Row>
						<Row>
							<Col md={{ span: 2, offset: 3 }}>
								{this.renderCard('Адрес', 'Санкт-Петербург, Россия', 'fa fa-map-o')}
							</Col>
							<Col md={{ span: 2 }}>
								{this.renderCard('Телефон', '+7 (950) 221-29-17', 'fa fa-phone')}
							</Col>
							<Col md={{ span: 2 }}>
								{this.renderCard('Email', 'akkordeonistka@mail.ru', 'fa fa-paper-plane')}
							</Col>
						</Row>
					</Container>
				</div>
				{/* social net, for future */}
				{/* <Container fluid>
					<Row>
					<Col md={{ span: 12 }}>
						<div className='social-icons'>
							<ul>
								<a href='https://www.facebook.com/antoninikolaeva'>
									<i className='fab fa-facebook-square social-icon'></i>
								</a>
								<a href='https://twitter.com/antoninikolaeva'>
									<i className='fab fa-twitter-square social-icon'></i>
								</a>
								<a href='http://instagram.com/antoninikolaeva'>
									<i className='fab fa-instagram-square social-icon'></i>
								</a>
							</ul>
						</div>
					</Col>
					</Row>
				</Container> */}
				<div className='footer'>
					<span className='footer-text'>Выполнено</span>
					<a href='https://vk.com/antoninikolaeva' className='vk-link'> Антониной Николаевой</a>
				</div>
			</div>
		);
	}
}

const ABOUT_APP = `Современный мир постоянно модернизируется и автоматизируется.
	Подбор и строительство очистных сооружений — сложный, долговременный и кропотливый процесс.
	Данное приложение создано для упрощения математических расчетов инженеров
	в процессе проектирования механических очистных сооружений.`;

const USE_MODERN_TECHNOLOGY = `Для работы с веб-приложением не нужно сторонних специфических
	программ - для начала работы достаточно доступа в интернет и браузера`;
const LESS_TIME_SPARE = `Не нужно выполнять расчеты "вручную" - программа сделает это за Вас`;
const VISUALIZATION = `Работать с приятным интерфейсом комфортно, подсказки помогут сориентироваться в
	расчете`;

const SINGLE_COUNTING = `Вы можете рассчитать один конкретный аппарат`;
const SYSTEM_COUNTING = `Если Вам необходимо рассчитать систему очистных соооружений, Вы можете выбрать
	необходимые позиции и произвести расчет`;
const LAW_EQUALS = `Если Ваши "желания" не будут соответствовать действующему 
	СП 33.13330.2012 Канализация. Наружные сети и сооружения, приложение Вам об
	этом скажет`;