const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const userInput = document.getElementById('user');
const password1Input = document.getElementById('password1');
const password2Input = document.getElementById('password2');

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

/*misma password*/
password2.addEventListener('change', () => {
    const inputValue = password2.value;
    const condicion = password1.value === inputValue;
    let style;

    if(condicion) {
        style = 'border: solid 2px green';
    } else {
        style = 'border: solid 2px red';
        alert('Las contraseñas no coinciden.')
    }
    password2.setAttribute('style', style)
})