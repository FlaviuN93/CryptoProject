import bcrypt from 'bcryptjs';

const users = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@test2.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@doe.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    id: '3',
    name: 'Jane Doe',
    email: 'jane@doe.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
