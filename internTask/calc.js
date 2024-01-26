function calc() {
  var v = parseInt(document.querySelector("#volt").value);
  var c = parseFloat(document.querySelector("#cur").value);
  var r = parseFloat(document.querySelector("#cRate").value);

  var afr = r / 100;
  var hourA = [];
  var energyA = [];
  var totalA = []; 



  for (var h = 1; h <= 9; h++) { // Loop for 9 hours
    
    var power = v * c;
    var energy = power * h / 1000;
    var total = energy * afr;
    hourA.push(h);
    energyA.push(energy);
    totalA.push(total);
  }

 
  document.querySelector('#result').innerHTML = hourA[0] + ',' + energyA[0] + ',' + totalA[0];

 
  var table = '<br><table align = "center"><thead><tr><th>Num</th><th>Hour</th><th>Energy(kWh)</th><th>Total(RM)</th></tr></thead><tbody>';
  //buat loop
  for (var i = 0; i < hourA.length; i++) {
    table += '<tr><td>' + (i + 1) + '</td><td>' + hourA[i] + '</td><td>' + energyA[i].toFixed(5) + '</td><td>' + totalA[i].toFixed(2) + '</td></tr>';
  }

  table += '</tbody></table>';
  document.querySelector('#result').innerHTML = table;
}