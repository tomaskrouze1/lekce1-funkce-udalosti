// tady je místo pro náš program


let zobrazenyVysledek = false
function zobrazVysledek() {
  if( zobrazenyVysledek == false){
    document.querySelector("#vysledek").innerHTML = secti(4, 5);
    zobrazenyVysledek = true
  }else{
    document.querySelector("#vysledek").innerHTML = "";
    zobrazenyVysledek = false
  }
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!")
  let ctverecek = document.querySelector(".ctverecek");
  ctverecek.innerHTML = "Gratulace!"
}

function zmenBarvu(){
  let ctverecek = document.querySelector(".ctverecek");
  ctverecek.style.backgroundColor = "green"
}