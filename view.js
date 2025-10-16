function updateView() {
    const currentPage = model.app.currentPage;
    const appDiv = document.getElementById("app");

    if (currentPage === 'homePage') {
        appDiv.innerHTML = /*HTML*/ `
        <div id="centerMydiv">
            <h1>Panda Express <span><img id="pandaLogo" src="pandaLogo.png"></span></h1>
            <label>
                E-post:<br>
                <input type="email" 
                    onchange="SaveEmail(this.value)" 
                    value="${model.viewState.email}" 
                    placeholder="epost adresse">
            </label>
            <br>
            <label>
                Passord:<br>
                <input type="password" 
                    onchange="SavePassword(this.value)" 
                    value="${model.viewState.password}" 
                    placeholder="passord">
            </label>
            <br>
            <button onclick="checkMailAndPassword()">Log inn</button>
            <button onclick="goToRegister()">Opprett bruker</button><br>
            <h2>${model.viewState.errorMessage}</h2>
        </div>
        `;
    }

    else if (currentPage === 'registerPage') {
        appDiv.innerHTML = /*HTML*/ `
        <div id="centerMydiv">
            <h1>Opprett ny bruker <span><img id="pandaLogo" src="pandaLogo.png"></span></h1>
            <label>
             Name:
                <input type="text" 
                    oninput="model.viewState.name=this.value" 
                    value="${model.viewState.name}" 
                    placeholder="Navn">
            </label>
            <br><br>
            <label>
                E-post:
                <input type="email" 
                    oninput="model.viewState.email=this.value" 
                    value="${model.viewState.email}" 
                    placeholder="epost adresse">
            </label>
            <br><br>
            <label>
                Passord:
                <input type="password" 
                    oninput="model.viewState.password=this.value" 
                    value="${model.viewState.password}" 
                    placeholder="passord">
            </label>
            <br><br>
            <label>
                Image:
                <input type="file"
                    oninput="model.viewState.Image=this.vaulue"
                    value="${model.viewState.Image}">
            </label>
            <br>
            <button onclick="registerUser()">Registrer</button>
            <button onclick="goHome()">Tilbake</button>
            <h2 id="Wrong"></h2>
        </div>
        `;
    }

    else if (currentPage === 'welcomePage') {
        appDiv.innerHTML = welcomeView()
    }
}

window.onload = () => updateView();
