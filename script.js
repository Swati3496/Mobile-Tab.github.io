const contents =document.querySelectorAll('.content')
const ListItems =document.querySelectorAll('nav ul li')

ListItems.forEach((item,idx) => {
    item.addEventListener('click',() => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hidenAllContents(){
    contents.forEach(content => content.classList.remove('show'))
}

function hidenAllItems(){
    ListItems.forEach(content => content.classList.remove('active'))
}
