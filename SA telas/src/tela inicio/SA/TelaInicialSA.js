
let BuscaUsuario = document.getElementById('search')

let VereficaPesquisa = []

let VetorPesquisas = ['bbb', 'login']


function search(){

VereficaPesquisa = VetorPesquisas.indexOf(BuscaUsuario.value)

if(VereficaPesquisa == -1){

alert('Evento indisponivel')


}else{

 if(VereficaPesquisa == 0)   

alert('Deu bom')

window.location.href = 'evento.html'

if(VereficaPesquisa == 1){

alert('Deu bom')

window.location.href = 'TelaLogin.html'


}

}




}
