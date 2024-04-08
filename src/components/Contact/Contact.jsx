import React from 'react';
import s from './Contact.css';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/actions';

const Contact = ({ id, title }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <h2 className={s.title}>{title}</h2>
      <button type="submit" onClick={() => dispatch(removeContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
