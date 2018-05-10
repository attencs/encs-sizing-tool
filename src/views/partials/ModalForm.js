import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';


class ModalForm extends Component {
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

  toggleModal = event => {
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

    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggleModal}>Click to add a custom VNF</button>
        <Modal
          id="modal_with_forms"
          isOpen={isOpen}
          closeTimeoutMS={150}
          contentLabel="modalB"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.toggleModal}
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}>
          <h1 id="heading">Add Custom VNF</h1>
          <div id="fulldescription" tabIndex="0" role="document">
            <form>
              <fieldset>
                <legend>Please input the details of your VNF.</legend>
                <br />
                Name: <input type="text" value={this.state.name} onChange={this._onChangeName} />
                CPUs: <input type="text" value={this.state.cpu} onChange={this._onChangeCpu} />
                RAM: <input type="text" value={this.state.ram} onChange={this._onChangeRam} />
                Disk (in GB): <input type="text" value={this.state.disk} onChange={this._onChangeDisk} />
              </fieldset>
            </form>
            <button className="btn btn-primary" onClick={this.submitForm}>Submit</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;
