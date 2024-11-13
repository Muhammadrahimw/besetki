import {FaChevronRight} from "react-icons/fa6";
import "./selles.scss";
import {IoMdResize} from "react-icons/io";
import {FaRegSquare} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {GoCheckCircleFill} from "react-icons/go";
// let dataSize = 0;

let Sellers = () => {
	return (
		<section className="sellers ctr">
			<div className="seller_section">
				<div>
					<h2 className="hdg">Хиты продаж</h2>
					<button className="all_button">
						<p>Все товары</p>
						<FaChevronRight className="seller_rightIcon" />
					</button>
				</div>
				<div className="seller_category">
					<button className="seller_category-active">Беседки</button>
					<button>Бани</button>
					<button>Площадки</button>
					<button>Дома</button>
					<button>Перголы</button>
					<button>Бренды</button>
				</div>
				<div className="seller_body">
					{Array.from({length: 10}).map((value) => {
						return (
							<div className="product">
								<div
									style={{backgroundImage: `url('/elements/12.png')`}}
									className="product_img backgroundImageStyle"></div>
								<div className="product_info">
									<div>
										<p className="sprg">Артикул:</p>
										<p className="sprg">0000001</p>
									</div>
									<p id="title" className="prg">
										Название товара длинное в две строки наверное
									</p>
									<div>
										<div>
											<IoMdResize className="productIcon" />
											<p className="sprg">Размеры:</p>
										</div>
										<p className="sprg">12.3 x 14.6 x 4.3 м.</p>
									</div>
									<div>
										<div>
											<FaRegSquare className="productIcon" />
											<p className="sprg">Площадь:</p>
										</div>
										<p className="sprg">33 м2</p>
									</div>
									<div>
										<div>
											<FaUser className="productIcon" />
											<p className="sprg">Вместимость:</p>
										</div>
										<p className="sprg">15 чел.</p>
									</div>
									<div>
										<div>
											<GoCheckCircleFill className="productIcon" />
											<p className="sprg">Гарантия:</p>
										</div>
										<p className="sprg">10 лет</p>
									</div>
									<div className="product_buying">
										<div id="price">
											<div>
												<p className="sprg">6 127 500 ₽</p>
												<div className="sprg">
													<p>-25%</p>
												</div>
											</div>
											<p className="bprg">5 023 900 ₽</p>
										</div>
										<button>Купить</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="seller_section seller_section2">
				<div>
					<h2 className="hdg">Акционные модели</h2>
					<button className="all_button">
						<p>Все товары</p>
						<FaChevronRight className="seller_rightIcon" />
					</button>
				</div>
				<div className="seller_category">
					<button className="seller_category-active">Беседки</button>
					<button>Бани</button>
					<button>Площадки</button>
					<button>Дома</button>
					<button>Перголы</button>
					<button>Бренды</button>
				</div>
				<div className="seller_body">
					{Array.from({length: 10}).map((value) => {
						return (
							<div className="product">
								<div
									style={{backgroundImage: `url('/elements/12.png')`}}
									className="product_img backgroundImageStyle"></div>
								<div className="product_info">
									<div>
										<p className="sprg">Артикул:</p>
										<p className="sprg">0000001</p>
									</div>
									<p id="title" className="prg">
										Название товара длинное в две строки наверное
									</p>
									<div>
										<div>
											<IoMdResize className="productIcon" />
											<p className="sprg">Размеры:</p>
										</div>
										<p className="sprg">12.3 x 14.6 x 4.3 м.</p>
									</div>
									<div>
										<div>
											<FaRegSquare className="productIcon" />
											<p className="sprg">Площадь:</p>
										</div>
										<p className="sprg">33 м2</p>
									</div>
									<div>
										<div>
											<FaUser className="productIcon" />
											<p className="sprg">Вместимость:</p>
										</div>
										<p className="sprg">15 чел.</p>
									</div>
									<div>
										<div>
											<GoCheckCircleFill className="productIcon" />
											<p className="sprg">Гарантия:</p>
										</div>
										<p className="sprg">10 лет</p>
									</div>
									<div className="product_buying">
										<div id="price">
											<div>
												<p className="sprg">6 127 500 ₽</p>
												<div className="sprg">
													<p>-25%</p>
												</div>
											</div>
											<p className="bprg">5 023 900 ₽</p>
										</div>
										<button>Купить</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Sellers;
