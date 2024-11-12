
let InptNomeUser = document.getElementById('NomeUser')
let InptEmailUser = document.getElementById('EmailUser')
let InptSenhaUser = document.getElementById('SenhaUser')
let InptSenhaUserConfirm = document.getElementById('SenhaUserConfirm')

let bioUserElement = document.getElementById("biografiaUser")

let IntpEmailLogin = document.getElementById('EmailLogin')
let InptSenhaLogin = document.getElementById('SenhaLogin')

let TermosDeUso = document.getElementById('Termos')

let NomeUserPerfil = document.getElementById('NomeUsuario')

let ElementLblBio = document.getElementById('Biografia')

let Biografia

let NewName = document.getElementById('NovoNomeUsuario')



let NovoNomeUser

let ConfirmaçãoUser

let PosiçãoUser

let PosiçãoUserName

let UserLogado

let VetorNomeUser = []
let VetorEmailUser = []
let VetorSenhaUser = []
let VetorSenhaUserConfirm = []
let UserAtual = []
let biografia = []

function CriarConta(){

    VetorNomeUser = JSON.parse(localStorage.getItem('NomeUser'))
    VetorEmailUser = JSON.parse(localStorage.getItem('EmailUser'))
    VetorSenhaUser = JSON.parse(localStorage.getItem('SenhaUser'))   
    VetorSenhaUserConfirm = JSON.parse(localStorage.getItem('SenhaUserConfirm'))   

    if(VetorEmailUser == null){

    VetorNomeUser = []
    VetorEmailUser = []
    VetorSenhaUser = []
    VetorSenhaUserConfirm = []
    
    Cadastrar()

    }else{


    Cadastrar()

    

    }


}


function Cadastrar(){


 if(InptSenhaUser.value =='' || InptSenhaUserConfirm.value == '' || InptEmailUser.value == '' || InptNomeUser.value == '') {

  alert('Campos não preenchidos!')

 }else{

    if(InptSenhaUser.value != InptSenhaUserConfirm.value){

     alert('As senhas devem ser iguais!')
     

    }else{

        

     if(TermosDeUso.checked){

        VetorNomeUser.push(InptNomeUser.value)
        VetorEmailUser.push(InptEmailUser.value)
        VetorSenhaUser.push(InptSenhaUser.value)
        VetorSenhaUserConfirm.push(InptSenhaUserConfirm.value)

        UserAtual.push(InptNomeUser.value)
        
        
        localStorage.setItem('NomeUser', JSON.stringify(VetorNomeUser))
        localStorage.setItem('EmailUser', JSON.stringify(VetorEmailUser))
        localStorage.setItem('SenhaUser', JSON.stringify(VetorSenhaUser))
        localStorage.setItem('SenhaUserConfirm', JSON.stringify(VetorSenhaUserConfirm)) 
        localStorage.setItem('UserAtual', JSON.stringify(UserAtual))

      alert('Cadastro bem sucedido!')

      window.location.href = 'telaInicialPósLogin.html'

     }else{

      alert('Você não selecionou os termos de uso!')

     }


    }


 }
}

function Login(){

   VetorEmailUser = JSON.parse(localStorage.getItem('EmailUser'))
   VetorSenhaUser = JSON.parse(localStorage.getItem('SenhaUser'))
  
   
    PosiçãoUser = VetorEmailUser.indexOf(IntpEmailLogin.value)
   

    if(PosiçãoUser == -1){

     alert('Conta inexistente!')


    }else{
 
     if(IntpEmailLogin.value == VetorEmailUser[PosiçãoUser] && InptSenhaLogin.value == VetorSenhaUser[PosiçãoUser]){

      UserLogado =  JSON.parse(localStorage.getItem('UserAtual'))
     

      localStorage.setItem('NomeUser', JSON.stringify(UserLogado))
      

     alert('Login bem sucedido!')   

     window.location.href = 'telaInicialPósLogin.html'

     AcessarPerfil()




     }else{

      alert('Senha inválida!')

     }

    }
    
}

function AcessarPerfil(){

Biografia = JSON.parse(localStorage.getItem('bioUser'))


UserLogado = JSON.parse(localStorage.getItem('UserAtual'))

NomeUserPerfil.innerHTML = `Nome de usuário: ${UserLogado}`

if(Biografia == null){

   ElementLblBio.innerHTML = ''
   
 }else{
 
 ElementLblBio.innerHTML = `${Biografia}`

}




}

function AcessoEditar(){
   Biografia = JSON.parse(localStorage.getItem('bioUser'))

   UserLogado = JSON.parse(localStorage.getItem('UserAtual'))

   NomeUserPerfil.innerHTML = `Nome de usuário: ${UserLogado}`


}

