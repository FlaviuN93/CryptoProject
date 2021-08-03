const fs = require('fs');

const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`));

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
};

exports.getUserById = (req, res) => {
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

exports.createUser = (req, res) => {
  const newId = users[users.length - 1].id + 1;
  const newUser = Object.assign({ id: newId }, req.body);
  users.push(newUser);

  fs.writeFile(`${__dirname}/data/users.json`, JSON.stringify(users), (err) => {
    console.log(err.message);
  });
  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
};

exports.updateUser = (req, res) => {
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

exports.deleteUser = (req, res) => {
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
