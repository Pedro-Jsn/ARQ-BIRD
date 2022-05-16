const perguntaResposta = [{
  "id": "1",
  "pergunta": "Unidade Central de Processamento, essa parte do computador realiza todas as operações lógicas e aritméticas, possui também os registradores e a unidade de controle, é o componente que dá a vida ao computador digamos assim.",
  "resposta": "CPU"
},
{
  "id": "2",
  "pergunta": "A unidade lógica aritmética, é a responsável pela realização das operações lógicas e aritméticas.",
  "resposta": "ULA"
},
{
  "id": "3",
  "pergunta": "Corresponde a uma memória local rápida do microprocessador, destinada ao armazenamento de dados e instruções. Ele pode ser um (Acumulador, Registrador de Flags, Contador de programa, Ponteiro da pilha).",
  "resposta": "REGISTRADORES"
},
{
  "id": "4",
  "pergunta": "A Memória de acesso randômico ou Memória de acesso aleatório é um tipo de memória que permite a leitura e a escrita, utilizada como memória primária em sistemas eletrônicos digitais.",
  "resposta": "RAM"
},
{
  "id": "5",
  "pergunta": "Permite a gravação de dados uma única vez, não sendo possível apagar ou editar nenhuma informação, somente acessar a mesma.",
  "resposta": "ROM"
},
{
  "id": "6",
  "pergunta": "É a memória não-volátil da Unidade de Comando Eletrônico (UCE) do sistema de injeção. Isso quer dizer que é capaz de armazenar as informações, para serem recuperadas e utilizadas posteriormente.",
  "resposta": "EPROM"
},
{
  "id": "7",
  "pergunta": "É um tipo de dispositivo de armazenamento não volátil, ou seja, mesmo se não tiver energia, manterá as informações que salvas nela.",
  "resposta": "FLASH"
},
{
  "id": "8",
  "pergunta": "Tem como função armazenar grandes quantidades de informações.",
  "resposta": "MEMÓRIA DE MASSA"
},
{
  "id": "9",
  "pergunta": "É uma característica dos computadores mais modernos que possibilita que determinados subsistemas de hardware dentro do computador acessem a memória do sistema, sem depender da unidade de processamento central (CPU).",
  "resposta": "DMA"
},
{
  "id": "10",
  "pergunta": 'É o nome de uma linha de controle na eletrônica digital usada para selecionar um dos circuitos integrados dentre vários conectados ao mesmo barramento de computador.',
  "resposta": "CS"
},
{
  "id": "11",
  "pergunta": "É um sistema de comunicação que transfere dados entre componentes dentro de um computador ou entre computadores. Esta expressão abrange todos os componentes e software de hardware relacionados, incluindo protocolos de comunicação.",
  "resposta": "ADDRESS BUS"
},
{
  "id": "12",
  "pergunta": "Um barramento de dados é um sistema dentro de um computador ou dispositivo, consistindo em um conector ou conjunto de fios, que fornece transporte de dados. Diferentes tipos de barramentos de dados evoluíram junto com computadores pessoais e outras peças de hardware. ",
  "resposta": "DATA BUS"
},
{
  "id": "13",
  "pergunta": "Fabricante: Intel – Inicio de fabricação: 2009 -- Características: possui uma controladora de gráficos PCI-Express embutida, utilizando uma interface de comunicação denominada DMI (Direct Media Interface), que agiliza ainda mais a comunicação com o chipset e pela falta do SMT.",
  "resposta": "I5"
},
{
  "id": "14",
  "pergunta": "Fabricante: Intel – Inicio de fabricação: 2008 -- Caractetísticas: QuickPath Interconnect(Criado para substituir o Front Side Bus. Funciona como uma interconexão de alta velocidade ponto a ponto. Cada processador possui seu controlador de memória (memória dedicada) e memória cache.",
  "resposta": "I7"
},
{
  "id": "15",
  "pergunta": "Processador com quatro núcleos",
  "resposta": "QUAD CORE"
},
{
  "id": "16",
  "pergunta": "Processador com dois núcleos",
  "resposta": "DUAL CORE"
}
]

let frames = 0;

var respostaOK = "";
var respostaNO = ""; 
var localCerto;
var localErrado;
var tamanhoFonte;

