const botonInfo = document.getElementById('informate'); //boton para entrar a la pagína donde se generar la filtración y se mostra la data 
const welcomePage = document.getElementById('welcomePage');
const pageForData = document.getElementById('info');
const dataBank = window.WORLDBANK;
const pagesjumps = document.getElementById('commits', 'impact') //constantes para brincar a la section que se utiliza como una pagina
const selectOption = document.getElementById('countryfilter');
let content = document.getElementById('show-content');
const indicators = document.getElementById('indicator');
const indicadoresHTML = document.getElementById('indicadores')

document.getElementById('informate').addEventListener('click', () => {
  welcomePage.style.display = 'none';
  pageForData.style.display = 'block';

  jumpto(anchor)(); {
    window.location.href = "#" + anchor;
  }
});

document.getElementById('countryfilter').addEventListener('change', () => { //Impresión Database para cada país
  let enclick = countryfilter.value;
  console.log (enclick);
  let dataMostrar = dataBank[enclick]
  let indicators = dataMostrar.indicators;
  indicators.forEach(indicator => {
    let indicatorName = indicator.indicatorName;
    let topic = new RegExp(/educación/i)
    if(indicatorName.match(topic) != null){
      indicadoresHTML.insertAdjacentHTML("beforeend", `<option value="indicadores">${indicatorName}</option>`)
  }
})

  
    
  
  /*dataGlobal.forEach(() => {

    console.log(dataMEX[15].data)

  });
    //console.log(dataMEX[15].data)
    /*for (const año in años) {
      if (años.hasOwnProperty(año)) {
        let element = años[año];
        element = parseFloat(element)
        console.log(parseInt(element))
        if (element > 0) {
          console.log(element)
        }
      }
    }*/
})
