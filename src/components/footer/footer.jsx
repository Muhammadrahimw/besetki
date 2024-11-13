import "./footer.scss";

let Footer = () => {
	return (
		<footer>
			<div className="footer ctr">
				<div className="footer_item">
					<div className="logo">
						<img src="/elements/Логотип (1).svg" alt="" />
					</div>
					<p>
						Наш адрес: <br /> Москва, ул. Новокосимская д.7
					</p>
					<p>
						График работы: <br />
						Ежедневно с 9:00 до 21:00
					</p>
					<button className="btn">Заказать звонок</button>
				</div>
				<hr />
				<div className="footer_item footer_middle-item">
					<div>
						<b>Для покупателей:</b>
						<p className="sprg">Доставка</p>
						<p className="sprg">Гарантия</p>
						<p className="sprg">Политика конфиденциальности</p>
						<p className="sprg">Отзывы</p>
						<p className="sprg">Наши работы</p>
					</div>
					<div>
						<b>О компании:</b>
						<p className="sprg">О Нас</p>
						<p className="sprg">Доставка и оплата</p>
						<p className="sprg">Наши работы</p>
						<p className="sprg">Контакты</p>
						<p className="sprg">Гарантия</p>
					</div>
					<div>
						<b>Категории:</b>
						<p className="sprg">Беседки</p>
						<p className="sprg">Бани</p>
						<p className="sprg">Площадки</p>
						<p className="sprg">Дома</p>
						<p className="sprg">Перголы</p>
						<p className="sprg">Бренды</p>
					</div>
					<div>
						<p>
							Для регионов <br />
							(звонок бесплатный)
						</p>
						<a href="tel:8 (800) 800-00-00">
							8 (800) <span>800-00-00</span>
						</a>
						<a href="mailto:Email: youremail@mailbox.ru">
							Email: youremail@mailbox.ru
						</a>
						<p className="sprg">Мы в соц.сетях:</p>
					</div>
					<div>
						<p>
							Для регионов <br />
							(звонок бесплатный)
						</p>
						<a href="tel:8 (495) 700-00-00">
							8 (495) <span>700-00-00</span>
						</a>
						<p className="sprg">Сообщить об ошибке на сайте</p>
						<p className="sprg">
							ООО "Фаза Групп" <br />
							ИНН: 7751140879 <br />
							ОГРН: 1187746273461 <br />
						</p>
					</div>
				</div>
				<hr />
				<div className="footer_item last_footer-item">
					<div>
						<p className="sprg">Публичная оферта </p>
						<p className="sprg">2013-2021 - Товары для дач, </p>
						<p className="sprg">деревянные конструкции под любые нужды</p>
					</div>
					<div className="last_footer-right">
						<p className="sprg">Принимаем к оплате:</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
