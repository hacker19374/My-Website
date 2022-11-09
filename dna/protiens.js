function startProt() {
  var protien = localStorage.getItem("protien");
  var protienStrand = localStorage.getItem("protienStrand");
  var protiens = localStorage.getItem("protiens");
  var currentP = "";
  var pS = [];
  var num = 1;
  

  for (var i = 0; i <= (protiens.length - (protiens.length / 4)); i++) {
    
    if (num == 4) {
      num = 1;
      alert(currentP);
      pS.push(currentP);
      currentP = "";
    }
    
    
    if (protiens[i] != ",") {
      currentP += protiens[i];
      console.log(currentP);
    }
    if (protiens[i] == ",") {
      i++;
      currentP += protiens[i];
      console.log(currentP);
    }
    
    num++;
    
    //alert(i);
  }
  
  localStorage.setItem("pS", pS);
  for (var a = 0; a <= pS.length; a++) {
    if(pS[a] == "uga") {
      alert("it is UGA");
    }
  }
}


