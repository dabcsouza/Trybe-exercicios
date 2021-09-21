test('Não deveria passar', (done) => {
  setTimeout(() => {
    try {
      expect(2).toBe(10);
      console.log('Deveria ter falhado');
      done();
    } catch(err) {
      done(err);
    }
  }, 500);
})