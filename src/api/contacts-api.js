import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65ca69693b05d29307e045d1.mockapi.io/api/contacts',
});

export const requestContacts = async () => {
  const { data } = await contactsInstance.get(`/`);
  return data;
};

export const requestAddContact = async newContact => {
  const { data } = await contactsInstance.post(`/`, newContact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await contactsInstance.delete(`/${contactId}`);
  return data;
};
