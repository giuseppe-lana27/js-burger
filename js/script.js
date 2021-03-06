// dichiarazione delle variabili
var burgerName = document.getElementById("burger-name");
var ingredients = document.getElementsByClassName("add-ingredient");
var calculate = document.getElementById("calculate");
var coupons = ["peppe20", "burgertime", "toohungry", "sconto"];
var coupon = document.getElementById("coupon");
var total = document.getElementById("total");
//1. evento al click bottone calculate
calculate.addEventListener("click",
  function() {
    // 2. inserimento nome panino
    if ( burgerName.value != "" ){
      // 3. controllo ingredienti inseriti e calcolo somma
      var sum = 50;      
      for (var i = 0; i < ingredients.length; i++){
        if (ingredients[i].checked == true){
          sum += parseInt(ingredients[i].value);
        }
      }
      // 4. calcolo dell'eventuale sconto
      if (coupons.includes(coupon.value) == true){
        sum -= sum * 0.2;
      }
      // 5. stampo il totale da pagare
      total.innerHTML = sum.toFixed(2) +"€";
    } else{
      alert("Inserisci nome panino");
    }
  }
);
