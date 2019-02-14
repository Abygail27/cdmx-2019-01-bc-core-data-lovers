 const welcomePage = document.getElementById('welcomePage');
 const dataBank = window.WORLDBANK;
 const countryfilter = document.getElementById('countryfilter');
 const indicadoresHTML = document.getElementById('indicadores')

document.getElementById('informate').addEventListener('click', () => {
  welcomePage.style.display = 'none';

});



//se trasladó al documento data.js
/*const filterCountryIndicator = () => {
  let select = selectOption.value; //value "MEX", "PER","BRA","CHL"
  const country = window.filterCountry(select);
  objectKey(country);
}*/

//esta función es filter en data.js
document.getElementById('countryfilter').addEventListener('change', () => {
  let enclick = countryfilter.value;
  let dataMostrar = dataBank[enclick]
  let indicators = dataMostrar.indicators;

  //función para los indicadores,buscador de EDUCACIÓN También está en data.js
  indicators.forEach(indicator => {
    let indicatorName = indicator.indicatorName;
    let vare = new RegExp(/educación/i)
    if (indicatorName.match(vare) != null) {
      indicadoresHTML.insertAdjacentHTML("beforeend", `<option value="indicadores">${indicatorName}</option>`)
    }
  })

});

