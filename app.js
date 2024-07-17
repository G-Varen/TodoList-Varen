let ipt = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.querySelector('.list-group');

btn.addEventListener('click', ()=>{
    let listChild = document.createElement('li');
    let listCheck = document.createElement('input');
    let listTrash = document.createElement('i');
    
    listCheck.setAttribute('type','checkbox');
    listTrash.classList.add('bi','bi-trash-fill');
    listCheck.classList.add('form-check-input','me-1');
    listChild.classList.add('list-group-item');
    listChild.append(listCheck,ipt.value,listTrash); 
    list.append(listChild); 
    ipt.value = '';
})