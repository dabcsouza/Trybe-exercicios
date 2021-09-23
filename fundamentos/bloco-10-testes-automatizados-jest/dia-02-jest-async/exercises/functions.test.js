const getRepos = require("./getRepos");
const { getUserName } = require("./searchUser");
const uppercase = require("./uppercase")

test('Verifica erro em função assincrona com callback', (done) => {
  uppercase('david', (textUp) => {
    try {
      expect(textUp).toBe('DAVID');
      done();
    } catch (error) {
      done(error);
    }
  });
});

describe('Testa o resultado da chamada a função getUserName.', () => {
  it('Testa o resolve da função (quando o user existe)', () => (
    getUserName(1).then((user) => {
      expect(user).toBe('Mark');
    })
  ));
  it('Testa o reject da função (quando user não existe).', () => {
    expect.assertions(1);
    return getUserName(5).catch((error) => (
      expect(error.message).toMatch(/ not found./)
    ));
  });
});

describe('Tentativa de resolver o problema usando o async await.', () =>{
  describe('Testa a função getUserName por id caso: ', () => {
    it('Existir o id passado como parâmetro', async () => {
      return await expect(getUserName(1)).resolves.toBe('Mark');
    });
    it('Não existir o id passado como parâmetro.', async () => {
      expect.assertions(1);
      await expect(getUserName(5)).rejects.toEqual(new Error('User with 5 not found.'))
    });
  });
});

describe('Verifica a existência de diretórios nos repositórios github da trybe.', () => {
  it('Verifica que existe o repositório sd-01-week4-5-project-todo-list', async () => {
    const repoName = 'sd-01-week4-5-project-todo-list';
    const allRepos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(allRepos.some((rep) => rep === repoName)).toBeTruthy();
  });
  it('Verifica que existe o repositório sd-01-week4-5-project-meme-generator', async () => {
    const repoName = 'sd-01-week4-5-project-meme-generator';
    const allRepos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(allRepos.some((rep) => rep === repoName)).toBeTruthy();
  });
});