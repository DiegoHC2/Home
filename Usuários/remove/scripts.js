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
        '<td>'+ '<input type="checkbox" name = "users" class= "Checkbox" id="'+i+'" >' + '</td>' +
        '<td>'+b[i].Cpf + '</td>' + 
        '<td>' + b[i].tel + '</td>' + 
        '<td>' + b[i].Email + '</td>'
        FormU.appendChild(u)    
    }   
}


function remover(){
    
    for(a=0; a<i; a++){
        let users_storageUND = localStorage.getItem('users')
        let users_storage = JSON.parse(users_storageUND)
        
        var user_cache = document.getElementById(a)
        if (user_cache.checked === true) {
            
            
            var user_control = users_storage[a]
            
            let newArr = users_storage.filter(el => el.Cpf !== users_storage[a].Cpf)
            

            localStorage.setItem('users', JSON.stringify(newArr))
           
             
        }
        
    }    
    window.alert('Usuários Removidos !');
        window.location.reload();
    
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