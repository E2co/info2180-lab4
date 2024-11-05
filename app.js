// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const resultDiv = document.getElementById('result');
    //const superheroList = document.getElementById('superheroList');

    searchButton.addEventListener('click', function () {
        fetchSuperheroes();
    });

    function fetchSuperheroes() {
        const query = encodeURIComponent(searchInput.value.trim());
        const url = query ? `superheroes.php?query=${query}` : 'superheroes.php?';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                //alertSuperheroes(data);
                displaySuperheroes(data);
            })
            .catch(error => {
                console.error('Error fetching superheroes:', error);
                resultDiv.innerHTML = '<p>Superhero not found</p>';
            });
    }

    //function alertSuperheroes(superheroes) {
    //    // Create a formatted string that mimics the HTML unordered list
    //    let formattedList = '<ul>\n'
    //    superheroes.forEach(hero => {
    //        formattedList += ` <li>${hero.alias}<li>\n`;
    //    });
    //    formattedList += '</ul>';
//
    //    alert(formattedList);
        //const names = superheroes.map(hero => hero.alias).join(', ');
        //alert(`Superheroes: ${names}`);
    //}

    function displaySuperheroes(superheroes) {
        resultDiv.innerHTML = '';

        if (superheroes.length === 0){
            resultDiv.innerHTML = '<p>Superhero not found</p>';
            return;
        }

        superheroes.forEach(hero => {
            const heroDiv = document.createElement('div');
            heroDiv.innerHTML = `
                <h2>${hero.alias}</h2>
                <h3>${hero.name}</h3>
                <p>${hero.biography}</p>
                `;
            resultDiv.appendChild(heroDiv);
        });
    }
});
