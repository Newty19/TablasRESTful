const express = require('express');

function index(req, res, next) {
    let num1 = parseInt(req.params.n1);
    let num2 = parseInt(req.params.n2);
    var suma = num1 + num2;
    res.send(`El resultado de la suma es: ${suma}`);
}

function create(req, res, next) {
    let n1 = parseInt(req.body.n1);
    let n2 = parseInt(req.body.n2);
    let multi = n1 * n2;
    res.send(`El resultado de la multiplicacion es: ${multi}`);
}

function replace(req, res, next) {
    let n1 = parseInt(req.body.n1);
    let n2 = parseInt(req.body.n2);
    let div = n1 / n2;  
    res.send(`El resultado de la division es: ${div}`);
}

function update(req, res, next) {
    let n1 = parseInt(req.body.n1);
    let n2 = parseInt(req.body.n2);
    let nPower = Math.pow(n1,n2);
    res.send(`El resultado de la potencia es: ${nPower}`);
}

function destroy(req, res, next) {
    let num1 = parseInt(req.params.n1);
    let num2 = parseInt(req.params.n2);
    var resta = num1 - num2;
    res.send(`El resultado de la resta es: ${resta}`);
}

module.exports = { 
    index,
    create,
    replace,
    update,
    destroy
};