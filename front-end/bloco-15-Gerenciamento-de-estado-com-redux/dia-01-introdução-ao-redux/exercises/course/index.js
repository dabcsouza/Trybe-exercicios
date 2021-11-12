const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const randomButton = document.getElementById("random");
const square = document.getElementById("square");
const value = document.getElementById("value");
const ESTADO_INICIAL = {
  colors: ["white", "black", "red", "green", "blue", "yellow"],
  index: 0,
};

const generateColor = () => {
  const oneChar = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let color = "#";
  const random = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    color += oneChar[random()];
  }
  return color;
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "NEXT_COLOR":
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case "PREVIOUS_COLOR":
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    case "RANDOM_COLOR":
      return {
        ...state,
        colors: [...state.colors, generateColor()],
        index: state.colors.length,
      };
    default:
      return state;
  }
};
const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const handleClick = ({ target: { id } }) => {
  store.dispatch({
    type: `${id.toUpperCase()}_COLOR`,
  });
};
window.onload = () => {
  previousButton.addEventListener("click", handleClick);
  nextButton.addEventListener("click", handleClick);
  randomButton.addEventListener("click", handleClick);
};
store.subscribe(() => {
  const { index, colors } = store.getState();
  square.style.backgroundColor = colors[index];
  value.innerText = colors[index];
});
