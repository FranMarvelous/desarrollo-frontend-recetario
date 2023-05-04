const { admin } = require('./firebase');

module.exports = async (req, res) => {    
    try {
        const headerAutorizacion = req.headers.authorization;
        const token = headerAutorizacion.split(' ')[1];        
        const usuario = await admin.auth().verifyIdToken(token);        
        return {token: 'valido'};
    } catch (error) {
        res.code(401).send({token: 'inválido', error: error.message});
    }
};