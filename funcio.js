function datafinal (){
    var datainici = document.getElementById('datainici').value;
    var datafi = document.getElementById('datafi').value;
    if (datainici > datafi){
        alert ("La data inicial no pot ser major que la data final");
        return false;
    }else{
        return true;
    }
}
function diferencia (){
    var data1 = document.getElementById('datainici').value;
    var data2 = document.getElementById('datafi').value;
    var dies = Math.floor((Date.parse(data2) - Date.parse(data1))/ 86400000);
    dies = dies*(-1);
        return dies;
}

