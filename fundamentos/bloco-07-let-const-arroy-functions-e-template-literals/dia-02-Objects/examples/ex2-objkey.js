const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const showObject = ([key,value]) => {
    console.log(`${key}, Nível: ${value}.`)
}

console.log('Estudante 1 \n');
Object.entries(student1).forEach(showObject);
console.log(`

Estudante 2
`);
Object.entries(student2).forEach(showObject);

console.log(student1['Html']);
