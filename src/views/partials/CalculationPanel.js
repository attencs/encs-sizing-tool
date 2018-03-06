import React, { component } from 'react';
import calculationStyle from './calcPanel.css';

const CalculationPanel = (props) => {
	return (
		<div className="calculation">
		  <div className="calculation__required">
			<h4>Required Resources</h4>
			<div className="calculation__spec-list">
			  <div className="calculation__spec-item">
				<i className="fa fa-server calculation__spec-icon" aria-hidden="true"></i>
				<p>{ props.cpu } CPU core(s)</p>
			  </div>
			  <div className="calculation__spec-item">
				<i className="fa fa-tasks calculation__spec-icon" aria-hidden="true"></i>
				<p>{ props.memory } GB RAM</p>
			  </div>
			  <div className="calculation__spec-item">
				<i className="fa fa-hdd-o calculation__spec-icon" aria-hidden="true"></i>
				<p>{ props.disk } GB disk space</p>
			  </div>
			</div>
		  </div>

		  <div className="calculation__recommend">
			<h6> Based on your selected VNFs, we recommend the <b>{ props.box }</b> with  { props.recMemory } RAM and { props.recDisk } disk space.</h6>
		  </div>
		</div>
	)
};

export default CalculationPanel;
