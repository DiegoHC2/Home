let a = localStorage.getItem('users')
let User = document.querySelector('#Counter')
let b = JSON.parse(a)
let FormU = document.querySelector('#FormUsers')

if(b == null){

} else {
    let c = b.length
    for(i = 0; i<c; i++){
        let u = document.createElement("tr") 
        let UC = i+1
        u.innerHTML = 

        // Queria colocar um ID no mesmo valor do > i para conseguir ter controle e remover
        '<td>'+ '<input type="checkbox" input-identifier="id '+i+'" >' + '</td>' +
        '<td>'+b[i].Cpf + '</td>' + 
        '<td>' + b[i].tel + '</td>' + 
        '<td>' + b[i].Email + '</td>'
        FormU.appendChild(u)    
    }   
}
function remover(i, checked){
    console.log(i)

}
function reload(){
let a = localStorage.getItem('users')
let User = document.querySelector('#Counter')
let b = JSON.parse(a)
if(b != null){
    let c = b.length
}
let FormU = document.querySelector('#FormUsers')



if (a == null){
    User.textContent = 'USUÁRIOS' + ' ' + '0'

} else {  
let UserControl = b.length 
User.textContent = 'USUÁRIOS' + ' ' + UserControl
}
}



setInterval('reload()', 700);