function ExcluirConta(){
  
    

   VetorNomeUser.splice(PosiçãoUser, 1)
   VetorEmailUser.splice(PosiçãoUser, 1)
   VetorSenhaUser.splice(PosiçãoUser, 1)
   VetorSenhaUserConfirm.splice(PosiçãoUser, 1)
   biografia.splice(1,1)
   UserAtual.splice(1,1)

   localStorage.setItem('NomeUser', JSON.stringify(VetorNomeUser))
   localStorage.setItem('EmailUser', JSON.stringify(VetorEmailUser))
   localStorage.setItem('SenhaUser', JSON.stringify(VetorSenhaUser))
   localStorage.setItem('SenhaUserConfirm', JSON.stringify(VetorSenhaUserConfirm))
   localStorage.setItem('UserAtual', JSON.stringify(UserAtual))
   localStorage.setItem('bioUser', JSON.stringify(biografia))

   alert('Conta deletada!')
 
   window.location.href = 'telaInicial2.html'


}



function editar(){

   NovoNomeUser = NewName.value
   biografia.push(bioUserElement.value)

   switch(true){

    case NovoNomeUser == '' && biografia == '':

    alert('Dados editados!')

    location.href = 'PerfilUsuarioInklua.html'

    break 

    case NovoNomeUser == '' && biografia != '' :

    alert("Dados editados!")

   
   localStorage.setItem('bioUser', JSON.stringify(biografia))

    bioUserElement.innerHTML = `${biografia}`

    location.href = 'PerfilUsuarioInklua.html'


    break

    case NovoNomeUser != '' && biografia == '' :

    alert("Dados editados!")
    
   VetorNomeUser.splice(PosiçãoUser, 1, NovoNomeUser)
   UserAtual.splice([0], 1, NovoNomeUser)
  
   localStorage.setItem('NomeUser', JSON.stringify(VetorNomeUser))
   localStorage.setItem('UserAtual', JSON.stringify(UserAtual))
  
   NomeUserPerfil.innerHTML = `Nome de usuário: ${UserAtual}`

    location.href = 'PerfilUsuarioInklua.html'

    break

    case NovoNomeUser != '' && biografia != '' :

    alert('Dados editados!')


    localStorage.setItem('bioUser', JSON.stringify(biografia))
 
    VetorNomeUser.splice(PosiçãoUser, 1, NovoNomeUser)
    UserAtual.splice([0], 1, NovoNomeUser)
   
    localStorage.setItem('NomeUser', JSON.stringify(VetorNomeUser))
    localStorage.setItem('UserAtual', JSON.stringify(UserAtual))
   
    NomeUserPerfil.innerHTML = `Nome de usuário: ${UserAtual}`
 
    bioUserElement.innerHTML = `${biografia}`
 
    location.href = 'PerfilUsuarioInklua.html'

    break




   }


   }




function Junte_se(){

 VetorEmailUser = JSON.parse(localStorage.getItem('EmailUser'))   

if(VetorEmailUser == ''){

alert('Para acessar esta página você deve ter uma conta cadastrada!')

location.href = 'cadastro.html'

}else{

location.href = 'telaComentarios .html'


}




}

let nomeDeUsúario = document.getElementById('nomeDeUsúario')
let emeilDeUsúario = document.getElementById('emeilDeUsúario')

let textComentar = document.getElementById('textComentar')
let textoCometarios = document.getElementById('textoCometarios')

let guardaComentario =[]

let posicaoUsuário
let editaUsuário



// button comentario
function cancelar(){
    posicaoUsuário = guardaComentario.indexOf(textComentar.value)
    guardaComentario.splice(posicaoUsuário, 1)
    alert("comentário foi excluído")
    textComentar.value = ''
}
function enviar(){
    guardaComentario.push(textComentar.value)
    alert("Comentario publicado! :D")
    textComentar.value = ''
    localStorage.setItem('textComentar', JSON.stringify(guardaComentario))
    Lista()
}
 
function Lista(){
   //informaçao do usuario
    nomeDeUsúario.innerHTML = //
    emeilDeUsúario.innerHTML =//
    //comentario
    textoCometarios.innerHTML = guardaComentario
}
function exluirComentarios(){  
    posicaoUsuário = guardaComentario.indexOf(textoCometarios.value)
    guardaComentario.splice(posicaoUsuário, 1)
    localStorage.setItem('textComentar', guardaComentario)
    alert("comentario excluído")
    guardaComentario.value = ''
    Lista()
}
function editarComentarios(){
    posicaoUsuário = guardaComentario.indexOf(textoCometarios.value)
    alert("comentario foi editado")
    guardaComentario.value = ''
    localStorage.setItem('textoComentar', JSON.stringify(guardaComentario))
    Lista()
}