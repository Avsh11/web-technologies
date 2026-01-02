// Pobieramy przycisk do zmiany motywu z dokumentu wiec document.getElementById stanradowo przekazujemy do zmiennej
var themeButton = document.getElementById('theme-button');

// Funkcja sie odpala po kliknieciu w przycisk, przypisujemy akcje onclick czyli gdy uzytkownik kliknie to wykona sie kod w funkcji
themeButton.onclick = function() {
    // Wybieram cale body strony, poniewaz w css mam zdefiniowane ze body ma klase .dark-mode tez wiec kolory sie zmienia 
    var pageBody = document.body;
    // Przelaczamy klase dark-mode (dodajemy/usuwamy) - czyli jesli klasa dark-mode jest na body to ja usuwa a jesli nie ma to dodaje, w ten sposob user sobie moze zmieniac motyw w najprosztszy sposoob
    pageBody.classList.toggle('dark-mode');
};