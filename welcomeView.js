function welcomeView(){
    let HTML = ''
    HTML = /*HTML*/ `
        <div id="centerMydiv">
            <h1>Velkommen, ${model.viewState.name}!</h1>
            <button onclick="logout()">Logg ut</button>
        </div>
        `;

        return HTML
}