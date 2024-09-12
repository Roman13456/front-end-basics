const firstElem = document.getElementById('firstElem')
const secondElem = document.querySelector('.secondElem')
firstElem.onclick = function(){
    if(this.classList.contains('clickable1')){
        this.classList.remove('clickable1')
    }else{
        this.classList.add('clickable1')
    }
}

secondElem.onclick = function(){
    if(this.classList.contains('clickable2')){
        this.classList.remove('clickable2')
    }else{
        this.classList.add('clickable2')
    }
}

const add = document.querySelector('.add')
const zoomin = document.querySelector('.zoomin')
const zoomout = document.querySelector('.zoomout')
const remove = document.querySelector('.remove')
const img = document.querySelector('img')

add.onclick = function(){
    if(img.classList.contains('invisible')){
        img.classList.remove('invisible')
    }
}
remove.onclick = function(){
    if(!img.classList.contains('invisible')){
        img.classList.add('invisible')
    }
}

zoomout.onclick = function(){
    if(img.classList.contains('zoomed')){
        img.classList.remove('zoomed')
    }
}
zoomin.onclick = function(){
    if(!img.classList.contains('zoomed')){
        img.classList.add('zoomed')
    }
}

