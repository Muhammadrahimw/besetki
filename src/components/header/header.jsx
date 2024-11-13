import "./header.scss";
import {FaLocationDot} from "react-icons/fa6";
import {CiClock2} from "react-icons/ci";
import {MdOutlineMail} from "react-icons/md";
import {FaBars} from "react-icons/fa6";
// import {BsTelephone} from "react-icons/bs";

let Header = () => {
	return (
		<header>
			<div className="header_top">
				<div className="ctr container">
					<div className="left">
						<div>
							<FaLocationDot className="locationIcon" />
							<p>Ваш город: </p>
							<select>
								<option value="1">Константинополь</option>
								<option value="2">Константинополь</option>
							</select>
						</div>
						<div>
							<FaLocationDot className="locationIcon" />
							<p>Наш офис: </p>
							<select>
								<option value="1">Москва, ул. Новокосимская д.7</option>
								<option value="2">Москва, ул. Новокосимская д.7</option>
							</select>
						</div>
					</div>
					<div className="right">
						<a href="../../../public/index.html">Статьи</a>
						<a href="../../../public/index.html">Оплата</a>
						<a href="../../../public/index.html">Гарантия</a>
						<a href="../../../public/index.html">Дилерам</a>
						<a href="../../../public/index.html">Вакансии</a>
					</div>
				</div>
			</div>
			<div className="header_main ctr">
				<div className="logo">
					<a href="../../../public/index.html">
						<img src="/elements/Логотип.svg" alt="logo" />
					</a>
				</div>
				<FaBars className="barsIcon" />
				<div className="search">
					<div className="categories">
						<p className="sprg">Лучшие цены</p>
						<p className="sprg">Бесплатная доставка</p>
						<p className="sprg">Гарантия от 3х лет</p>
						<p className="sprg">Более 1 000 товаров</p>
					</div>
					<form className="search_container">
						<input placeholder="Поиск по каталогу..." type="text" />
						<button className="search_submit" type="submit">
							Найти
						</button>
					</form>
				</div>
				{/* <BsTelephone className="phoneIcon" /> */}
				<div className="contacting">
					<div>
						<CiClock2 className="clockIcon" />
						<p className="sprg">Ежедневно с 9:00 до 21:00</p>
					</div>
					<a href="tel:8 (800) 800-00-00">
						8 (800) <b>800-00-00</b>
					</a>
					<a href="tel:8 (495) 700-00-00">
						8 (495) <b>700-00-00</b>
					</a>
				</div>
				<div className="header_main-btn">
					<div>
						<MdOutlineMail className="emailIcon" />
						<a href="mailto:youremail@mailbox.ru">youremail@mailbox.ru</a>
					</div>
					<button className="btn">Заказать звонок</button>
				</div>
			</div>
			<div className="sections">
				<div className="ctr sections_container">
					<div>
						<FaBars className="barsIcon2" />
						<p>Каталог товаров</p>
					</div>
					<p className="sprg">О компании</p>
					<p className="sprg">Отзывы</p>
					<p className="sprg">Наши работы</p>
					<p className="sprg">Доставка</p>
					<p className="sprg">Контакты</p>
				</div>
			</div>
			<div className="showcase">
				<h1>
					Беседки <br /> под ключ <br /> за 7 дней
				</h1>
			</div>
			<div className="necessary"></div>
			<div className="sections_next">
				<div>
					<p className="bprg">Каталог товаров</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
