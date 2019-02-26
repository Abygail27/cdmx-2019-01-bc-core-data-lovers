
window.WorldBank = {
  dataShownForCountries: (data, countries) => { 
    console.log(data)
  let objectsForCountry = data[countries].indicators;
  return objectsForCountry;
  },
  educationalIndicators:(data, matchingTheSelection) =>{ 
    let newDataThatMatchesTheSelection= {};
    data.forEach(objectOfTheData => { 
      if(objectOfTheData.indicatorName === matchingTheSelection){ 
        newDataThatMatchesTheSelection = objectOfTheData.data;
        return newDataThatMatchesTheSelection;
      }
    });
    return newDataThatMatchesTheSelection;
  },
  
  }





