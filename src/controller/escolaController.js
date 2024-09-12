import validarTabuada from "../validation/escola/validarTabuada.js"
import calcularTabuada from "../service/escola/calculadoraTabuada.js"

//parametro de corpo. Consigo passar informações complexas, como um JSON, vetores, objetos. não pode passar parametro de corpo com get, utilizasse post
//deve-se habilitar o parametro de corpo
servidor.post('/escola/media', (req, resp) => {
    try {
        let notas = req.body;

        let m = (notas.nota1 + notas.nota2 + notas.nota3) / 3;

        let s = '';
        if (m >= 6) {
            s = 'Aprovado';
        }
        else {
            s = 'DP';
        }

        resp.send({
            media: m,
            situacao: s
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: 'Ocorreu um erro. Verifique os parâmetros.'
        })
    }  
})

//
servidor.post('escola/tabuada/:numero', (req, resp) => {

    try {
        
        validarTabuada(req);

        let numero = Number(req.query.numero);
    
        let tabuada = calcularTabuada(numero);
        resp.send(tabuada)
    }
    //tratamento de erro
    catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})