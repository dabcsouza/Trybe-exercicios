import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';



// describe('Teste requisição a API de piadas', () => {
//   afterEach(() => jest.clearAllMocks());

//   it('Testar chamada a API', async () => {
//     const joke = {
//       id: '7h3oGtrOfxc',
//       joke: 'Whiteboards ... are remarkable.',
//       status: 200,
//     };
  
//     jest.spyOn(global, 'fetch');
//     global.fetch.mockResolvedValue({
//       json: jest.fn().mockResolvedValue(joke),
//     });
  
//     render(<App />);
//     const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//     expect(renderedJoke).toBeInTheDocument();
//     expect(global.fetch).toBeCalledTimes(1);
//     expect(global.fetch).toBeCalledWith(
//       'https://icanhazdadjoke.com/',
//       { headers: { Accept: 'application/json' } },
//     );
//   });
// });

describe('testes inputs', () => {
  it('alterando o valor dos campos e testando o valor guardado', () => {
    render(<App />);
    const inputNome = screen.getByRole('textbox', { name: /nome/i });
    expect(inputNome).toBeInTheDocument();
    expect(inputNome).toHaveValue('');
    userEvent.type(inputNome, 'Estudante da Trybe');
    expect(inputNome).toHaveValue('Estudante da Trybe');

    const inputEmail = screen.getByRole('textbox', { name: /email/i });
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, 'estudante@trybe.com');
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  });
});