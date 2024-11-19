import React, { Component } from "react";

export class NewsItem extends Component {
	render() {
		let { title, description, imageurl, newsUrl, publishedAt, author, source } =
			this.props;
		return (
			<div>
				{" "}
				<div className="my-3">
					<div className="card">
						<span
							class="position-absolute top-0 translate-middle badge rounded-pill text-bg-danger"
							style={{ left: "90z%", zIndex: "1" }}
						>
							{source}
						</span>
						<img
							src={
								!imageurl
									? "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/263100/263189.3.jpg"
									: imageurl
							}
							className="card-img-top"
							alt="..."
						/>
						<div className="card-body">
							<h5 className="card-title">{title}...</h5>
							<p className="card-text">{description}...</p>
							{/* <p className="card-text">
								<b> Published At </b>
								{publishedAt}{" "}
							</p> */}
							<p className="card-text">
								<small class="text-muted">
									<b>By</b> {!author ? "Unknown" : author} <b>On </b>
									{new Date(publishedAt).toGMTString()}
								</small>
							</p>
							<a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
								Read More
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsItem;
