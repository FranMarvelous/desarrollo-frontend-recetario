const emailInput = document.getElementById('email');

const {app} = require("./firebase");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
module.exports = async (request, response) => {
    const {email, contrasena} = request.body;

    try {
        const usuario = await signInWithEmailAndPassword(getAuth(), email, contrasena);
        return {usuario};
    }catch (error){
       switch(error.code){
        case "auth/invalid-email":
        case "auth/user-not-found":
        case "auth/wrong-password":
            return response.code(401).send({
               codigo: error.code,
               mensaje: error.message 
            });
        default:
            response.code(500).send({
                codigo: error.code,
                mensaje: error.message 
             });
       } 
    }
};

/* validación formato mail correcto*/
const emailValidator = (element) => {
  element.addEventListener('change', () => {
      const inputValue = element.value;
      const testRegex = /\S+@\S+\.[a-zA-Z]{2,}$/i;
      const condicion = testRegex.test(inputValue);
      let style;
      
      if(condicion) {
          style = 'border: solid 2px green';
      } else {
          style = 'border: solid 2px red';
          alert('Caracteres no permitidos para email.');
      }
      element.setAttribute('style', style)
  })
}
emailValidator(emailInput);