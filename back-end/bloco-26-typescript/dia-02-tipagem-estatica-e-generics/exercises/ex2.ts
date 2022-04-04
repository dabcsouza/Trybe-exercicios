interface Ipizza {
  flavor: string,
  slices: 4 | 6 | 8,
};

const pizzaCalabreza: Ipizza = {
  flavor: 'Calabreza',
  slices: 8,
};

const pizzaMarguerita: Ipizza = {
  flavor: 'Marguerita',
  slices: 6,
};

const pizzaNutela: Ipizza = {
  flavor: 'Nutela',
  slices: 4,
};

type commonPizzaFlavor = {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni'
};

type commonPizzaSlices = {
  slices: 4 | 6 | 8,
};

interface IpizzaCommon extends Ipizza {
  type: 'common',
  flavor: commonPizzaFlavor,
  slices: commonPizzaSlices,
}
