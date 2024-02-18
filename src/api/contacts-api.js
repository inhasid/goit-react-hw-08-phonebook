import axios from 'axios';

import authInstance from './auth-api';
export const requestContacts = async () => {
  const { data } = await authInstance.get('/contacts');
  return data;
};
export const requestAddContact = async newContact => {
  const { data } = await authInstance.post('/contacts', newContact);
  return data;
};
export const requestDeleteContact = async contactId => {
  const { data } = await authInstance.delete(`/contacts/${contactId}`);
  return data;
};
