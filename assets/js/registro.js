const emailInput      = document.getElementById('email');
const contrasenaInput = document.getElementById('contrasena');
const password2Input  = document.getElementById('password2');

const {admin} = require('./firebase');

/* validación formato mail correcto*/
const emailValidator = (element) => {
    element.addEventListener('change', () => {
        const inputValue = element.value;
        const testRegex  = /\S+@\S+\.[a-zA-Z]{2,}$/i;
        const condicion  = testRegex.test(inputValue);
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

/*validación misma password*/
password2.addEventListener('change', () => {
    const inputValue = password2.value;
    const condicion  = contrasena.value === inputValue;
    let style;

    if(condicion) {
        style = 'border: solid 2px green';
    } else {
        style = 'border: solid 2px red';
        alert('Las contraseñas no coinciden.')
    }
    password2.setAttribute('style', style)
})

/*--------------------------*/

module.exports = async (req, res) => {
    // Opción 1 de sintaxis
    // const email      = req.body.email;
    // const contrasena = req.body.contrasena;

    //Opción 2 de sintaxis (destructuring)
    const {email, contrasena} = req.body;

    try {
        const usuario = await admin.auth().createUser({
            email: email,
            password: contrasena
        });
        console.dir(usuario);
    return usuario;
    }catch (error){
        res.code(500).send({error:'Ocurrió un error al crear el usuario'});
    }
};


