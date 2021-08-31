import { Component } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";
import "./App.css";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

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
