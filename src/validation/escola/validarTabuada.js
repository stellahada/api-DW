export default function validarTabuada(req){

    //tratamento de números nulos
    if (!req.query.numero) {
        throw new Error('Parâmetro query[numero] não informado.')
    }

    //tratamento de erro caso não seja um número.
    if (isNaN(req.query.numero)) {
        throw new Error('Parâmetro query[numero] precisa estar no formato Number')
    }
}