import React from "react";
import '../css/NewClient.css';
import { events } from '../events';


class NewClient extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  save = () => {
    const lastname = this.lastnameRef.current.value;
    const name = this.nameRef.current.value;
    const patronomyc = this.patronomycRef.current.value;
    const balance = this.balanceRef.current.value;
    const newClient = {
      lastname: lastname,
      name: name,
      patronomyc: patronomyc,
      balance: balance,
    }
    events.emit('saveNewClient', newClient);
  }

  lastnameRef = React.createRef();
  nameRef = React.createRef();
  patronomycRef = React.createRef();
  balanceRef = React.createRef();


  render() {
    return (
      (this.props.add) &&
      <div className="new-client-form">
        <div>
          <span>Фамилия</span>
          <input type="text" ref={this.lastnameRef} />
        </div>
        <div>
          <span>Имя</span>
          <input type="text" ref={this.nameRef} />
        </div>
        <div>
          <span>Отчество</span>
          <input type="text" ref={this.patronomycRef} />
        </div>
        <div>
          <span>Баланс</span>
          <input type="text" ref={this.balanceRef} />
        </div>
        <input type="button" value="Сохранить" onClick={this.save} />
      </div>
    );
  }
}

export default NewClient;