import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';


class SingleSelect extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: null
		};
	}


	_onChange = (value) => {
		this.setState({ value });
		this.props.toggle(value);
	};


	render () {
		return (
			<div>
				<header
				style={{
					paddingBottom: 6,
					marginBottom: 10
				}}>
				<div>
				<h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>{this.props.name}</h4>
				</div>

				<Select
					onChange={this._onChange}
					options={this.props.options}
					simpleValue
					value={this.state.value}
					/>
				</header>
			</div>
		)
	}
};

export default SingleSelect;
