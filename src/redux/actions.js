import { REMOVE_CONTACT, ADD_CONTACT } from './constants';

export const removeContact = id => ({ type: REMOVE_CONTACT, payload: id });
export const addContact = contact => ({ type: ADD_CONTACT, payload: contact });
