import express from 'express';

const endpoints = express();

endpoints.get('/calculadora/somar/:n1/:n2', (req, resp) => { //endpoind ":"- como se fosse uma variavel
    let numero1 = Number(req.query.num1);
    let numero2 = Number(req.query.num2);

    let s = numero1 - numero2;

    resp.send({
        subtracao: s
    })

})

//parametro query - pode passar parametro ou não
endpoints.get('/calculadora/subtrair', (req, resp) => { //endpoind ":"- como se fosse uma variavel
    let numero1 = Number(req.query.num1);
    let numero2 = Number(req.query.num2);
    
    let s = numero1 - numero2;
    
    resp.send({
        subtracao: s
    })

})

export default endpoints;
