const  selectEstate = document.getElementById('add-state');
const estadosSigla = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
const estadosNomes = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goías", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraíma", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];


for (let i = 0; i < estadosNomes.length; i += 1) {
    const option = document.createElement('option');
    option.value = estadosSigla[i];
    option.innerText = estadosNomes[i];
    if (estadosSigla[i] === 'MG') {
        option.selected = true;
    }
    selectEstate.appendChild(option);
}
