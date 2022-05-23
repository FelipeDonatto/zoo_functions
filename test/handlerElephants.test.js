const handlerElephants = require('../src/handlerElephants');
const { species } = require('../data/zoo_data');

describe('Testes da função HandlerElephants', () => {
  it('caso o paremetro receba count retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('caso o parametro receba names possua Jefferson', () => {
    expect(handlerElephants('names').some((element) => element === 'Jefferson')).toBeTruthy();
  });
  it('pametro averageAge retorna numero proximo de 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('parametro diferente retorna null', () => {
    expect(handlerElephants('a')).toBeNull();
  });
  it('parametro nulo retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('parametro diferente de string retorna parametro invalido', () => {
    const error = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(20)).toBe(error);
    expect(handlerElephants(-5)).toBe(error);
    expect(handlerElephants(true)).toBe(error);
  });
  it('', () => {
    const elephants = species.find((specie) => specie.name === 'elephants');
    elephants.count = 4;
    expect(handlerElephants('count', elephants)).toBe(4);
  });
});
