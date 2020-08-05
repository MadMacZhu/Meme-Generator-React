import React from 'react';

class MemeGenerator extends React.Component{
	constructor(){
		super();
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: "https://www.nicepng.com/png/full/195-1957315_lol-haha-or-emoji-asian-troll-face-png.png",
			allMemeImg: []
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const {memes} = response.data;
				console.log(memes[0]);
				this.setState({ allMemeImg: memes})
			})
	}

	onChange(event){
		const {name, value} = event.target;
		this.setState({ [name]: value});
	}

	onSubmit(event){
		event.preventDefault();
		const index =  Math.floor(Math.random() * this.state.allMemeImg.length);
		const randomURL = this.state.allMemeImg[index].url;
		this.setState({ randomImg: randomURL });		
	}

	render(){
		return(
			<div>
				<form className="meme-form" onSubmit={this.onSubmit}>
					<input
						type="text"
						name="topText"
						placeholder="Top Text"
						value={this.state.topText}
						onChange={this.onChange}
					/>
					<input
						type="text"
						name="bottomText"
						placeholder="Bottom Text"
						value={this.state.bottomText}
						onChange={this.onChange}
					/>
				<button>Gen</button>
				</form>
				<br />
				<div className="meme">
					<img src={this.state.randomImg} alt=""/>
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>
			</div>
			);
	}

}

export default MemeGenerator;