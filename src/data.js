
window.dataBank = {
  filter: (indicators, countryfilter) => {
   
     indicators.forEach(indicator => {

      let indicatorName = indicator.indicatorName;
      let vare = new RegExp(/educación/i)
      if (indicatorName.match(vare) != null) {
        return countryfilter
      }
    })

  }
}
