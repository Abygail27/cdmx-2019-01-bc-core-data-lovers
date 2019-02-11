const botonInfo = document.getElementById('informate'); //boton para entrar a la pagína donde se generar la filtración y se mostra la data 
const welcomePage = document.getElementById('welcomePage');
const pageForData = document.getElementById('info');

const pagesjumps = document.getElementById('commits' , 'impact')//constantes para brincar a la section que se utiliza como una pagina
const selectOption = document.getElementById('country-filter');
let content = document.getElementById('show-content');
const indicators = document.getElementById('indicator');

document.getElementById('informate').addEventListener ('click' , ( ) => { 
welcomePage.style.display = 'none';
pageForData.style.display = 'block';  

jumpto(anchor)(); {
window.location.href = "#"+anchor;
}
});

const mex = WORLDBANK.MEX.indicators; 
const chl = WORLDBANK.CHL.indicators; 
const bra = WORLDBANK.BRA.indicators; 
const per = WORLDBANK.PER.indicators; 

countries.addEventListener('change', () => { //Impresión Database para cada país
  let enclick = selectorPais.value;
  if (enclick === 'countries') {
    dataGlobal.forEach(element => {
      
   });
    console.log(dataMEX[15].data)
    for (const año in años) {
      if (años.hasOwnProperty(año)) {
        let element = años[año];
        element = parseFloat(element)
        console.log(  parseInt(element)) 
        if (element > 0) {
        console.log(element)
       }
     }
    }

  }

});
