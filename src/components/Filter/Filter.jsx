import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const submit = ({ title }) => {
    console.log(title);

    dispatch(filterContact(title));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <p>find contacts by name</p>
      <input
        type="text"
        {...register('title', { required: true })}
        name="filterTitle"
      />
      <button type="submit">Filter contact</button>
    </form>
  );
};

export default Filter;
