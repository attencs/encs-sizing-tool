import React, { Component } from 'react';
import { connect } from 'react-redux';
import formStyles from './forms.css';


class CustomVnfForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      name: '',
      cpu: '',
      ram: '',
      disk: ''
    };
  }


  toggle = event => {
    console.log(event);
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  submitForm = () => {
    let vnf = {
      type: "thirdparty",
      name: this.state.name,
      specs: {
          vcpu: Number(this.state.cpu),
          memory: Number(this.state.ram),
          disk: Number(this.state.disk)
      }
    }

    this.props.submit(vnf);

    this.setState({ isOpen: false });
    this.setState({ name: '' });
    this.setState({ cpu: '' });
    this.setState({ ram: '' });
    this.setState({ disk: '' });

  }

  _onChangeName = (event) => {

    this.setState({ name: event.target.value});
    return;

  }

  _onChangeCpu = (event) => {

    this.setState({ cpu: event.target.value});
    return;

  }

  _onChangeRam = (event) => {

    this.setState({ ram: event.target.value});
    return;

  }

  _onChangeDisk = (event) => {

    this.setState({ disk: event.target.value});
    return;

  }

  render() {
    const isOpen = this.state.isOpen;
    const closedText = 'Click to add a custom VNF';
    const openText = 'Click to hide custom VNF input';

    return (
      <div>
        <input type="button" value={this.state.isOpen ? openText: closedText} onClick={this.toggle} />
        <br />
        <br />
        <div className={isOpen ? "custom_vnf_row": "hidden"}>
          <div className="vnf_name">
            <label for="name">Name</label>
            <input id="name" type="text" value={this.state.name} onChange={this._onChangeName} />
          </div>
          <div className="vnf_cpu">
            <label for="cpu">CPUs</label>
            <input id="cpu" type="text" value={this.state.cpu} onChange={this._onChangeCpu} />
          </div>
          <div className="vnf_ram">
            <label for="ram">RAM</label>
            <input id="ram" type="text" value={this.state.ram} onChange={this._onChangeRam} />
          </div>
          <div className="vnf_disk">
            <label for="disk">Disk (in GB)</label>
            <input id="disk" type="text" value={this.state.disk} onChange={this._onChangeDisk} />
          </div>
          <div className="vnf_submit_button">
            <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomVnfForm;
