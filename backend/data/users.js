import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@test2.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John Doe',
    email: 'john@doe.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@doe.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
