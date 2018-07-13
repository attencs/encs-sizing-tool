import React, { component } from 'react';
import calculationStyle from './calcPanel.css';

const CalculationPanel = (props) => {

	const recommendUpgrade = (props.box.cores === props.cpu) && !(props.box.name === 'CSP-2100-X1');

	const recommendHeader = recommendUpgrade ?
		( <h6> Please note that you have allocated all of the CPU cores on your <b>{ props.box.name }</b>.
			We recommend upgrading to the <b>{ props.box.nextModel }</b> to ensure adequate headroom for additional VNFs. </h6> )
		 : '';

	const ssd = props.needSSD ?  'SSD' : '';

	console.log(ssd);

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
				<p>{ props.disk } GB { ssd } disk space</p>
			  </div>
			</div>
		  </div>

		  <div className="calculation__recommend">
			<h6> Based on your selections, you need at least the <b>{ props.box.name }</b> with { props.recMemory } RAM and { props.recDisk } { ssd } disk space.</h6>
			{ recommendHeader }
		  </div>
		</div>
	)
};

export default CalculationPanel;
