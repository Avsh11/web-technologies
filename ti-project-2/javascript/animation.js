// Pobieramy naglowek do zmiennej 
var title = document.querySelector('.hero-content h1');

// Ustawienia poczatkowe tekst bedzie 50 pikseli nizej niz powinien i calkiem przezroczysty
var position = 50; 
var opacity = 0;

// Na start ustawiamy te style, zeby nie bylo widac napisu przed animacjaa
title.style.marginTop = position + "px";
title.style.opacity = opacity;

// Tworzymy prosty licznik czasu setInterval
var timer = setInterval(function() {
    
    // W kazdym kroku zmniejszamy odstep od gory (tekst leci do gory) i zwieksza sie widocnzosc przy okazji
    position = position - 1;
    opacity = opacity + 0.02;

    // Aktualizujemy style elementu
    title.style.marginTop = position + "px";
    title.style.opacity = opacity;

    // Jesli teksst wrocil na swoje miejsce (position 0), zatrzymuje sie animacja
    if (position <= 0) {
        clearInterval(timer);
        
        // Dla pewnosci 0 dla koncu zeby na 100% tekst wrocil gdzie powinien, a nie np pixel za wysoko/nisko i sutawiamy opacity na 1
        title.style.marginTop = "0px";
        title.style.opacity = "1";
    }
}, 15); // Odswiezamy co 15 sekund
