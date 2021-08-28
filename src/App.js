import { Component } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (nextContact) => {
    const { contacts } = this.state;
    const sameName = contacts.some(
      (contact) =>
        contact.name.toLocaleLowerCase() ===
        nextContact.name.toLocaleLowerCase()
    );
    if (sameName) {
      alert(`${nextContact.name} is already in contacts`);
    } else {
      this.setState((prevState) => ({
        contacts: [nextContact, ...prevState.contacts],
      }));
    }
  };

  handleRemove = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="container">
        <h1 className="mainTitle">Phonebook</h1>
        <ContactForm handleSubmit={this.addContact} />
        <h2 className="contactsTitle">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList
          contactsList={visibleContacts}
          handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
