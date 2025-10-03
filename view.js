
function updateview(){
    const currentPage = model.app.currentPage;
    
    document.getElementById("app").innerHTML = /*HTML*/ `
    <div id="centerMydiv">
    <h1>Panda express <span><img id="pandaLogo" src="pandaLogo.png"></span></h1>
    <input type="email" oninput="inputs(this.value)" placeholder="epost adresse"> e-post <br><br>
    <input type="password" oninput="inputs(this.value)" placeholder="passord"> passord<br>
    <br>
    <button onclick="checkMailAndPassword()">Log in</button><br>

    <h2 id="Wrong"></h2>
    
    
    
    </div>
    
    `
}

updateview()