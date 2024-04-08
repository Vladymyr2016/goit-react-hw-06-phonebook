import React from 'react';

import { useForm } from 'react-hook-form';
import s from './FormInput.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';

const FormInput = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const submit = ({ title, number }) => {
    console.log(title);
    const newContact = {
      id: nanoid(),
      title,
      number,
      completed: false,
    };
    dispatch(addContact(newContact));
    console.log(newContact);
    reset();
  };

  return (
    <div className={s.formInput}>
      <form onSubmit={handleSubmit(submit)}>
        <p className={s.name}>Name</p>
        <input
          type="text"
          {...register('title', { required: true })}
          name="title"
        />

        <p className={s.name}>Number</p>
        <input
          type="tel"
          {...register('number', { required: true })}
          name="number"
        />
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default FormInput;
