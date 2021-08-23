import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";
import Button from "../Button/Button";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit({ ...this.state, id: uuidv4() });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { onSubmit, handleChange } = this;
    return (
      <form className={s.form} onSubmit={onSubmit}>
        <label htmlFor={uuidv4()}>
          Name
          <input
            className={s.input}
            type="text"
            onChange={handleChange}
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={uuidv4()}>
          Number
          <input
            className={s.input}
            type="tel"
            onChange={handleChange}
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <Button type="submit" buttonName="Add contact" />
      </form>
    );
  }
}

export default ContactForm;
