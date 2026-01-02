var inputField = document.getElementById('todo-input'); // Tu mamy wpisywanie tekstu
var addButton = document.getElementById('add-task-button'); // Tutaj przycisk do dodawania
var myList = document.getElementById('todo-list'); // Pustal ista <ul>

function addNewTask() {
    // Najpiewr pobieramy co user sobie napisal
    var text = inputField.value;

    // Walidacja - czy uzytkownik nie daje pustego zdania czegokolwiek
    if (text != "") {
        // Tworzymy element <li> ktorego nie ma jeszcze na stronie w tym miejscu
        var newItem = document.createElement('li');
        // uwagA: todo-item !!!!!!!!!!
        newItem.className = 'todo-item';
        // Wypelniamy li tekstem zdania jakie wpisal sobie user
        newItem.innerHTML = "<span>" + text + "</span>";

        // Kazdy element ma "sluchacza" w sensie ze jak klikniemy w jakies slowo/zdanie to te wie ze ma sie usunac, tutaj prosto bez animacji zadnej ptaszka bo mi sie juz nie chce
        newItem.onclick = function() {
            this.remove();
        };
        // Wstawiamy element gotowy <li> juz do listy <ul> na stronie
        myList.appendChild(newItem);
        // czyszczenie pola tekstowego na kolejne zdanie /slowo
        inputField.value = ""; 
    }
}
// Funckje wywolujemy jak klikniemy w przycisk - id z html pobrane document.getElementById
addButton.onclick = addNewTask;

// Tu tak bonusowo jescze obsluga klawisza enterr
inputField.onkeypress = function(e) {
    if (e.key === 'Enter') {
        addNewTask();
    }
};