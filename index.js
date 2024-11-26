const objectName = document.getElementById('object-name');
const objectType = document.getElementById('object-type');
const objectValue = document.getElementById('object-value');

function toggleInputType() {
    if (!objectName.value.trim()) {
        objectType.disabled = true;
        objectType.value = "";
        objectValue.disabled = true;
        objectValue.value = "";
    } else {
        objectType.disabled = false;
    }
}

function toggleInputValue() {
    if (!objectType.value.trim()) {
        objectValue.disabled = true;
        objectValue.value = "";
    } else {
        objectValue.disabled = false;
    }
}

objectName.addEventListener('input', toggleInputType);
objectType.addEventListener('input', toggleInputValue);
toggleInputType();
toggleInputValue();


function createobject() {
    console.log('Start...');

    const objectName = document.getElementById('object-name').value.trim();
    
    if (!objectName) {
        document.getElementById('object-value').disabled = false;
    }
    
    const objectValue = document.getElementById('object-value').value.trim();
    
   

    const newobject = document.getElementById('contentID');
    


    let jsonObject = {
        [objectName]: objectValue, 
    };


    newobject.textContent = JSON.stringify(jsonObject, null, 2); 
    
}