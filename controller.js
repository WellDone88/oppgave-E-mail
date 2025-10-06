function checkMailAndPassword() {
    const email = model.viewState.email.trim();
    const password = model.viewState.password.trim();
    const messageDiv = document.getElementById('Wrong');

    const user = model.data.EmailAndPasswords.find(u => u.email === email && u.password === password);

    if (user) {
        model.app.currentPage = 'welcomePage';
        updateView();
    } else {
        messageDiv.innerText = "Feil e-post eller passord!";
    }
}

function goToRegister() {
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
    const email = model.viewState.email.trim();
    const password = model.viewState.password.trim();
    const messageDiv = document.getElementById('Wrong');

    if (!email || !password) {
        messageDiv.innerText = "Vennligst fyll ut alle feltene.";
        return;
    }

    const exists = model.data.EmailAndPasswords.some(u => u.email === email);
    if (exists) {
        messageDiv.innerText = "Denne e-posten er allerede registrert.";
        return;
    }

    model.data.EmailAndPasswords.push({ email, password });
    messageDiv.innerText = "Bruker opprettet! Du kan nå logge inn.";
    model.viewState.email = '';
    model.viewState.password = '';
}

function logout() {
    model.app.currentPage = 'homePage';
    model.viewState.email = '';
    model.viewState.password = '';
    updateView();
}
