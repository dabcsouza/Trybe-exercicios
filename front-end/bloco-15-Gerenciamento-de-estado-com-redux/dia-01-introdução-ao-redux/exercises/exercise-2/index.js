const firstNameEl = document.getElementById('nome-1');
const secoundNameEl = document.getElementById('nome-2');
const firstLastNameEl = document.getElementById('sobrenome-1');
const secoundLastNameEl = document.getElementById('sobrenome-2');
const ESTADO_INICIAL_1 = {
  nome: "Rodrigo",
  sobrenome: "Santos da Silva",
  endereco: "Rua Soldado Mathias, 765",
  cidade: "Belo Horizonte",
};

const ESTADO_INICIAL_2 = {
  nome: "Bruna",
  sobrenome: "Santana Oliveira",
  endereco: "Rua Holanda, 332",
  cidade: "São Paulo",
};

const CHANGE_NAME = "CHANGE_NAME";
const CHANGE_LASTNAME = "CHANGE_LASTNAME";

const changeName = (name, number) => ({
  type: CHANGE_NAME + number,
  name,
});

const changeLastName = (lastName, number) => ({
  type: CHANGE_LASTNAME + number,
  lastName,
});

const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
  switch (action.type) {
    case CHANGE_NAME + 1:
      return {
        ...state,
        nome: action.name,
      };
    case CHANGE_LASTNAME + 1:
      return {
        ...state,
        sobrenome: action.lastName,
      };
    default:
      return state;
  }
};

const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
  switch (action.type) {
    case CHANGE_NAME + 2:
      return {
        ...state,
        nome: action.name,
      };
    case CHANGE_LASTNAME + 2:
      return {
        ...state,
        sobrenome: action.lastName,
      };
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  meuPrimeiroReducer,
  meuSegundoReducer,
});

const store = Redux.createStore(rootReducer);

window.onload = () => {
  setTimeout(() => {
    store.dispatch(changeName('David', 1));
    store.dispatch(changeLastName('Souza', 1));
    store.dispatch(changeName('Ana Caroline', 2));
    store.dispatch(changeLastName('Souza', 2));
  }, 5000);
  store.subscribe(() => {
    const firstRed = store.getState().meuPrimeiroReducer;
    const secoundRed = store.getState().meuSegundoReducer;
    firstNameEl.innerText = firstRed.nome;
    firstLastNameEl.innerText = firstRed.sobrenome;
    secoundNameEl.innerText = secoundRed.nome;
    secoundLastNameEl.innerText = secoundRed.sobrenome;
  })
};
