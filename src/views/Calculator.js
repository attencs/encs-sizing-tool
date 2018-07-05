import React, { Component } from 'react';
import Board from 'react-trello';
import { connect } from 'react-redux';
import { addVNF, deleteVNF, togglePOE, selectNIM, addCustomVNF } from '../actions/actionCreators';

import CustomCard from './partials/Card';
import CustomColumnHeader from './partials/ColumnHeader';
import CalculationPanel from './partials/CalculationPanel';
import SingleSelect from './partials/SingleSelect';
import CustomVnfForm from './partials/CustomVnfForm';

import baseStyles from '../styles/base.css';
import NIMs from '../data/nims';


const boardStyle = {
	backgroundColor: 'transparent',
	width: '100%',
	height: '100%',
	padding: 0
};

const laneStyle = {
	backgroundColor: 'transparent'
};

const cardStyle = {
	boxShadow: '-1px 14px 37px -17px rgba(222,229,232,1)',
    border: '1px solid #e1e2e4',
	padding: 10
};

class Calculator extends Component {
	constructor(props) {
		super(props);
	}

	_constructBoardData = () => {
		const data = {
			lanes: [
				{
					id: 'routers',
					vnfType: 'routers',
					title: 'Routers',
					cards: this.props.selectedItems.routers,
					columnHeader: {
						addHandler: (id) => this._addNewCard(id),
						buttonText: 'Add Router'
					},
					style: laneStyle,
					cardStyle
				},
				{
					id: 'firewalls',
					vnfType: 'firewalls',
					title: 'Firewalls',
					cards: this.props.selectedItems.firewalls,
					columnHeader: {
						addHandler: (id) => this._addNewCard(id),
						buttonText: 'Add Firewall'
					},
					style: laneStyle,
					cardStyle
				},
				{
					id: 'vwaas',
					vnfType: 'vwaas',
					title: 'vWAAS',
					cards: this.props.selectedItems.vwaas,
					columnHeader: {
						addHandler: (id) => this._addNewCard(id),
						buttonText: 'Add vWAAS'
					},
					style: laneStyle,
					cardStyle
				},
				{
					id: 'thirdparty',
					vnfType: 'thirdparty',
					title: 'Third-Party VNFs',
					cards: this.props.selectedItems.thirdparty,
					columnHeader: {
						addHandler: (id) => this._addNewCard(id),
						buttonText: 'Add VNF'
					},
					style: laneStyle,
					cardStyle
				}
			]
		};

		return data;
	}


	_constructNIMOptions = () => {
		NIMs.map((obj) => {
	    obj.value = obj.label;
	    return obj;
		});

		return NIMs;
	}


	_addNewCard = (vnfId) => {
		this.props.addVNF(vnfId);
		// Ignore this, this just force refreshes a component
		// this.eventBus.publish({	type: 'ADD_CARD', laneId: 'misc', card });
	}


	_togglePOE = (poe) => {
		this.props.togglePOE(poe);
	}


	_selectNIM = (nim) => {
		this.props.selectNIM(nim);
	}

	_addCustomVNF = (vnf) => {
		this.props.addCustomVNF(vnf);
	}


	render() {
		const data = this._constructBoardData();
		const nim_options = this._constructNIMOptions();

		return (
			<div className="container">
			  <div className="base__content">
				<header className="App-header">
				  <h1 className="App-title">ENCS Sizing Tool</h1>
				  <p>With the Cisco ENCS 5000 Series, you can deploy network services in minutes through the virtualization of all your services
					in the branch. The ENCS 5000 Series provides service agility and density needed for the branch that may
					have limited IT resources. Use this tool to gather hardware requirements and recommend a
					platform based on selected virtual network functions and platform options.</p>
				</header>
				<br />
				<div>
				  <CalculationPanel
					cpu={this.props.requirements.cpu}
					memory={this.props.requirements.ram}
					disk={this.props.requirements.disk}
					box={this.props.currentRecommendation.box}
				  recMemory={this.props.currentRecommendation.recMemory}
					recDisk={this.props.currentRecommendation.recDisk}
					/>
				</div>
				<div className="extras_row">
				<div className='extras_nim'>
					<SingleSelect
					name="Network Interface Modules"
					options={nim_options}
					onChange={(nim) => this._selectNIM(nim)}
					/>
				</div>
				<div className='extras_poe'>
					<SingleSelect
					name="Power Over Ethernet"
					options={[
						{ value: true, label: 'Yes' },
						{ value: false, label: 'No' }
					]}
					onChange={(poe) => this._togglePOE(poe)}
					/>
				</div>
				</div>
				<div>
				  <Board
					data={data}
					customCardLayout
					customLaneHeader={<CustomColumnHeader />}
					style={boardStyle}
					otherProps={{
						cardStyle: {
							marginBottom: 100,
							background: 'black'
						}
					}}>
					<CustomCard
					  deleteHandler={this.props.deleteVNF} />
   				  </Board>
				</div>
				<br />
				<div className="extras_custom_vnf">
				   <CustomVnfForm
				   submit={this._addCustomVNF}
				  />
				</div>
				<br />
				<br />
				<br />
				<div className="links_row">
					<h6>For more information see: <a href="https://www.cisco.com/go/enfv" target="_blank">ENFV Overview</a> and
					<a href="https://www.cisco.com/c/en/us/products/routers/5000-series-enterprise-network-compute-system/index.html" target="_blank"> ENCS5000 Overview</a></h6>
				</div>
			  </div>
			</div>
		);
	}
}

// We will map the states and dispatch eventually
const mapStateToProps = state => ({
	selectedItems: state.cards,
	requirements: state.requirements,
	currentRecommendation: state.currentRecommendation
});

// This will assign functions to be used as prop
const mapDispatchToProps = (dispatch) => ({
	addVNF: vnfType => dispatch(addVNF(vnfType)),
	deleteVNF: vnfCard => dispatch(deleteVNF(vnfCard)),
	togglePOE: poe => dispatch(togglePOE(poe)),
	selectNIM: nim => dispatch(selectNIM(nim)),
	addCustomVNF: vnf => dispatch(addCustomVNF(vnf))
});

// This will bind redux state to our calculator
const connectedCalculator = connect(mapStateToProps, mapDispatchToProps)(Calculator);

export default connectedCalculator;
