function newobject() {
    console.log('Start...');
    const newobject = document.getElementById('contentID');
    
    let jsonObject = {
        valeur1: "Json Constructor",
        valeur2: "Voici un objet JSON généré dynamiquement !",
        valeur3: new Date().toLocaleString()
    };

    jsonObject.newContent = "Nouveau contenu ajouté";

    newobject.textContent = JSON.stringify(jsonObject, null, 2); 
    
}