import Contact from 'components/Contact/Contact';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter, selectPhoneBook } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectPhoneBook);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = contacts.filter(contact => {
    console.log(contact.title.toLowerCase().includes(filter.toLowerCase()));
    return contact.title.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <>
      <ul>
        <div>
          {getFilteredContacts.map(contact => {
            return <Contact key={contact.id} {...contact} />;
          })}
        </div>
      </ul>
    </>
  );
};

export default ContactList;