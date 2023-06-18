const { readFileSync } = require('fs');

module.exports = class Repositorio {
  constructor() {
    this.pecas = JSON.parse(readFileSync('./pecas.json'));
  }

  getPeca(apre) {
    // console.log(this.pecas[apre.id])
    return this.pecas[apre.id];
  }
}