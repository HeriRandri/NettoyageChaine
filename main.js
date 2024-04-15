const rm = (str) => {
  let ponctuation = /[.,\/#!$%?\^&\*;:{}=\-_`~()]/g;
  let resultat = str.split(/\s+/).join(" ").replace(ponctuation, "");
  return resultat;
};

let string =
  " Supp7rimez  les ponctuations3, # espaces et nombres d’une1 phrase donnée.? ";
console.log(rm(string).replace(/[0-9]/g, ""));
