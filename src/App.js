import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./Components/ContactForm/ContactForm";
import ContactsList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          name: this.state.name,
          number: this.state.number,
          id: uuidv4(),
        },
      ],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  // getVisibleContacts = () => {
  //   const { filter, contacts } = this.state;
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.text.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  render() {
    // const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <Filter handleChange={this.handleChange} />
        <ContactsList contactsList={this.state.contacts} />
      </div>
    );
  }
}

export default App;
