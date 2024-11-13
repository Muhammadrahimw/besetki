import "./category.scss";

let Category = () => {
	return (
		<section className="category ctr">
			<div className="category_top">
				<div>
					<div>
						<img src="/elements/1.svg" alt="" />
					</div>
					<p className="sprg">
						Изготовливаем конструкции по вашему дизайн-проекту
					</p>
				</div>
				<div>
					<div>
						<img src="/elements/5.svg" alt="" />
					</div>
					<p className="sprg">Изготовили более 2 400 деревянных конструкций</p>
				</div>
				<div>
					<div>
						<img src="/elements/3.svg" alt="" />
					</div>
					<p className="sprg">Собственное производство площадью 6 000 м2</p>
				</div>
				<div>
					<div>
						<img src="/elements/4.svg" alt="" />
					</div>
					<p className="sprg">Производим изделия из дерева с 1998 года</p>
				</div>
				<div>
					<div>
						<img src="/elements/5.svg" alt="" />
					</div>
					<p className="sprg">Гарантия от 3х лет на все конструкции</p>
				</div>
			</div>
			<div className="category_cards">
				<p className="hdg">Категории</p>
				<div className="category_body">
					<div className="category_card">
						<div>
							<p className="prg">Беседки</p>
							<div className="category_card-item">
								<p className="sprg">Подкатегория 1</p>
								<p className="sprg">Подкатегория 2</p>
								<p className="sprg">Подкатегория 3</p>
								<p className="sprg">Подкатегория 4</p>
								<p className="sprg">Подкатегория 5</p>
								<p className="sprg">Подкатегория 6</p>
							</div>
						</div>
						<div>
							<img src="/elements/6.png" alt="" />
						</div>
					</div>
					<div className="category_card">
						<div className="category_card-item">
							<p className="prg">Бани</p>
							<p className="sprg">Подкатегория 1</p>
							<p className="sprg">Подкатегория 2</p>
							<p className="sprg">...</p>
						</div>
						<div>
							<img src="/elements/7.png" alt="" />
						</div>
					</div>
					<div className="category_card">
						<div className="category_card-item">
							<p className="prg">Беседки</p>
							<p className="sprg">Подкатегория 1</p>
							<p className="sprg">Подкатегория 2</p>
							<p className="sprg">...</p>
						</div>
						<div>
							<img src="/elements/8.png" alt="" />
						</div>
					</div>
					<div className="category_card">
						<div className="category_card-item">
							<p className="prg">Беседки</p>
							<p className="sprg">Подкатегория 1</p>
							<p className="sprg">Подкатегория 2</p>
							<p className="sprg">...</p>
						</div>
						<div>
							<img src="/elements/9.png" alt="" />
						</div>
					</div>
					<div className="category_card">
						<div className="category_card-item">
							<p className="prg">Детские площадки</p>
							<p className="sprg">Подкатегория 1</p>
							<p className="sprg">Подкатегория 2</p>
							<p className="sprg">Подкатегория 3</p>
							<p className="sprg">Подкатегория 4</p>
							<p className="sprg">Подкатегория 5</p>
						</div>
						<div>
							<img src="/elements/10.png" alt="" />
						</div>
					</div>
					<div className="category_card">
						<div className="category_card-item">
							<p className="prg">Дома</p>
							<p className="sprg">Подкатегория 1</p>
							<p className="sprg">Подкатегория 2</p>
							<p className="sprg">Подкатегория 3</p>
							<p className="sprg">Подкатегория 4</p>
						</div>
						<div>
							<img src="/elements/11.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Category;