function pegarPerguntas(){
  console.log("teste");
  var id = Math.floor(Math.random() * perguntaResposta.length);
  var idNo = Math.floor(Math.random() * perguntaResposta.length);
  
  if(id != idNo){
    var pergunta = perguntaResposta[id].pergunta;
    respostaOK = perguntaResposta[id].resposta;
    respostaNO = perguntaResposta[idNo].resposta;
    perguntas.innerHTML = pergunta;
  }

  if(respostaOK == "MEMÓRIA DE MASSA" || respostaNO == "MEMÓRIA DE MASSA"){
    tamanhoFonte = 25;
  }else{
    tamanhoFonte = 35;
  }
  
  var yrandom = Math.floor(Math.random() * 2);
  console.log(yrandom);
  if (yrandom == 0) {
    localCerto = 170;
    localErrado = 385;
  }else{
    localCerto = 385;
    localErrado = 170;
  }
} 



const sprites = new Image();
sprites.src = './sprites2.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


// [Plano de Fundo]
const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height)

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );
    for(i=1;i<=4;i++){
      contexto.drawImage(
        sprites,
        planoDeFundo.spriteX, planoDeFundo.spriteY,
        planoDeFundo.largura, planoDeFundo.altura,
        (planoDeFundo.x + planoDeFundo.largura * i), planoDeFundo.y,
        planoDeFundo.largura, planoDeFundo.altura,
      );
    }
  },
};

// [Chao]
function criaChao() {
  const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    atualiza() {
      const movimentoDoChao = 1;
      const repeteEm = chao.largura / 2;
      const movimentacao = chao.x - movimentoDoChao;
      
      chao.x = movimentacao % repeteEm;
    },
    desenha() {
      contexto.drawImage(
        sprites,
        chao.spriteX, chao.spriteY,
        chao.largura, chao.altura,
        chao.x, chao.y,
        chao.largura, chao.altura,
      );
  
      for(i=1; i <= 6; i++){
        contexto.drawImage(
          sprites,
          chao.spriteX, chao.spriteY,
          chao.largura, chao.altura,
          (chao.x + chao.largura * i), chao.y,
          chao.largura, chao.altura,
        );
      }
    },
  };
  return chao;
}

function criaFlappyBird() {
  const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 180,
    pulo: 4.6,
    pula() {
      flappyBird.velocidade = -flappyBird.pulo;
    },
    gravidade: 0.25,
    velocidade: 0,
    atualiza() {
      if(fazColisao(flappyBird, globais.chao)) {
        mudaParaTela(Telas.GAME_OVER);
        return;
      }
  
      flappyBird.x = flappyBird.x + 2;

      flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
      flappyBird.y = flappyBird.y + flappyBird.velocidade;
    },
    movimentos: [
      { spriteX: 0, spriteY: 0, }, // asa pra cima
      { spriteX: 0, spriteY: 26, }, // asa no meio 
      { spriteX: 0, spriteY: 52, }, // asa pra baixo
      { spriteX: 0, spriteY: 26, }, // asa no meio 
    ],
    frameAtual: 0,
    atualizaOFrameAtual() {     
      const intervaloDeFrames = 10;
      const passouOIntervalo = frames % intervaloDeFrames === 0;

      if(passouOIntervalo) {
        const baseDoIncremento = 1;
        const incremento = baseDoIncremento + flappyBird.frameAtual;
        const baseRepeticao = flappyBird.movimentos.length;
        flappyBird.frameAtual = incremento % baseRepeticao;
      }
        
    },
    desenha() {
      flappyBird.atualizaOFrameAtual();
      const { spriteX, spriteY } = flappyBird.movimentos[flappyBird.frameAtual];

      contexto.drawImage(
        sprites,
        spriteX, spriteY, // Sprite X, Sprite Y
        flappyBird.largura, flappyBird.altura, // Tamanho do recorte na sprite
        flappyBird.x, flappyBird.y,
        flappyBird.largura, flappyBird.altura,
      );
    }
  }
  return flappyBird;  
}

function fazColisao(flappyBird, chao) {
  const flappyBirdY = flappyBird.y + flappyBird.altura;
  const chaoY = chao.y;

  if(flappyBirdY >= chaoY) {
    return true;
  }

  return false;
}


/// [mensagemGetReady]
const mensagemGetReady = {
  sX: 134,
  sY: 0,
  w: 174,
  h: 152,
  x: (canvas.width / 2) - 174 / 2,
  y: 50,
  desenha() {
    contexto.drawImage(
      sprites,
      mensagemGetReady.sX, mensagemGetReady.sY,
      mensagemGetReady.w, mensagemGetReady.h,
      mensagemGetReady.x, mensagemGetReady.y,
      mensagemGetReady.w, mensagemGetReady.h
    );
  }
}

