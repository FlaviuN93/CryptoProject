const fs = require('fs');

const users = JSON.parse(fs.readFileSync(`${__dirname}/data/users.json`));

exports.login = (req, res) => {
  const { email, password } = req.body;

  const identifiedUser = users.find((user) => user.email === email);

  if (!identifiedUser || identifiedUser.password !== password) {
    return res.status(401).json({
      status: 'Fail',
      message: 'Invalid Credentials',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      user: identifiedUser,
    },
  });
};

exports.signup = (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const hasUser = users.find((user) => user.email === email);

  if (hasUser) {
    return res.status(401).json({
      status: 'fail',
      message: 'Could not create user. Email already exists',
    });
  }
  if (password !== confirmPassword) {
    return res.status(401).json({
      status: 'fail',
      message: 'Invalid passwords',
    });
  }
  const newId = users[users.length - 1].id + 1;

  const createUser = {
    id: newId,
    name: name,
    email: email,
    password: password,
  };

  const newUser = Object.assign(createUser);

  users.push(newUser);

  fs.writeFile(
    `${__dirname}/data/users.json`,
    JSON.stringify(users),
    (err) => {}
  );
  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
};

//////////////////////////////////////////////////////////////////////////////

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
