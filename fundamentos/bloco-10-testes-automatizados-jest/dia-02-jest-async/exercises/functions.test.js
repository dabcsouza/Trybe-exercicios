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
})