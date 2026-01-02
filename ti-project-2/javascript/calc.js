var numberInput = document.getElementById('arabic-input');
var calcButton = document.getElementById('calc-button');
var out = document.getElementById('roman-output');

function convert() {
    // Pobieramy tekst i zamieniamy na liczbe int parsujemy po prostu, zmienna val bo value nie mozna slowo zastrzezone zebyy byla jasnoc podobnie number itd.
    var val = parseInt(numberInput.value);
    // sprawdzamy czy co wpisano to liczba i jest w zakresie do 3999 bo ogolnie nie mozna DLACZEGO: odpowiedz z google jasno mowi ze:

    // In the standard Roman numeral system (without special extensions), the maximum number is 3,999 (MMMCMXCIX) czyli maks mamy 3999 wlasnie z tego powodu
    if (isNaN(val) || val <= 0 || val > 3999) {
        out.innerText = "Error";
        return; // prrzerywamy jak dane zle
    }
    // Dwie tablice czyli klasyk no i wiadomo ta sama kolejnosc jak widac
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var finalStr = ""; //Tutaj bedzie wynik sie "budowac"

    // Petla przechodzi przez tablice numbers od najwiekszego do najmniejszego
    for (var i = 0; i < numbers.length; i++) {
        // Dopoki liczba jest wieksza lub rowna liczbie z tablicy to wyciaga z niej tysiace i dopisuje M do wyniku np
        while (val >= numbers[i]) {
            finalStr = finalStr + roman[i]; // Dokleja cyrfre rzysmka (litere defakto)
            val = val - numbers[i]; // Odejmuje wartosc od liczby glownej
        }
    }
    // wyswietlamy ciag liter
    out.innerText = finalStr;
}
// obsluga przycisku
calcButton.onclick = convert;
numberInput.onkeypress = function(event) {
    if (event.key === 'Enter') {
        convert();
    }
};