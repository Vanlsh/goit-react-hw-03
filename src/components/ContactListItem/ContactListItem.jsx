import PropTypes from "prop-types";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import css from "./ContactListItem.module.css";

const ContactListItem = ({ id, name, number, handleDeleteContact }) => {
  const handleDelete = () => handleDeleteContact(id);

  return (
    <li className={css.card}>
      <div className={css.wrapper}>
        <div className={css.info}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.info}>
          <FaPhoneAlt />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.button} onClick={handleDelete}>
        delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  handleDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;
