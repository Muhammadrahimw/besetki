import "./comments.scss";
import {FaStar} from "react-icons/fa";

let Comments = () => {
	return (
		<section className="comments">
			<h2 className="hdg">Отзывы наших клиентов</h2>
			<div className="comments_body">
				{Array.from({length: 3}).map((value) => {
					return (
						<div className="comment_card">
							<div className="comment_owner">
								<p className="prg">Алексей С.А.</p>
								<div>
									<FaStar className="starIcon" />
									<FaStar className="starIcon" />
									<FaStar className="starIcon" />
									<FaStar className="starIcon" />
									<FaStar className="starIcon" />
								</div>
							</div>
							<div className="comment_owner-info">
								<p className="sprg">28 июня 2021</p>
								<p className="sprg">Общая оценка: (4,8) </p>
							</div>
							<hr />
							<p className="sprg comment">
								«Цена хорошая, все соответствует ожиданиям. Подбирала перголу
								для своего участка. Также мне хотелось бы отметить вежливость
								работников компании, все подробно рассказали. Я считаю этот
								магазин отличным. И наверняка буду покупать снова или советовать
								коллегам.»
							</p>
							<a href="/public/index.html">Читать полностью</a>
						</div>
					);
				})}
			</div>
			<div className="btnContainer">
				<button>Открыть все отзывы</button>
			</div>
		</section>
	);
};

export default Comments;
