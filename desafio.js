function partidas(vitorias, derrotas) {
  let result = vitorias - derrotas;
  return result;
}

function ranks() {
  let results = partidas(50, 39);
  let nivel = "";

  if (results <= 10) {
    nivel = "Ferro";
  } else if (results <= 20) {
    nivel = "Bronze";
  } else if (results <= 50) {
    nivel = "Prata";
  } else if (results <= 80) {
    nivel = "Ouro";
  } else if (results <= 90) {
    nivel = "Diamante";
  } else if (results <= 100) {
    nivel = "Lendário";
  } else if (results >= 101) {
    nivel = "Imortal";
  }
  return `O Herói tem saldo de ${results} está no nível ${nivel}`;
}

console.log(ranks());
