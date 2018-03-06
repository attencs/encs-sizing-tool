import React, { component } from 'react';
import columnStyles from './columns.css';

// We will need to define a few of our own things here:
// Specs, image of router, delete button, etc
export default function customCard (props) {
	const deleteCard = () => {
		// pass in the VNF itself, makes it easier to handle calculations despite misc extra data
		props.deleteHandler(props);
	};

	return (
		<div>
		  <header className="card__title">
			<div style={{ fontWeight: 'bold' }}>
			  <h6 style={{marginBottom: 0, fontSize: '14px'}}><b>{props.name}</b></h6>
			</div>
			<span class="Select-clear-zone" title="Clear value" aria-label="Clear value" onClick={deleteCard}>
			  <span class="Select-clear">×</span>
			</span>
		  </header>
		  <div style={{ fontSize: 12 }}>
			<div class="row">
			  <div class="column">
				<p><b>vCPU:</b> {props.specs.vcpu}<br/>
				  <b>Memory:</b> {props.specs.memory}</p>
			  </div>
			  <div class="column">
				<p><b>Disk:</b> {props.specs.disk}</p>
			  </div>
			</div>
		  </div>
		</div>
	);
}
