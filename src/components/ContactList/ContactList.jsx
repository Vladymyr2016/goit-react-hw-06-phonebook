import Contact from 'components/Contact/Contact';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectPhoneBook } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectPhoneBook);
  console.log(contacts);

  return (
    <>
      <ul>
        <div>
          {contacts.map(contact => {
            return <Contact key={contact.id} {...contact} />;
          })}
        </div>
      </ul>
    </>
  );
};

export default ContactList;
