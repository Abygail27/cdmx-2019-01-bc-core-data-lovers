 const welcomePage = document.getElementById('welcomePage');
 const dataBank = window.WORLDBANK;
 const countryfilter = document.getElementById('countryfilter');
 const indicadoresHTML = document.getElementById('indicadores')

document.getElementById('informate').addEventListener('click', () => {
  welcomePage.style.display = 'none';

});
document.getElementById('countryfilter').addEventListener('change', () => { 
  let enclick = countryfilter.value;
  let dataMostrar = dataBank[enclick]
  let indicators = dataMostrar.indicators;
window.dataBank.filter(enclick,dataMostrar,indicators)

});