// [mensagemGameOver]
const mensagemGameOver = {
  sX: 134,
  sY: 153,
  w: 226,
  h: 200,
  x: (canvas.width / 2) - 226 / 2,
  y: 50,
  desenha() {
    contexto.drawImage(
      sprites,
      mensagemGameOver.sX, mensagemGameOver.sY,
      mensagemGameOver.w, mensagemGameOver.h,
      mensagemGameOver.x, mensagemGameOver.y,
      mensagemGameOver.w, mensagemGameOver.h
    );
  }
}

const mensagemGameWin = {
  sX: 140,
  sY: 384,
  w: 272,
  h: 122,
  x: (canvas.width / 2) - 226 / 2,
  y: 80,
  desenha() {
    contexto.drawImage(
      sprites,
      mensagemGameWin.sX, mensagemGameWin.sY,
      mensagemGameWin.w, mensagemGameWin.h,
      mensagemGameWin.x, mensagemGameWin.y,
      mensagemGameWin.w, mensagemGameWin.h
    );
  },
}

// 
// [Canos]
// 

function criaCanos() {
  const canos = {
    largura: 52,
    altura: 400,
    chao: {
      spriteX: 0,
      spriteY: 169,
    },
    ceu: {
      spriteX: 52,
      spriteY: 169,
    },
    meio: {
      spriteX: 614,
      spriteY: 624,
      largura: 52,
      altura: 96,
    },
    x: 840,
    canoCeuY: -300,
    canoMeioY: (canvas.height / 2) - 96,
    canoChaoY: canvas.height - 200,
    espaco: 80,
    desenha() {
        // [Cano do Céu]
        contexto.drawImage(
          sprites, 
          canos.ceu.spriteX, canos.ceu.spriteY,
          canos.largura, canos.altura,
          canos.x, canos.canoCeuY,
          canos.largura, canos.altura,
        )

        // [Cano do meio]
        contexto.drawImage(
          sprites, 
          canos.meio.spriteX, canos.meio.spriteY,
          canos.meio.largura, canos.meio.altura,
          canos.x, canos.canoMeioY,
          canos.meio.largura, canos.meio.altura,
        )


        // [Cano do Chão]
        contexto.drawImage(
          sprites, 
          canos.chao.spriteX, canos.chao.spriteY,
          canos.largura, canos.altura,
          canos.x, canos.canoChaoY,
          canos.largura, canos.altura,
        )
    },
    atualiza() {      
      
      if(temColisaoComOFlappyBird(globais.flappyBird, canos)) {
        mudaParaTela(Telas.GAME_OVER);
        return;
      }
    }
  }

  return canos;
}

// [Colisão com o cano --- teste]
function temColisaoComOFlappyBird(flappyBird, canos) {

  const flappyBirdX = flappyBird.x;
  const peFlappyBird = flappyBird.y + flappyBird.altura;
  const cabecaFlappyBird = flappyBird.y;

  const canoX = canos.x;
  const canoCeu = canos.canoCeuY + canos.altura;
  const canoMeio = canos.canoMeioY;
  const canoChao = canos.canoChaoY;

  
    if((flappyBirdX + (flappyBird.largura - 5)) >= canoX) {
      if (cabecaFlappyBird <= canoCeu) {
        return true; 
      }

      if(peFlappyBird > canoMeio && peFlappyBird <= 324){
        return true;
      }

      if (peFlappyBird >= canoChao){
        return true;
      }
    }

  return false;
}

function criaResp() {
  const resposta = {
    respOk: respostaOK,
    respNo: respostaNO,
    tamanho: tamanhoFonte,
    x: 820,
    respOkY: localCerto,
    respNoY: localErrado,
    desenha() {
        // [Primeira resp]
        contexto.font = `${resposta.tamanho}px "Press Start 2P"`;
        contexto.strokeStyle = 'white';
        contexto.strokeText(
          resposta.respOk,
          resposta.x, resposta.respOkY
        )

        // [Segunda resp]
        contexto.strokeText(
          resposta.respNo,
          resposta.x, resposta.respNoY
        )
    },
    atualiza() {      
      if(respostaCerta(globais.flappyBird, resposta)){
        mudaParaTela(Telas.GAME_WIN);
        return;
      }

      if(respostaErrada(globais.flappyBird, resposta)){
        mudaParaTela(Telas.GAME_OVER);
        return;
      }
    }
  }
  return resposta;
}

