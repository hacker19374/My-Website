function startProt() {
  var protien = localStorage.getItem("protien");
  var protienStrand = localStorage.getItem("protienStrand");
  var protiens = rnaValue;
  var currentP = "";
  var pS = [];
  var names = [];
  var num = 1;
  

  for (var i = 0; i <= protiens.length; i++) {
    
    if (num == 4) {
      num = 1;
      //alert(currentP);
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
  }
  
  localStorage.setItem("pS", pS);
  for (var a = 0; a <= pS.length; a++) {
    
    
    //All of the protiens that start with U
    
    if(pS[a] == "uuu" || pS[a] == "uuc") {
      names.push("Phe");
    }
    if(pS[a] == "uua" || pS[a] == "uug") {
      names.push("Leu");
    }
    if(pS[a] == "ucu" || pS[a] == "ucc" || pS[a] == "uca" || pS[a] == "ucg") {
      names.push("Ser");
    }
    if(pS[a] == "uau" || pS[a] == "uac") {
      names.push("Tyr");
    }
    if(pS[a] == "uaa" || pS[a] == "uag" || pS[a] == "uga") {
      names.push("Stop");
    }
    if(pS[a] == "ugu" || pS[a] == "ugc") {
      names.push("Cys");
    }
    if(pS[a] == "ugg") {
      names.push("Phe");
    }
    
    
    //All of the proteins that start with C
    
    if(pS[a] == "cuu" || pS[a] == "cuc" || pS[a] == "cua" || pS[a] == "cug") {
      names.push("Leu");
    }
    if(pS[a] == "ccu" || pS[a] == "ccc" || pS[a] == "cca" || pS[a] == "ccg") {
      names.push("Pro");
    }
    if(pS[a] == "cau" || pS[a] == "cac") {
      names.push("His");
    }
    if(pS[a] == "caa" || pS[a] == "cag") {
      names.push("Gln");
    }
    if(pS[a] == "cgu" || pS[a] == "cgc" || pS[a] == "cga" || pS[a] == "cgg") {
      names.push("Arg");
    }
    
    
    //All of the proteins that start with A
    
    if(pS[a] == "auu" || pS[a] == "auc" || pS[a] == "aua") {
      names.push("Ile");
    }
    if(pS[a] == "aug") {
      names.push("Met");
    }
    if(pS[a] == "acu" || pS[a] == "acc" || pS[a] == "aca" || pS[a] == "acg") {
      names.push("Thr");
    }
    if(pS[a] == "aau" || pS[a] == "aac") {
      names.push("Asn");
    }
    if(pS[a] == "aaa" || pS[a] == "aag") {
      names.push("Lys");
    }
    if(pS[a] == "agu" || pS[a] == "agc") {
      names.push("Ser");
    }
    if(pS[a] == "aga" || pS[a] == "agg") {
      names.push("Arg");
    }
    
    
    //All of the proteins that start with G
    
    if(pS[a] == "guu" || pS[a] == "guc" || pS[a] == "gua" || pS[a] == "gug") {
      names.push("Val");
    }
    if(pS[a] == "gcu" || pS[a] == "gcc" || pS[a] == "gca" || pS[a] == "gcg") {
      names.push("Ala");
    }
    if(pS[a] == "gau" || pS[a] == "gac") {
      names.push("Asp");
    }
    if(pS[a] == "gaa" || pS[a] == "gag") {
      names.push("Lys");
    }
    if(pS[a] == "ggu" || pS[a] == "ggc" || pS[a] == "gga" || pS[a] == "ggg") {
      names.push("Gly");
    }
    
  }
  document.getElementById("protiens").innerHTML = names;
}


