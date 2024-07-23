// Instruções para entrega
// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
class Heroi{
    constructor(nome,idade,tipo){
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
      this.ataque = "";
    }
    
    qualOTipo(tipo){
      let ataque;
      switch(tipo){
       case "mago":
            ataque = "magia";
            break;
        case "guerreiro":
            ataque = "magia";
            break;
        case "monge":
            ataque = "artes marciais";
            break;
        case "ninja":
         ataque = "shuriken";
         break;
        default:
         ataque = "Tipo não encontrado";
         break;
      }
      return ataque;
    }
    atacar(ataque){
      
      console.log(`O ${this.tipo} atacbou usando ${ataque}`)
    }
  }
  
  let heroiSalvando = new Heroi("Hector",31,"ninja")
  let ataques = heroiSalvando.qualOTipo(heroiSalvando.tipo)
  
  heroiSalvando.atacar(ataques);
// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada
 

 
// Bons estudos 😉
// CONTEÚDOS
// INFORMAÇÕES
// Desafio Lançado!
// Entendendo o Desafio