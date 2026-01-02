// tutaj funckja buduje customowe alerty na gorze strony
function myAlert(msg, mode) { // wiadomosc msg i mode to error albo sukces wiadomo
    // Czyszczenie starych powiadomien zeby sie nie nakladaly na siebie
    var old = document.querySelector('.custom-alert');
    if (old) {
        old.remove();
    }
    // tworzymy nowy div i dajemy mu klase np custoom-alert + sucess jesli form bedzie zuupelniony popranwie
    var box = document.createElement('div');
    box.className = 'custom-alert ' + mode;
    
    // dekoracje - jakas emotka glupia zeby jakos wygladal alert oprocz tekstu 
    var icon = mode === 'success' ? '✅' : '⚠️';
    box.innerHTML = "<span>" + icon + "</span> " + msg;
    document.body.appendChild(box);

    // Po 50ms dodajemy klase .show co wywoluje animacje zjazdu z gory (CSS)
    setTimeout(function() {
        box.classList.add('show');
    }, 50);
    // po 3 sekundach usuwa powiadomienie juz
    setTimeout(function() {
        box.classList.remove('show');
    }, 3000);
}

// Titaj ponizej juz cala walidacja, na poczatku byly te powiadomienia dopiero tutaj juz ogarniamy walidacje formularza samego
var contactForm = document.getElementById('contact-form');

if (contactForm) {
    // e.preventDefault() sprawia ze strona sie nie odswieza, wzialem to ze StakcOverflow jak szukalem przykladowych walidacji formularza w JS, uwzglednie w dokumentacji w bibliografii
    contactForm.onsubmit = function(e) {
        e.preventDefault();

        // Pobieramy dane z pol standardowo rpzez id
        var userName = document.getElementById('name').value;
        var userEmail = document.getElementById('email').value;
        var userMsg = document.getElementById('message').value;
        
        // walidacja name jak za krotkie to error wywala
        if (userName.length < 2) {
            myAlert("Name is too short!", "error");
            return;
        }
        // walidacja maila - znak malpy jesli nie ma to zwraca -1 plus dlugosc tez
        if (userEmail.indexOf("@") == -1 || uEmail.length < 5) {
            myAlert("Email is not valid!", "error");
            return;
        }
        // Wiadomosc jak za krotka error, proste ify tak naprawde
        if (userMsg.length < 10) {
            myAlert("Message is too short!", "error");
            return;
        }
        // Jak wszystko spelnione alert z mode success
        myAlert("Ave! Message sent successfully.", "success"); 
        contactForm.reset(); // czyscimy formularz jak poprawny, nie ma zadnego php wiec nie wysylamy go nigdzie
    };
}