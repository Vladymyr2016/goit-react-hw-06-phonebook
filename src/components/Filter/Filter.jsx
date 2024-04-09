import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    dispatch(filterContact(e.target.value));
  };
  return (
    <form>
      <p>find contacts by name</p>
      <input onInput={submit} type="text" name="filterTitle" />
    </form>
  );
};

export default Filter;
