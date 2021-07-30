import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
const app = express();
app.use(express.json());

const crypto = JSON.parse(
  fs.readFileSync(new URL('./data/crypto.json', import.meta.url))
);
const users = JSON.parse(
  fs.readFileSync(new URL('./data/users.json', import.meta.url))
);

const getAllCrypto = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: crypto.length,
    data: {
      crypto,
    },
  });
};

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
};

const getUserById = (req, res) => {
  const id = req.params.id * 1;
  const user = users.find((user) => user.id === id);

  if (id > users.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
};
const createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);
  users.push(newUser);
  fs.writeFile(
    new URL('./data/users.json', import.meta.url),
    JSON.stringify(users),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          user: newUser,
        },
      });
    }
  );
};

const updateUser = (req, res) => {
  const id = req.params.id * 1;
  if (id > users.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }
  res.status(200).json({
    status: 'success',
    data: {
      user: '<Updated user here...>',
    },
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id * 1;
  if (id > users.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'invalid id',
    });
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

// app.get('/api/v1/crypto', getAllCrypto);
// app.get('/api/v1/users', getAllUsers);
// app.get('/api/v1/users/:id', getUserById);
// app.post('/api/v1/users', createUser);
// app.patch('/api/v1/users/:id', updateUser);
// app.delete('/api/v1/users/:id', deleteUser);

app.route('/api/v1/crypto').get(getAllCrypto);
app.route('/api/v1/users').get(getAllUsers).post(createUser);
app
  .route('/api/v1/users/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
