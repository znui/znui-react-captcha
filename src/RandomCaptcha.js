var React = znui.React || require('react');
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
  
function genetateCaptcha(max) {
	var text = '', i;
	for (i = 0; i < max; i += 1) {
		switch (Math.floor(Math.random() * 3)) {
		case 0: text += String.fromCharCode(48 + Math.floor(Math.random() * 10)); break
		case 1: text += String.fromCharCode(65 + Math.floor(Math.random() * 26)); break
		case 2: text += String.fromCharCode(97 + Math.floor(Math.random() * 26)); break
		default: break
		}
	}

	return text;
}

module.exports = React.createClass({
	displayName:'RandomCaptcha',
	getDefaultProps: function (){
		return {
			placeholder: '请输入验证码',
			caseSensitive: false,
			length: 6,
			width: 200
		};
	},
	getInitialState: function (){
		return {
			value: '',
			solution: genetateCaptcha(this.props.length),
			checked: false
		};
	},
	componentDidMount: function (){
		this.drawCaptcha();
	},
	refresh: function (){
		var _solution = genetateCaptcha(this.props.length);
		this.setState({
			solution: _solution,
			input: ''
		}, () => this.drawCaptcha());
		this.props.onRefresh && this.props.onRefresh(_solution);
	},
	drawCaptcha: function (){
		var solution = this.state.solution;
		var width = this.canvas.width;
		var height = this.canvas.height;
		var ctx = this.canvas.getContext('2d');
		ctx.clearRect(0, 0, width, height);
		ctx.font = `${getRandomInt(30, 40)}px serif`;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(solution, width / 2, height / 2 + 3);
		ctx.strokeStyle = 'purple';

		ctx.beginPath();
		ctx.moveTo(getRandomInt(5, 20), getRandomInt(5, 20)); 
		ctx.lineTo(width - getRandomInt(5, 20), height - getRandomInt(5, 20)); 
		ctx.stroke();
		ctx.moveTo(getRandomInt(15, 30), getRandomInt(15, 30));
		ctx.lineTo(width - getRandomInt(15, 30), height - getRandomInt(15, 30));
		ctx.stroke();
		ctx.moveTo(getRandomInt(5, 20), height - getRandomInt(5, 20));
		ctx.lineTo(width - getRandomInt(5, 20), getRandomInt(5, 20));
		ctx.stroke();
		ctx.moveTo(getRandomInt(15, 30), height - getRandomInt(15, 30));
		ctx.lineTo(width - getRandomInt(15, 30), getRandomInt(15, 30));
		ctx.stroke();
		ctx.moveTo(getRandomInt(width / 10, (width / 10) + 10), height - getRandomInt(15, 30));
		ctx.lineTo(getRandomInt(width / 2, width / 2 + 10), getRandomInt(5, 20));
		ctx.stroke();
		ctx.closePath();
	},
	playAudio: function (){
		if(this.state.solution) {
			var audio = new SpeechSynthesisUtterance(this.state.solution.toString().split('').join(' '))
			audio.rate = 1;
			audio.lang = 'zh-cn';
			window.speechSynthesis.speak(audio);
		}
	},
	__onInputChange: function (event){
		var _value = event.target.value;
		var solution = this.state.solution;
		var checked = _value.toString().toLowerCase() === solution.toString().toLowerCase();
		if(this.props.caseSensitive) {
			checked = _value.toString() === solution.toString();
		}

		this.setState({
			value: _value,
			checked: checked
		});
		event.value = event.checked = checked;
		this.props.onChange && this.props.onChange(event, this);
		if(checked) {
			this.props.onChecked && this.props.onChecked(event, this);
		}
	},
	render:function(){
		return (
			<div className={znui.react.classname("zr-random-captcha", this.props.className)} style={this.props.style}>
				<div className='rnc'>
					<div className='rnc-row'>
						<canvas ref={el => (this.canvas = el)} width={this.props.width} height={50} className='rnc-canvas' data-testid='captcha-canvas'/>
						<div className='rnc-column'>
							<button type='button' aria-label='get new captcha' onClick={this.refresh} className='rnc-button' data-testid='captcha-refresh'>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
									<g data-name='Layer 2'>
										<g data-name='refresh'>
										<rect width='24' height='24' opacity='0' />
										<path d='M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z' />
										</g>
									</g>
								</svg>
							</button>
							<button type='button' aria-label='play audio' onClick={this.playAudio} className='rnc-button' data-testid='captcha-audio'>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
									<g data-name='Layer 2'>
										<g data-name='volume-up'>
										<rect width='24' height='24' opacity='0' />
										<path d='M18.28 8.37a1 1 0 1 0-1.56 1.26 4 4 0 0 1 0 4.74A1 1 0 0 0 17.5 16a1 1 0 0 0 .78-.37 6 6 0 0 0 0-7.26z' />
										<path d='M19.64 5.23a1 1 0 1 0-1.28 1.54A6.8 6.8 0 0 1 21 12a6.8 6.8 0 0 1-2.64 5.23 1 1 0 0 0-.13 1.41A1 1 0 0 0 19 19a1 1 0 0 0 .64-.23A8.75 8.75 0 0 0 23 12a8.75 8.75 0 0 0-3.36-6.77z' />
										<path d='M15 3.12a1 1 0 0 0-1 0L7.52 7.57h-5a1 1 0 0 0-1 1v6.86a1 1 0 0 0 1 1h5l6.41 4.4a1.06 1.06 0 0 0 .57.17 1 1 0 0 0 1-1V4a1 1 0 0 0-.5-.88zm-1.47 15L8.4 14.6a1 1 0 0 0-.57-.17H3.5V9.57h4.33a1 1 0 0 0 .57-.17l5.1-3.5z' />
										</g>
									</g>
								</svg>
							</button>
						</div>
					</div>
					<input
						value={this.state.value}
						onChange={this.__onInputChange}
						placeholder={this.props.placeholder}
						className='rnc-input'
						data-testid='captcha-input'
					/>
				</div>
			</div>
		);
	}
});