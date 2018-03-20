import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';


class SingleSelect extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectValue: null
		};
	}


	_onChange = (selectValue) => {
		this.setState({ selectValue });
		console.log(selectValue)
		this.props.onChange(selectValue);
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
				<div style={{marginTop: 5, fontSize: 13}}>
					<Select
						onChange={this._onChange}
						options={this.props.options}
						simpleValue
						value={this.state.selectValue}
						/>
				</div>
				</header>
			</div>
		)
	}
};

export default SingleSelect;
