function machina() {
    let datapierwsza = new Date(document.getElementById("data1").value);
    let datadruga = new Date(document.getElementById("data2").value);

    let roznica = datadruga.getTime() - datapierwsza.getTime();
    let dni = Math.round(roznica / (1000 * 60 * 60 * 24));

    if (dni > 0){
        document.getElementById("wynik").innerHTML = "Do drugiej daty zostało jeszcze: " + dni + " dni";
    }
    else if (dni < 0){
        document.getElementById("wynik").innerHTML = "Pierwsza data była: " + Math.abs(dni) + " dni temu";  
    }
    else {
        document.getElementById("wynik").innerHTML = "Obie daty są takie same!";    
    }
}
