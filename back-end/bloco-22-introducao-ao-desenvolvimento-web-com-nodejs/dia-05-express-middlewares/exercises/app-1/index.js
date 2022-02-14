const express = require("express");
const cors = require("cors");

const  PORT = 3005;

const app = express();
app.use(cors());
app.use(express.json());

const validateUser = (req, res, next) => {
  const { user } = req.body;
  return (!user || user.length < 3)
  ? res.status(400).json({message: 'invalid data'})
  : next();
}

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const objMessage = req.url.split('/')[2] === 'register'
    ? { message: 'invalid data' }
    : { message: 'email or password is incorrect' };
  return (!email || !regex.test(email))
  ? res.status(400).json(objMessage)
  : next();
}

const validatePasswd = (req, res, next) => {
  const { password } = req.body;
  const objMessage = req.url.split('/')[2] === 'register'
  ? { message: 'invalid data' }
  : { message: 'email or password is incorrect' };
  pwdArray = Math.abs(password)
    .toString(10).split('').map((item) => Number(item));
  const hasInvalidItem = pwdArray.some((el) => isNaN(el));
  return (!password 
    || !(pwdArray.length >= 4 && pwdArray.length <= 8)
    || hasInvalidItem)
  ? res.status(400).json(objMessage)
  : next();
}

app.post('/user/register', validateUser, validateEmail, 
  validatePasswd, (_req, res) => {
  return res.status(201).json({ message: 'user created' });
});

app.post('/user/login', validateEmail, validatePasswd,
(req, res) => {
  const token = Array(12).fill('')
    .map((_el) => (Math.floor(Math.random() * 17)).toString(16))
    .join('');
  console.log(token)
  return res.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log(`App escutando na porta ${ PORT }`);
});
