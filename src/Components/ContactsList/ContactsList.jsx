import { Component } from "react";
import PropTypes from "prop-types";
import s from "./ContactsList.module.css";
import Button from "../Button/Button";

class ContactsList extends Component {
  render() {
    const { contactsList, handleRemove } = this.props;
    return (
      <ul className={s.list}>
        {contactsList.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              <p>
                {name}: {number}{" "}
              </p>
              <Button
                type="button"
                handleClick={() => handleRemove(id)}
                buttonName="Delete"
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
ContactsList.propTypes = {
  contactsList: PropTypes.func,
  handleRemove: PropTypes.func,
};

export default ContactsList;
