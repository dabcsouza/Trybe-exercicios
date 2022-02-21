const cepService = require('../services/CepService');

const errorCode = {
  400: 'invalidData',
  404: 'Not Found',
};

const handleCepParams = (req, res) => {
  const { cep } = req.params;
  const { code, message } = cepService.isValidCep(cep);
  if (code) {
    return res.status(code).json({ 'code': errorCode[code], message })
  };
};

module.exports = { handleCepParams };
