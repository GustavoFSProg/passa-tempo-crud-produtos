export default class Moeda {
  static formatar(valor, localizacao = "pt-BR", moeda = "BRL") {
    return (valor ?? 0).toLocaleString(localizacao, {
      style: "currency",
      currency: moeda,
    });
  }
}
