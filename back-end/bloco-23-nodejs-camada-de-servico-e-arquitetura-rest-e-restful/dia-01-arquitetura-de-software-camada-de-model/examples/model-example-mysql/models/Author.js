const connection = require('./connection');

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors;');
  return authors.map(serialize);
};

const getNewAuthor = ({ id, firstName, middleName, lastName}) => {
  const fullName = [ firstName, middleName, lastName]
    .filter(name => name).join(' ');
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  }
};

const getById = async (id) => {
  const [author] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?;', [id]);
  console.log(author);
  if (!author || author.length === 0) return null
  const [{ firstName, middleName, lastName }] = author.map(serialize);
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName
  });
};

module.exports = { getAll, getById };