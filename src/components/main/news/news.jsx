import "./news.scss";

let News = () => {
	return (
		<section className="news">
			<h2 className="hdg">Статьи, новости и обзоры</h2>
			<div className="new_body ctr">
				<div className="new_card">
					<div className="new_img"></div>
					<div className="new_txt">
						<p className="prg">Как выбрать беседку для дачи</p>
						<p className="sprg">19 сентября 2021</p>
						<p className="sprg">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
							felis faucibus turpis justo, ipsum sed sit. Nisl mauris adipiscing
							congue tortor bibendum condimentum sociis lorem. Nibh ut ornare
							nec est pharetra, tortor egestas quam non. Aenean felis sed mauris
							eu. Nisi pellentesque.
						</p>
						<p className="sprg">Читать далее</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;
