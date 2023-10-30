let textbox = document.getElementById('textbox');
let addTask = document.getElementById('addTask');
let lst = document.getElementById('lst');
let clear = document.getElementById('clear');

addTask.onclick = function addlst() {
    let timer = new Date()
    lst.innerHTML += `<div>${textbox.value}</div>`
    localStorage.setItem(`${timer.getTime().toString()}`, textbox.value);
    textbox.value = ''
}
for (let i = 0; i < localStorage.length; i++) {
    lst.innerHTML += `<div>${localStorage.getItem(localStorage.key(i))}</div>`
}
clear.onclick = function clear() {
    lst.innerHTML = ''
    localStorage.clear()
}