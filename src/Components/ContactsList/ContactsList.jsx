function ContactsList({ contactsList }) {
  return (
    <ul>
      {contactsList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
          </li>
        );
      })}
    </ul>
  );
}

export default ContactsList;
