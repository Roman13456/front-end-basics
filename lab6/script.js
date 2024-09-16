const usersContainer = document.querySelector('.usersContainer')
const button = document.querySelector('button')
function getUsers(){
    fetch('https://randomuser.me/api/?results=3')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();  // Перетворюємо відповідь у формат JSON
    })
    .then(data => {
        // Витягуємо потрібні дані
        usersContainer.innerHTML = ""
        for (user of data.results){
            console.log(user)
            const name = `${user.name.first} ${user.name.last}`; 
            const picture = user.picture.large; 
            const city = user.location.city 
            const country = user.location.country 
            const postcode = user.location.postcode  
            usersContainer.insertAdjacentHTML("beforeend",`
                    <div class='item'>
                        <img src="${picture}" alt="avatar">
                        <p>name: ${name}</p>
                        <p>city: ${city}</p>
                        <p>country: ${country}</p>
                        <p>postcode: ${postcode}</p>
                    </div>
                `)
        }
        return data
    })
    .catch(error => {
        console.error('Fetch error:', error);
    })
}
button.onclick = getUsers;

