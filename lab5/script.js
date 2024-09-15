const form = document.querySelector("form")
const aside = document.querySelector("aside")
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Зупиняємо відправку форми для перевірки
    
    let name = document.getElementById("name");
    let tel = document.getElementById("tel");
    let faculty = document.getElementById("faculty");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    



    let nameregex = /^[А-ЯЇЄҐІ][а-яїєґі]*\s[А-ЯЇЄҐІ]\.\s[А-ЯЇЄҐІ]\.$/; // Пример: тільки літери (латинські і кириличні)
    let telregex = /^\(0[1-9]{2}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/
    let facultyregex = /^[А-ЯЇЄҐІ]{2,4}$/
    let birthdayregex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)[0-9]{2}$/
    let addressregex = /^м\.\s[А-ЯЇЄҐІ][а-яїєґі]{1,20}$/
    
    
    let bool = true
    if (!nameregex.test(name.value)) {
        name.classList.add('error')
        bool = false
    }else{
        name.classList.remove('error')
    }
    if (!telregex.test(tel.value)) {
        tel.classList.add('error')
        bool = false
    }else{
        tel.classList.remove('error')
    } 
    if (!facultyregex.test(faculty.value)) {
        faculty.classList.add('error')
        bool = false
    }else{
        faculty.classList.remove('error')
    } 
    if (!birthdayregex.test(birthday.value)) {
        birthday.classList.add('error')
        bool = false
    }else{
        birthday.classList.remove('error')
    } 
    if (!addressregex.test(address.value)) {
        address.classList.add('error')
        bool = false
    }else{
        address.classList.remove('error')
    } 
    if(bool){
        if(aside.classList.contains('notDisplayed')){
            aside.classList.remove('notDisplayed')
        }
        document.querySelector('.data').innerHTML = `
            <p><b>ПІБ:</b> ${name.value}</p>
            <p><b>Телефон:</b> ${tel.value}</p>
            <p><b>Факультет:</b> ${faculty.value}</p>
            <p><b>Дата народження:</b> ${birthday.value}</p>
            <p><b>Адреса:</b> ${address.value}</p>
        `
    }else{
        if(!aside.classList.contains('notDisplayed')){
            aside.classList.add('notDisplayed')
        }
    }
});


//table
const table = document.querySelector('table');
const myVariant = 26
let count = 1; 
for (let i = 1; i <= 6; i++) {
    const row = document.createElement('tr');  
    for (let j = 1; j <= 6; j++) {
        const cell = document.createElement('td');  
        cell.textContent = count; 
        cell.setAttribute('data-column',j)
        cell.setAttribute('data-row',i)
        if(count==myVariant){
            cell.classList.add('myVariant')
        } 
        row.appendChild(cell); 
        count++;  
    }
    table.appendChild(row);  
}

const myVariantCell = document.querySelector('.myVariant')
const colorPicker = document.querySelector('#colorPicker')
//hover event
myVariantCell.addEventListener("mouseover",function(){
    this.style = `background-color: ${getRandomColor()}`
})
//click event
myVariantCell.addEventListener("click",function(){
    this.style = `background-color: ${colorPicker.value}`
})
//dblclick event
myVariantCell.addEventListener("dblclick",function(){
    const colnum = myVariantCell.getAttribute('data-column')
    const rownum =  myVariantCell.getAttribute('data-row')
    for(let i = rownum; i<=6; i++){
        for(let j = colnum; j<=6; j++){
            const cell = document.querySelector(`td[data-row="${i}"][data-column="${j}"]`)
            console.log(cell)
            cell.style=`background-color: ${colorPicker.value}`
        }
    }
})

//random color func
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}





