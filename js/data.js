/* Conteúdo dos jogos. Edite os textos aqui, sem mexer no layout.
   Campos: nome, sub (subtema), tempo, gente, mat (materiais), obj, hab,
   passos (lista), perg (lista) e icon (SVG).
   pdf: caminho do PDF dos cartões, por exemplo "assets/cartoes/rede-desconectada.pdf".
   Enquanto estiver vazio, o botão de download aparece desativado. */
var GAMES=[
{id:1,gc:"#0F4C5C",pdf:"",nome:"Rede (Des)Conectada",curto:"Simule com barbante como uma notícia se espalha em uma rede social.",
 sub:"Disseminação de informação e fake news",tempo:"45 min",gente:"20 a 35 estudantes",mat:"Barbante, cartões de perfil e cartões de notícia",
 obj:"Simular como uma informação, verdadeira ou falsa, se propaga em uma rede social, para analisar criticamente a origem e o alcance dos conteúdos.",
 hab:"Reconhecer o impacto da desinformação e o papel de cada usuário na propagação de conteúdo em rede.",
 passos:["Cada estudante recebe um cartão de perfil e a turma forma um círculo. Cada perfil é um nó da rede.","Entregue os cartões de notícia a dois estudantes, que serão a origem. O verso de cada notícia diz se ela é verdadeira ou falsa, e só o professor sabe.","Quem recebe uma notícia escolhe: compartilhar (segura o barbante e passa o novelo a um colega) ou checar (pede ao professor a fonte da notícia).","Faça rodadas de 5 minutos, com novas notícias entrando na rede a cada rodada.","Revele o verso dos cartões. Observe a teia formada: quantos perfis a notícia falsa alcançou e quem checou antes de compartilhar."],
 perg:["O que fez você compartilhar ou checar?","Quem viu a notícia falsa sem ter compartilhado? Ela chegou até essa pessoa mesmo assim?","Que sinais ajudam a desconfiar de uma notícia antes de repassar?"],
 icon:'<svg viewBox="0 0 48 48" aria-hidden="true"><g stroke="currentColor" stroke-width="2.5" fill="none"><path d="M10 12 24 26 38 10M24 26v14"/></g><circle cx="10" cy="12" r="5" fill="#E4572E"/><circle cx="38" cy="10" r="5" fill="#F2B90F"/><circle cx="24" cy="26" r="5" fill="#0F4C5C"/><circle cx="24" cy="40" r="4" fill="#E4572E"/></svg>'},
{id:2,gc:"#F2B90F",pdf:"",nome:"Pegadas Digitais",curto:"Descubra o que um perfil fictício revelou sem perceber.",
 sub:"Privacidade e proteção de dados pessoais",tempo:"40 min",gente:"Grupos de 4 a 5 estudantes",mat:"Cartas do perfil fictício em envelopes, painel de semáforo",
 obj:"Discutir, a partir de um perfil fictício revelado aos poucos, o que deveria ou não ser compartilhado publicamente, sensibilizando para a privacidade.",
 hab:"Compreender a exposição de dados pessoais e as consequências dela no ambiente digital.",
 passos:["Divida a turma em grupos. Cada grupo recebe o painel de semáforo: verde (pode compartilhar), amarelo (pensar antes) e vermelho (nunca compartilhar).","Apresente o perfil fictício (nome, idade, foto e bio). Ele é inventado e não representa ninguém real.","A cada rodada, o professor revela uma carta de um envelope: rotina, escola, localização, foto de uniforme, e assim por diante.","Os grupos decidem em qual cor do semáforo a informação se encaixa e explicam a escolha.","Ao final, juntem as cartas e mostrem o que alguém consegue descobrir sobre o perfil combinando todas elas."],
 perg:["Qual informação parecia inofensiva sozinha, mas ficou arriscada junto com as outras?","Quem poderia usar essas informações e para quê?","O que o perfil poderia ter feito diferente?"],
 icon:'<svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="16" cy="30" rx="7" ry="10" fill="#F2B90F"/><ellipse cx="32" cy="18" rx="7" ry="10" fill="#0F4C5C"/><g fill="#E4572E"><circle cx="12" cy="15" r="2.5"/><circle cx="17" cy="13" r="2.5"/><circle cx="36" cy="37" r="2.5"/><circle cx="31" cy="39" r="2.5"/></g></svg>'},
{id:3,gc:"#E4572E",pdf:"",nome:"Tribunal do Comentário",curto:"Dramatize casos de cyberbullying e decida como moderar.",
 sub:"Ética, respeito e convivência online",tempo:"50 min",gente:"Grupos de 4 a 5 estudantes",mat:"Cartões de caso, fichas de papéis, ficha de moderação, regras da comunidade",
 obj:"Analisar situações de cyberbullying e discurso de ódio online e decidir uma moderação com base em regras dadas, discutindo os limites da convivência digital.",
 hab:"Usar as tecnologias digitais de forma ética, crítica e responsável, reconhecendo condutas nocivas e formas de mediação.",
 passos:["Distribua as regras da comunidade, que valem como a lei do tribunal.","Cada grupo sorteia um cartão de caso, com um comentário e o contexto dele.","Dentro do grupo, distribuam os papéis: autor do comentário, pessoa atingida, plateia e moderador.","O grupo encena o caso em 3 minutos. O moderador consulta as regras e preenche a ficha: advertir, remover o comentário, orientar ou encaminhar a um adulto.","Cada moderador apresenta a decisão para a turma, que pode concordar ou apresentar outra saída."],
 perg:["A decisão seguiu as regras da comunidade? Qual regra pesou mais?","Como a pessoa atingida se sentiu? O que a plateia poderia ter feito?","Onde termina a liberdade de opinião e começa a ofensa?"],
 icon:'<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 8h36v24H26l-8 8v-8H6z" fill="#E4572E"/><path d="M15 17h18M15 24h11" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>'}
];
