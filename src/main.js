let WORLDBANK; 
const dataWorldbank = window.WORLDBANK; 
const selectForCountries = document.getElementsByClassName("country");
const selectIndicator = document.getElementById("indicators");





const addingTheCountryEvent = () => { 
  let countries = event.target.value;
  let theResultShouldBe = window.WorldBank.dataShownForCountries(dataWorldbank,countries);    
  printData(theResultShouldBe, countries);
}
const printData = (theResultShouldBe, countries) => {
  let filteringData = theResultShouldBe.filter(indicator => {
      let printIndicatorName = indicator.indicatorName;
      let theRegExpWord = /educación/i;
      let wordMatching = printIndicatorName.match(theRegExpWord);
      if (wordMatching !== null) { 
        let indicatorOption = `<option value="${printIndicatorName}" >${printIndicatorName}</option>`;
        selectIndicator.insertAdjacentHTML("beforeend", indicatorOption);
        return wordMatching;
      }
    });
  } 
  for (let i = 0; i < selectForCountries.length; i++) {
    selectForCountries[i].addEventListener('change', addingTheCountryEvent); 
  }
 
         
