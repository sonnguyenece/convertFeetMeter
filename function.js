function feetToMeter(ft) {
    return 0.305 * ft;
}

function meterToFeet(m) {
    return 3.279 * m;
}
function displayMeter(ft) {
document.getElementById("ft-m").innerHTML=feetToMeter(ft).toFixed(2);
}

function displayFeet(m) {
    document.getElementById("m-ft").innerHTML=meterToFeet(m).toFixed(2);
}