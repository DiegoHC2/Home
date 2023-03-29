
/* MÁSCARA DE TELEFONE */
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  };
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  };
//

/* MÁSCARA DE CPF */
function cpf(v){
    v=v.replace(/\D/g,"")                    //Remove tudo o que não é dígito
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       //Coloca um ponto entre o terceiro e o quarto dígitos
                                             //de novo (para o segundo bloco de números)
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2") //Coloca um hífen entre o terceiro e o quarto dígitos
    return v
}
//   

function Cadastrar(){
    let Cpf = document.querySelector('#cpfBox').value;
    let Tel = document.querySelector('#telefoneBox').value;
    let Email = document.querySelector('#emailBox').value;
    let NameL = Cpf.length ;
    let TelL = Tel.length;
    let EmailL = Email.length;
    
//
let GetUsers = localStorage.getItem('users')
  var arr = []
  if(GetUsers != null){
    var arr = JSON.parse(GetUsers)
                    } 
    
                    if(NameL && TelL && EmailL > 0 ) {
        
      let user = {
        Cpf: Cpf,
        Email: Email,
        tel: Tel
        }
        arr.push(user)
        localStorage.setItem('users', JSON.stringify(arr))
        window.alert('Usuario cadastrado !')
    } else {
      window.alert('Digite Algo !!');
        var limparN = document.querySelector('#NameBox').value = "";
        var limparT = document.querySelector('#PhoneBox').value = "";
        var limparE = document.querySelector('#EmailBox').value = "";

    }
}