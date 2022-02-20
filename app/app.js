
const url = "https://api.api-futebol.com.br/v1/campeonatos/10"

 let headers = new Headers();

 headers.append('Athorization', 'Bearer test_6ed08d31465ad97311bacd734d8099')
 console.log(headers);

const options = {
 headers: {'Authorization' : 'Bearer test_6ed08d31465ad97311bacd734d8099'},
}


function buscarPartidas() {
  fetch(url, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas(obj);
  })
})
.catch()
}



function mostrarPartidas(campeonatos) {
  console.log(campeonatos, "Isso é partidas para mobile")



  var image = document.createElement('img');
   image.setAttribute('src', campeonatos.logo)
   image.style.width='200px'
   image.style.marginLeft='-70%'


  var nome  = document.createElement('h2');
  nome.innerText = campeonatos.edicao_atual.nome_popular
  nome.style.marginTop='-150px'
  nome.style.fontSize='50px'
  nome.style.marginLeft='25%'




    document.getElementById('partidasAoVivo').append(image,nome);
  }

document.write(buscarPartidas());

////////////////////////////LOGO DO CAMPEONATO//////////////////////////////


const urltab = "https://api.api-futebol.com.br/v1/campeonatos/10/tabela"


function buscarPartidas2() {
  fetch(urltab, options)
 .then(resposta => {
   resposta.json()
    .then(obj => {
    mostrarPartidas2(obj);
  })
})
.catch()
}

function mostrarPartidas2(tabela) {
  console.log(tabela, "Isso é partidas para pc")

 for (i=0; i<tabela.length; i++){


  var ano  = document.createElement('h3');
  ano.style.marginLeft='-80%'


  var logo =  document.createElement('img');
  logo.setAttribute('src', tabela[i].time.escudo)
  logo.style.width='50px'
  logo.style.height='50px'
  logo.style.marginTop='50px'
  logo.style.marginLeft='-75%'


  var posicao = document.createElement('h3');
  posicao.innerText = tabela[i].posicao
  posicao.style.marginTop='-40px'
  posicao.style.marginLeft='-90%'

  var nomelogo = document.createElement('h4')
  nomelogo.innerText = tabela[i].time.nome_popular
  nomelogo.style.backgroundColor='#333'
  nomelogo.style.marginTop='-35px'
  nomelogo.style.marginLeft='-50%'
  nomelogo.style.color='teal'


  var ponto = document.createElement('h4')
  ponto.innerText=tabela[i].pontos
  ponto.style.backgroundColor='#333'
  ponto.style.marginTop='-40px'
  ponto.style.marginLeft='-25%'

  var vit = document.createElement('h4');
  vit.innerText=tabela[i].vitorias
  vit.style.backgroundColor='#333'
  vit.style.marginTop='-40px'
  vit.style.marginLeft='-10%'


  var empate = document.createElement('h4')
  empate.innerText=tabela[i].empates
  empate.style.backgroundColor='#333'
  empate.style.marginTop='-40px'
  empate.style.marginLeft='5%'


  var derrota =  document.createElement('h4');
  derrota.innerText=tabela[i].derrotas
  derrota.style.backgroundColor='#333'
  derrota.style.marginTop='-40px'
  derrota.style.marginLeft='20%'


  var golpro = document.createElement('h4');
  golpro.innerText=tabela[i].gols_pro
  golpro.style.backgroundColor='#333'
  golpro.style.marginTop='-40px'
  golpro.style.marginLeft='35%'

  var golcontra = document.createElement('h4');
  golcontra.innerText=tabela[i].gols_contra
  golcontra.style.backgroundColor='#333'
  golcontra.style.marginTop='-40px'
  golcontra.style.marginLeft='50%'

  var saldo = document.createElement('h4');
  saldo.innerText=tabela[i].saldo_gols
  saldo.style.backgroundColor='#333'
  saldo.style.marginTop='-40px'
  saldo.style.marginLeft='65%'

  var jogo = document.createElement('h4');
  jogo.innerText=tabela[i].jogos
  jogo.style.backgroundColor='#333'
  jogo.style.marginTop='-40px'
  jogo.style.marginLeft='80%'

  var jogopassado = document.createElement('h4');
  jogopassado.innerText=tabela[i].aproveitamento
  jogopassado.style.backgroundColor='#333'
  jogopassado.style.marginTop='-40px'
  jogopassado.style.marginLeft='93%'
  jogopassado.style.color='red'


 
    document.getElementById('partidasAoVivo2').append(logo,ano, posicao,nomelogo,ponto,vit,empate,derrota,golpro,golcontra,saldo,jogo,jogopassado);
 }
}

document.write(buscarPartidas2());


///////////////////////////////////////////////////////////////////////

const urlpartida = "https://api.api-futebol.com.br/v1/campeonatos/10/fases/168"

function BuscarNovasPartidas(){
  fetch(urlpartida, options)
    .then(Responsta => {
      Responsta.json()
      .then(obj => { 
        MostrarNovasPartidas(obj);
      })
    })
    .catch()
    }


    function MostrarNovasPartidas(novapartidas){
      console.log(novapartidas,'isso é partidas')


      var logo = document.createElement('img');
      logo.setAttribute('src', novapartidas.time_visitante.escudo)

  
     




      document.getElementById("BusNovascarPartidas").append(nome,logo)

    
    }
    
    document.write(BuscarNovasPartidas());
  





////////////////////////////////////////////////////////////////////////



const imgs = document.getElementById("img");
const img1 = document.querySelectorAll("#img img");

let idx1 = 0;

function carrossel (){
  idx1++

  if(idx1 > img1.length - 1){
    idx1 = 0;
  }

  imgs.style.transform = `translateX(${-idx1 * 865}px)`;

}

setInterval(carrossel, 5000);
/////////////////////////////////////////////////////////////////////////////////


const imgss = document.getElementById("pcimg");
const img2 = document.querySelectorAll("#pcimg img");

let idx2 = 0;

function carrosseu (){
  idx2++

  if(idx2 > img2.length - 1){
    idx2 = 0;
  }

  imgss.style.transform = `translateX(${-idx2 * 350}px)`;

}

setInterval(carrosseu, 5000);

