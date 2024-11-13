import "./about.scss";

let About = () => {
	return (
		<section className="about ctr">
			<div className="about_txt">
				<h2 className="hdg">Немного о нас</h2>
				<hr />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
					integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing nec
					senectus duis nibh. In faucibus adipiscing tellus enim, consequat
					integer accumsan. Ultrices ipsum nulla consequat malesuada enim mollis
					est.
				</p>
				<div className="lorem2">
					<div>
						<img src="/elements/Vector.svg" alt="" />
					</div>
					<b>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
						integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
						nec senectus duis nibh. In faucibus adipiscing tellus enim,
						consequat integer accumsan. Ultrices ipsum nulla consequat malesuada
						enim mollis est. Venenatis, sagittis, amet ornare donec purus
						suscipit nam sodales. Varius sit amet nullam dictumst massa
						consequat odio faucibus. <br /> <br />
						<span>Никита Данилов, Руководитель компании</span>
					</b>
				</div>
			</div>
			<div className="about_img">
				<img src="/elements/13.png" alt="" />
			</div>
		</section>
	);
};

export default About;
