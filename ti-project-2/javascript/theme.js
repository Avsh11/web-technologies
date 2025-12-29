var themeButton = document.getElementById('theme-button');
// Funkcja strzałkowa będzie skracać zapis function(), 
// addEventListener zamiast .onlckick też lepiej gdyż możemy przypisać więcej akcji, natomiast .onclick
// też by tutaj wystarczył ponieważ jest to prosty skrypt
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});