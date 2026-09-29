/* Lógica do portal: rotas por hash, renderização das páginas e preferências de acessibilidade. */
var $=function(s){return document.querySelector(s)},main=$("#main"),root=document.documentElement;
function nav(cur){$("#nav").innerHTML='<li><a href="#/" '+(cur===0?'aria-current="page"':'')+'>Início</a></li>'+GAMES.map(function(g){return '<li><a href="#/jogo/'+g.id+'" '+(cur===g.id?'aria-current="page"':'')+'>'+g.nome+'</a></li>'}).join("")}
function home(){
 return '<section class="hero"><h1>Cultura digital em sala de aula, sem computador</h1><p class="lead">Três jogos para turmas de 8º ano usarem em qualquer escola, com barbante, papel e conversa. Escolha um jogo para ver o passo a passo.</p></section>'+
 '<div class="grid">'+GAMES.map(function(g){return '<article class="card" style="--gc:'+g.gc+'"><div class="band"></div><div class="in">'+g.icon+'<h2 style="font-size:1.25rem;margin:.3rem 0 0">'+g.nome+'</h2><p class="tag">'+g.sub+' · '+g.tempo+'</p><p style="margin:0">'+g.curto+'</p><a class="btn" href="#/jogo/'+g.id+'">Ver como aplicar</a></div></article>'}).join("")+'</div>'+
 '<h2>Como usar em uma aula</h2><ol class="steps" style="--gc:var(--yellow)"><li><b>Prepare.</b> Baixe e imprima os cartões do jogo. Cada página de jogo lista os materiais.</li><li><b>Jogue.</b> Siga o passo a passo com a turma. Cada jogo cabe em uma aula.</li><li><b>Converse.</b> Feche com as perguntas de discussão. É aí que a turma liga o jogo ao dia a dia nas redes.</li></ol>'}
function game(g){
 return '<a class="crumb" href="#/">← Todos os jogos</a><section style="--gc:'+g.gc+'"><div class="hero" style="padding-top:1.5rem"><p class="tag">'+g.sub+'</p><h1>'+g.nome+'</h1></div>'+
 '<ul class="meta"><li><b>Tempo</b>'+g.tempo+'</li><li><b>Participantes</b>'+g.gente+'</li><li><b>Materiais</b>'+g.mat+'</li></ul>'+
 '<div class="two" style="margin-top:2rem"><div class="bnd"><h3>Objetivo</h3><p>'+g.obj+'</p></div><div class="bnd"><h3>Habilidade trabalhada (BNCC Computação)</h3><p>'+g.hab+'</p></div></div>'+
 '<h2>Passo a passo</h2><ol class="steps">'+g.passos.map(function(p){return '<li>'+p+'</li>'}).join("")+'</ol>'+
 '<h2>Perguntas para conversar depois</h2><ul class="plain">'+g.perg.map(function(p){return '<li>'+p+'</li>'}).join("")+'</ul>'+
 '<div class="dl"><h3>Materiais para imprimir</h3>'+(g.pdf?'<p>Imprima em papel A4.</p><a class="btn" href="'+g.pdf+'" download>Baixar PDF</a>':'<p>Os cartões deste jogo ainda estão em produção.</p><button class="btn off" disabled>Baixar PDF (em breve)</button>')+'</div></section>'}
function route(){
 var m=location.hash.match(/#\/jogo\/(\d)/),g=m&&GAMES[m[1]-1];
 main.innerHTML=g?game(g):home();nav(g?g.id:0);
 document.title=(g?g.nome+" — ":"")+"Computação Desplugada 8º ano";
 window.scrollTo(0,0);main.focus({preventScroll:true});
}
window.addEventListener("hashchange",route);
var pref={size:0,hc:false};
try{pref=Object.assign(pref,JSON.parse(localStorage.getItem("cd-pref")||"{}"))}catch(e){}
function apply(){root.dataset.size=pref.size;if(pref.hc)root.dataset.contrast="high";else root.removeAttribute("data-contrast");$("#hc").setAttribute("aria-pressed",pref.hc);try{localStorage.setItem("cd-pref",JSON.stringify(pref))}catch(e){}}
$("#sm").onclick=function(){pref.size=Math.max(0,pref.size-1);apply()};
$("#lg").onclick=function(){pref.size=Math.min(2,pref.size+1);apply()};
$("#hc").onclick=function(){pref.hc=!pref.hc;apply()};
apply();route();
