function updateView() {
    const currentPage = model.app.currentPage;
    const appDiv = document.getElementById("app");

    if (currentPage === 'homePage') {
        appDiv.innerHTML = /*HTML*/ `
        <div id="centerMydiv">
            <h1>Panda Express <span><img id="pandaLogo" src="pandaLogo.png"></span></h1>
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
            <button onclick="checkMailAndPassword()">Log in</button>
            <button onclick="goToRegister()">Opprett bruker</button>
            <h2 id="Wrong"></h2>
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
            <button onclick="registerUser()">Registrer</button>
            <button onclick="goHome()">Tilbake</button>
            <h2 id="Wrong"></h2>
        </div>
        `;
    }

    else if (currentPage === 'welcomePage') {
        appDiv.innerHTML = /*HTML*/ `
        <div id="centerMydiv">
            <h1>Velkommen, ${model.viewState.name}!</h1>
            <button onclick="logout()">Logg ut</button>
        </div>
        `;
    }
}

// Start appen når siden lastes
window.onload = () => updateView();
