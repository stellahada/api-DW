import { Express } from "express";

const servidor = express();

servidor.get('/calculadora/somar/:n1/n2', (req, resp) => {
    let numero1 = Number(req.parms.n1);
    let numero2 = Number(req.parms.n2);
    
    let soma = numero1 + numero2;
    
    resp.send('a soma é' + soma);
    })
    
servidor.listen(5010, () => console.log('Api subiu na porta 5010'));