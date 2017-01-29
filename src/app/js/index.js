var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var data = {};


$(document).ready(function() {


class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {quoter: "", author: ""};
	}


	render() {
		return (
			<div>
				
				<button className="btn btn-lg btn-primary" onClick={this.changeBackgroundAndQuote}>Change Color</button>
			</div>
		);
	}


	changeBackgroundAndQuote () {
		var colorArray = ['#82E0AA', '#5DADE2', '#E8DAEF', '#F6DDCC', '#AEB6BF'];
		var randomNumber = Math.floor(Math.random() * colorArray.length);
		document.body.style.backgroundColor = colorArray[randomNumber];
			$.getJSON({
	        url: "http://quotes.stormconsultancy.co.uk/random.json"
	  }).then(function(data) {
	  		$('.greeting-id').empty();
		    $('.greeting-content').empty();


		    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + data.quote + '" ' + data.author));
		    $('.greeting-id').append(data.quote);
		    $('.greeting-content').append(data.author);
		  });

	  console.log(data.quote);
	}


}




const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);


});
