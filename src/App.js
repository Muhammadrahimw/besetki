import "./components/global/_global.scss";
import Header from "./components/header/header";
import Category from "./components/main/category/category";
import Sellers from "./components/main/sellers/sellers";
import Comments from "./components/main/comments/comments";
import About from "./components/main/about/about";
import News from "./components/main/news/news";
import Footer from "./components/footer/footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Category />
			<Sellers />
			<Comments />
			<About />
			<News />
			<Footer />
		</div>
	);
}

export default App;
