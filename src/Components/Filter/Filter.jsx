import { v4 as uuidv4 } from "uuid";

function Filter({ handleChange }) {
  return (
    <label htmlFor={uuidv4()}>
      Find contact
      <input type="text" onChange={handleChange} name="filter" required />
    </label>
  );
}
export default Filter;
