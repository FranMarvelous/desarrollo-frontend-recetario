const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const telefonoInput = document.getElementById('telefono');

/*validaciones*/
/*nombre sin simbolos*/
const nameValidator = (element) => {
    element.addEventListener('change', () => {
        const inputValue = element.value;
        const testRegex = /^[a-z]+\s?[a-z]?$/gi
        const condicion = testRegex.test(inputValue);
        let style;
        
        if(condicion) {
            style = 'border: solid 2px green';
        } else {
            style = 'border: solid 2px red';
            alert('Caracteres no permitidos para nombre y/o apellido.');
        }
        element.setAttribute('style', style)
    })
}

nameValidator(lastnameInput);
nameValidator(nameInput);

/*formato mail correcto*/
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

/*formato telefono correcto*/

const telefonoValidator = (element) => {
    element.addEventListener('change', () => {
        const inputValue = element.value;
        const testRegex = /^[0-9]+$/;
        const condicion = testRegex.test(inputValue);
        let style;
        
        if(condicion) {
            style = 'border: solid 2px green';
        } else {
            style = 'border: solid 2px red';
            alert('Debe ingresar solo 9 números correspondientes a su teléfono.');
        }
        element.setAttribute('style', style)
    })
}

telefonoValidator(telefonoInput);
