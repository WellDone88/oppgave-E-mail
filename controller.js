function checkMailAndPassword() {
    const email = model.viewState.email;
    const password = model.viewState.password;
    const messageDiv = document.getElementById('Wrong');

    const user = model.data.EmailAndPasswords.find(u => u.email === email && u.password === password);

    if (user) {
        model.viewState.name = user.name;
        model.app.currentPage = 'welcomePage';
        updateView();
    } else {
        logInErrorMessage("Feil e-post eller passord!")
    }
}

function goToRegister() {
    model.viewState.name = '';
    model.viewState.email = '';
    model.viewState.password = '';
    model.app.currentPage = 'registerPage';
    updateView();
}

function goHome() {
    model.viewState.email = '';
    model.viewState.password = '';
    model.app.currentPage = 'homePage';
    updateView();
}

function registerUser() {
    const name = model.viewState.name;
    const email = model.viewState.email;
    const password = model.viewState.password;

    if (!email || !password) {
        logInErrorMessage("Vennligst fyll ut alle feltene.")
    }

    const exists = model.data.EmailAndPasswords.some(u => u.email === email);
    if (exists) {
        logInErrorMessage("Denne e-posten er allerede registrert.")
    }

    model.data.EmailAndPasswords.push({ name, email, password });
    model.viewState.name = '';
    model.viewState.email = '';
    model.viewState.password = '';
    logInErrorMessage( "Bruker opprettet! Du kan nå logge inn.")
}

function logout() {
    model.app.currentPage = 'homePage';
    model.viewState.name = '';
    model.viewState.email = '';
    model.viewState.password = '';
    updateView();
}



function SaveEmail(Email){
    model.viewState.email = Email


}

function SavePassword(Password){
    model.viewState.password = Password
}