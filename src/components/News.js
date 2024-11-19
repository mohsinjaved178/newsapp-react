import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
	static defaultProps = {
		pageSize: 6,
		category: "general",
		country: "us",
	};
	static propTypes = {
		pageSize: PropTypes.number,
		category: PropTypes.string,
		country: PropTypes.string,
	};
	articles = [
		{
			source: {
				id: "wired",
				name: "Wired",
			},
			author: "Andy Greenberg",
			title:
				"A Vast New Dataset Could Supercharge the AI Hunt for Crypto Money Laundering",
			description:
				"Blockchain analysis firm Elliptic, MIT, and IBM, have released a new AI detection model—and the 200-million-transaction dataset it's trained on—that aims to spot the “shape” of Bitcoin money laundering.",
			url: "https://www.wired.com/story/ai-crypto-tracing-model-money-laundering/",
			urlToImage:
				"https://media.wired.com/photos/6631a1936dc0c77846852ed5/191:100/w_1280,c_limit/Crypto-Money-Laundering-Security-GettyImages-1543076825.jpg",
			publishedAt: "2024-05-01T13:00:00Z",
			content:
				"As a test of their resulting AI tool, the researchers checked its outputs with one cryptocurrency exchangewhich the paper doesn't nameidentifying 52 suspicious chains of transactions that had all ult… [+3279 chars]",
		},
		{
			source: {
				id: "wired",
				name: "Wired",
			},
			author: "Joel Khalili",
			title: "FTX Creditors Say Payout Deal Is 'an Insult'—and Plan to Revolt",
			description:
				"FTX has a plan to repay its former crypto customers more than the billions of dollars they lost in the latest bankruptcy proposal. But some will reject it anyway.",
			url: "https://www.wired.com/story/ftx-creditors-crypto-payout-rejection/",
			urlToImage:
				"https://media.wired.com/photos/663ba309e6755459097533ca/191:100/w_1280,c_limit/FTX-Bankruptcy-Business-GettyImages-1245052532.jpg",
			publishedAt: "2024-05-08T17:00:02Z",
			content:
				"Some creditors of the bankrupt crypto exchange FTX are preparing to reject a plan that would see them recover 118 percent of the money they lost. The proposal is far less generous than it might seem,… [+2945 chars]",
		},
		{
			source: {
				id: null,
				name: "ReadWrite",
			},
			author: "Radek Zielinski",
			title: "GBTC Bitcoin ETF holdings drop before halving",
			description:
				"The Grayscale Bitcoin Trust (GBTC), a prominent Bitcoin investment product, has seen a significant decline in its Bitcoin (BTC) holdings.… Continue reading GBTC Bitcoin ETF holdings drop before halving\nThe post GBTC Bitcoin ETF holdings drop before halving ap…",
			url: "https://readwrite.com/gbtc-bitcoin-etf-holdings-drop-before-halving/",
			urlToImage:
				"https://readwrite.com/wp-content/uploads/2024/04/zxDgyfq8QYCzJhRAH2CF1g.jpg",
			publishedAt: "2024-04-17T16:43:29Z",
			content:
				"The Grayscale Bitcoin Trust (GBTC), a prominent Bitcoin investment product, has seen a significant decline in its Bitcoin (BTC) holdings. This is despite the outflows recently slowing down.\r\nAccordin… [+2125 chars]",
		},
		{
			source: {
				id: null,
				name: "Slashdot.org",
			},
			author: "EditorDavid",
			title:
				"Jack Dorsey's Block Is Investing 10% Of Its Bitcoin Profits Into Monthly Bitcoin Purchases",
			description:
				"An anonymous reader shared this report from the blog Bitcoinist:\n\nJack Dorsey's financial services and digital payments company, Block Inc., announced it will begin investing 10% of its monthly Bitcoin-related gross profits into BTC purchases. This announceme…",
			url: "https://slashdot.org/story/24/05/04/0356205/jack-dorseys-block-is-investing-10-of-its-bitcoin-profits-into-monthly-bitcoin-purchases",
			urlToImage: "https://a.fsdn.com/sd/topics/bitcoin_64.png",
			publishedAt: "2024-05-04T17:34:00Z",
			content:
				"Jack Dorsey's financial services and digital payments company, Block Inc., announced it will begin investing 10% of its monthly Bitcoin-related gross profits into BTC purchases. This announcement was… [+1022 chars]",
		},
	];
	capitalizeFirstLetter = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};
	constructor(props) {
		super(props);
		console.log("hello i am constructor");
		this.state = {
			articles: this.articles,
			loading: false,
			page: 1,
			totalResults: 0,
		};
		document.title = `${this.capitalizeFirstLetter(
			this.props.category
		)} - NewsMonkey`;
	}

	async updateNews() {
		this.props.setProgress(10);
		console.log("update news");
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2702ff36ac19453bb516747027b6c61a&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			loading: false,
			totalResults: parsedData.totalResults,
		});
		this.props.setProgress(100);
	}

	async componentDidMount() {
		this.props.setProgress(10);
		console.log("cdm");
		let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2702ff36ac19453bb516747027b6c61a&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		this.props.setProgress(30);
		let parsedData = await data.json();
		this.props.setProgress(70);
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			loading: false,
			totalResults: parsedData.totalResults,
		});
		this.props.setProgress(100);
	}
	handlePrevClick = async () => {
		console.log("clicked previous");
		let url = `https://newsapi.org/v2/top-headlines?country=${
			this.props.country
		}&category=${
			this.props.category
		}&apiKey=2702ff36ac19453bb516747027b6c61a&page=${
			this.state.page - 1
		}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });

		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			page: this.state.page - 1,
			articles: parsedData.articles,
			loading: false,
		});
	};
	handleNextClick = async () => {
		console.log("next previous");
		if (
			!(
				this.state.page + 1 >
				Math.ceil(this.state.totalResults / this.props.pageSize)
			)
		) {
			let url = `https://newsapi.org/v2/top-headlines?country=${
				this.props.country
			}&category=${
				this.props.category
			}&apiKey=2702ff36ac19453bb516747027b6c61a&page=${
				this.state.page + 1
			}&	pageSize=${this.props.pageSize}`;
			this.setState({ loading: true });

			let data = await fetch(url);
			let parsedData = await data.json();
			console.log(parsedData);
			this.setState({
				page: this.state.page + 1,
				articles: parsedData.articles,
				loading: false,
			});
		}
	};
	fetchMoreData = async () => {
		this.setState({ page: this.state.page + 1 });
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2702ff36ac19453bb516747027b6c61a&page=1&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		let data = await fetch(url);
		let parsedData = await data.json();
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			loading: false,
			totalResults: parsedData.totalResults,
		});
	};

	render() {
		console.log("render");
		return (
			<div className="container my-3=true">
				{/* {this.state.loading && <Spinner />} */}
				<h1 className="text-center">
					NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
					Headline
				</h1>
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={this.state.loading && <Spinner />}
				>
					<div className="row">
						{this.state.articles.map((element) => {
							return (
								<div className="col-md-4" key={element.url}>
									<NewsItem
										title={element.title ? element.title.slice(0, 45) : ""}
										description={
											element.description
												? element.description.slice(0, 88)
												: ""
										}
										imageurl={element.urlToImage}
										newsUrl={element.url}
										publishedAt={element.publishedAt}
										author={element.author}
										source={element.source.name}
									/>
								</div>
							);
						})}
					</div>
				</InfiniteScroll>

				<div className="container d-flex justify-content-between">
					<button
						type="button"
						className="btn btn-dark"
						onClick={this.handlePrevClick}
						disabled={this.state.page <= 1}
					>
						&larr; previous
					</button>

					<button
						type="button"
						className="btn btn-dark"
						onClick={this.handleNextClick}
						disabled={
							this.state.page + 1 >
							Math.ceil(this.state.totalResults / this.props.pageSize)
						}
					>
						&rarr;Next
					</button>
				</div>
			</div>
		);
	}
}

export default News;
