require('../src/data.js');
require('../src/data/worldbank/worldbank.js')


describe('dataBank', () => {
  it('dataBank debería ser un objeto', () => {
    expect(typeof dataBank).toBe('object');
  })
})

describe('dataBank.MEX', () => {
  it('MEX debería ser un objeto', ()=>{
    expect(typeof dataBank).toBe('object');
  })
})




describe('filterCountry',()=>{
  it('filter debería ser una función',()=>{
    expect(typeof window.dataBank.filter).toBe('function');
  });
  it('Debería devolver MEX al elegir MEX',()=>{
expect(window.dataBank.filter(window.dataBank,"MEX")).toEqual("MEX")
    } );
});

describe('filterIndicator',()=>{
  it('filterEdu debería ser una función',()=>{
    expect(typeof window.dataBank.filterEdu).toBe('function');
  })
})
