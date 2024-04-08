import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    console.log(e.target.value);
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
