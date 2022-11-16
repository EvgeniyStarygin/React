import React from "react";
import '../css/MobileCompany.css';
import Client from './Client'
import { events } from '../events';
import NewClient from './NewClient'


class MobileCompany extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      allClients: props.clients,
      currClients: props.clients,
      addNewClient: false,
      showAll: true,
      showActive: false,
      showBlocked: false
    }
  }

  showClients = () => {
    let clients = [...this.state.allClients];
    if (this.state.showActive) {
      clients = clients.filter((client) => client.balance >= 0);
    }
    if (this.state.showBlocked) {
      clients = clients.filter((client) => client.balance < 0);
    }
    this.setState({ currClients: clients });

  }

  showAll = (eo) => {
    this.setState({ showAll: true, showActive: false, showBlocked: false }, this.showClients);
  }

  showActive = (eo) => {
    this.setState({ showAll: false, showActive: true, showBlocked: false }, this.showClients);
  }

  showBlocked = (eo) => {
    this.setState({ showAll: false, showActive: false, showBlocked: true }, this.showClients);
  }

  deleteClient = (clientId) => {
    const allClients = [...this.state.allClients];
    const newAllClients = allClients.filter((client) => client.id !== clientId);
    this.setState({ allClients: newAllClients }, this.showClients);
  }

  editClient = (clientId) => {
    const newBalance = +prompt("Введите новый баланс");
    const newClients = [...this.state.allClients];
    newClients.forEach((client, index) => {
      if (client.id === clientId) {
        const editedClient = { ...client };
        editedClient.balance = newBalance;
        newClients[index] = editedClient;
      }
    });
    this.setState({ allClients: newClients }, this.showClients);
  }


  addClient = (eo) => {
    this.setState({ addNewClient: true });
  }

  saveNewClient = (newClient) => {
    let newClients = [...this.state.allClients];
    newClient.id = newClients.length + 1000;
    newClients = [...newClients, newClient];
    this.setState({ allClients: newClients, addNewClient: false }, this.showClients);
  }


  componentDidMount = () => {
    events.addListener('deleteClient', this.deleteClient);
    events.addListener('editClient', this.editClient);
    events.addListener('saveNewClient', this.saveNewClient);
  };

  componentWillUnmount = () => {
    events.removeListener('deleteClient', this.deleteClient);
    events.removeListener('editClient', this.editClient);
    events.removeListener('saveNewClient', this.saveNewClient);
  };

  render() {
    console.log("render MOBILE COMPANY");
    return (
      <div>
        <input type="button" value="Все" onClick={this.showAll} />
        <input type="button" value="Активные" onClick={this.showActive} />
        <input type="button" value="Заблокированные" onClick={this.showBlocked} />
        <table className="clients">
          <thead>
            <tr>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Баланс</th>
              <th>Статус</th>
              <th>Редактировать</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {this.state.currClients.map((client) =>
            (
              <Client key={client.id} client={client} />
            )
            )}
          </tbody>
        </table>
        <input type="button" value="Добавить клиента" onClick={this.addClient} />
        <NewClient add={this.state.addNewClient} />
      </div>
    );
  }
}

export default MobileCompany;