function respostaCerta(flappyBird, resposta) {

  const flappyBirdX = flappyBird.x;
  const peFlappyBird = flappyBird.y + flappyBird.altura;

  const respX = resposta.x;
  const respOk = resposta.respOkY;
  const respNo = resposta.respNoY;

  
    if((flappyBirdX + (flappyBird.largura - 5)) >= respX) {
      if(respOk === 170){
        if (peFlappyBird >= 120 && peFlappyBird <= 214) {
          console.log("Acertou!");
          return true; 
        }
      }else{
        if (peFlappyBird <= 400 && peFlappyBird >= 324) {
          console.log("Acertou!");
          return true; 
        }
      }

      if(respNo === 385){
        if (peFlappyBird <= 400 && peFlappyBird >= 324){
          console.log("Errou!");
          return false;
        }
      }else{
        if (peFlappyBird >= 120 && peFlappyBird <= 214) {
          console.log("Errou!");
          return false; 
        }
      }
    }
    return false;
}

function respostaErrada(flappyBird, resposta) {

  const flappyBirdX = flappyBird.x;
  const peFlappyBird = flappyBird.y + flappyBird.altura;

  const respX = resposta.x;
  const respOk = resposta.respOkY;
  const respNo = resposta.respNoY;

  
    if((flappyBirdX + (flappyBird.largura - 5)) >= respX) {
      if(respOk === 170){
        if (peFlappyBird >= 120 && peFlappyBird <= 214) {
          console.log("Acertou!");
          return false; 
        }
      }else{
        if (peFlappyBird <= 400 && peFlappyBird >= 324) {
          console.log("Acertou!");
          return false; 
        }
      }

      if(respNo === 385){
        if (peFlappyBird <= 400 && peFlappyBird >= 324){
          console.log("Errou!");
          return true;
        }
      }else{
        if (peFlappyBird >= 120 && peFlappyBird <= 214) {
          console.log("Errou!");
          return true; 
        }
      }
    }
    return false;
}

// 
// [Telas]
// 
const globais = {};
let telaAtiva = {};
function mudaParaTela(novaTela) {
  telaAtiva = novaTela;

  if(telaAtiva.inicializa) {
    telaAtiva.inicializa();
  }
}

const Telas = {
  INICIO: {
    inicializa() {
      globais.flappyBird = criaFlappyBird();
      globais.chao = criaChao();
      globais.canos = criaCanos();
    },
    desenha() {
      planoDeFundo.desenha();
      globais.flappyBird.desenha();
      
      globais.chao.desenha();
      mensagemGetReady.desenha();
    },
    click() {
      mudaParaTela(Telas.JOGO);
    },
    atualiza() {
      globais.chao.atualiza();
    }
  }
};

Telas.JOGO = {
  inicializa() {
    globais.resposta = criaResp();
  },
  desenha() {
    planoDeFundo.desenha();
    globais.canos.desenha();
    globais.chao.desenha();
    globais.flappyBird.desenha();
    globais.resposta.desenha();
  },
  click() {
    globais.flappyBird.pula();
  },
  atualiza() {
    globais.canos.atualiza();
    globais.chao.atualiza();
    globais.flappyBird.atualiza();
    globais.resposta.atualiza();
  }
};

Telas.GAME_OVER = {
  desenha() {
    mensagemGameOver.desenha();
  },
  atualiza() {
    
  },
  click() {
    mudaParaTela(Telas.INICIO);
  }
}

Telas.GAME_WIN = {
  desenha() {
    mensagemGameWin.desenha();
  },
  atualiza() {

  },
  click() {
    location.reload();
    mudaParaTela(Telas.INICIO);
  }
}

function loop() {

  telaAtiva.desenha();
  telaAtiva.atualiza();

  frames = frames + 1;
  requestAnimationFrame(loop);
}


window.addEventListener('click', function() {
  if(telaAtiva.click) {
    telaAtiva.click();
  }
});

window.addEventListener('keydown', function(e) {
  var press = e.which || e.keyCode || 0;
  if(press == 32) {
    telaAtiva.click();
  }
});

mudaParaTela(Telas.INICIO);
loop();
pegarPerguntas();