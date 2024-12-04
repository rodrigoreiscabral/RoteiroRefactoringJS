const { readFileSync } = require('fs');
const Repositorio = require("./repositorio.js");
const ServicoCalculoFatura = require("./servico.js");
const gerarFaturaStr = require("./apresentacao.js");

// main
const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);
