import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home page',
    private: false,
  },
  {
    id: nanoid(),
    to: '/phonebook',
    text: 'Phonebook',
    private: true,
  },
];

export default menuItems;
