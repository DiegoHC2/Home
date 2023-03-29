let users_init = localStorage.getItem('users')
let counter = document.querySelector('#Counter')
let users = JSON.parse(a)
let formU = document.querySelector('#FormUsers')

if (users != null){
    let users_l = users.length
    for(i = 0; i<c; i++){
        let u = document.createElement("tr") 
        let UC = i+1
        u.innerHTML = '<td>'+b[i].Cpf + '</td>' + 
        '<td>' + b[i].tel + '</td>' + 
        '<td>' + b[i].Email + '</td>'
        FormU.appendChild(u)    
    }   
}