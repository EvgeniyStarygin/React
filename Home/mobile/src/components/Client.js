import React from "react";
import '../css/Client.css';
import { events } from '../events';


class Client extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  delete = (eo) => {
    events.emit('deleteClient', this.props.client.id);
  }

  edit = (eo) => {
    events.emit('editClient', this.props.client.id);
  }

  render() {
    console.log("render " + this.props.client.lastname);
    return (
      <tr className="client">
        <td>{this.props.client.lastname}</td>
        <td>{this.props.client.firstname}</td>
        <td>{this.props.client.patronymic}</td>
        <td>{this.props.client.balance}</td>
        {
          this.props.client.balance >= 0
            ? <td className="active">active</td>
            : <td className="blocked">blocked</td>
        }
        <td>
          <input type="button" value="Редактировать" onClick={this.edit} />
        </td>
        <td>
          <input type="button" value="Удалить" onClick={this.delete} />
        </td>
      </tr>
    );
  }
}

export default Client;