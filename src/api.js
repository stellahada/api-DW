import express from 'express';

const servidor = express();
servidor.use(express.json()); //habilita o body



    
servidor.listen(5010, () => console.log('Api subiu na porta 5010'));