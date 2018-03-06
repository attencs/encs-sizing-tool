import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import VNFs from '../../data/sample';

class CustomLaneHeader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: ''
		};
	}

	_generateOptions = () => {
		// Map and add a value per selection
		const options = VNFs.map((vnf) => {
			return {
				...vnf,
				value: vnf.vnfId,
				label: vnf.name
			};
		})
		// Reduce selection per lane basis
			.reduce((acc, value) => {
				if (this.props.vnfType === value.type) {
					return [...acc, value];
				} else {
					return acc;
				}
			}, []);

		return options;
	};

	_setSelection = (value) => {
		this.setState({
			selected: value
		});
	};


	render () {
		const options = this._generateOptions();
		const selectedVnf = this.state.selected;

		return (
			<div>
			  <header
				style={{
					paddingBottom: 6,
					marginBottom: 10
				}}>
				<div>
				<h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>{this.props.title}</h4>
				</div>

				<Select
				  name="form-field-name"
				  value={this.state.selected}
				  options={options}
				  onChange={this._setSelection}
				  />
				<div style={{width: '100%', marginTop: 5, fontSize: 13}}>
				  <button
					onClick={() => (selectedVnf) ? this.props.columnHeader.addHandler(selectedVnf.id) : '' }
					className="button--primary">
					{this.props.columnHeader.buttonText}
				  </button>
				</div>
			  </header>
			</div>
		)
	}
};

export default CustomLaneHeader;
