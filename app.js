// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const superheroList = document.getElementById('superheroList');

    searchButton.addEventListener('click', function () {
        fetchSuperheroes();
    });

    function fetchSuperheroes() {
        fetch('superheroes.php')
            .then(response => response.json())
            .then(data => {
                alertSuperheroes(data);
                displaySuperheroes(data);
            })
            .catch(error => {
                console.error('Error fetching superheroes:', error);
            });
    }

    function alertSuperheroes(superheroes) {
        // Create a formatted string that mimics the HTML unordered list
        let formattedList = '<ul>\n'
        superheroes.forEach(hero => {
            formattedList += ` <li>${hero.alias}<li>\n`;
        });
        formattedList += '</ul>';

        alert(formattedList);
        //const names = superheroes.map(hero => hero.alias).join(', ');
        //alert(`Superheroes: ${names}`);
    }

    function displaySuperheroes(superheroes) {
        superheroList.innerHTML = ''; // Clear the list before adding new items
        superheroes.forEach(hero => {
            const li = document.createElement('li');
            li.textContent = hero.alias;
            superheroList.appendChild(li);
        });
    }
});
