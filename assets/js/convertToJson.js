const fs = require('fs');

const produto = {
    id : 1,
    autor : 'Danilo Prado',
    titulo : '',
    data_post : 0.15,
    content : `<h1 class="blog-title">CRISE? CRIE! DECRETE SEU PRÓPRIO IMPEACHMENT E SEJA FELIZ!</h1>
    <p class="subtitle" id="about">COMECE AGORA! Nem que seja mudando seu corte de cabelo!</p>
    <p class="blog-header-info">
        <span>Autor: Danilo Prado</span>
        <span>18/05/2016</span>
    </p>
    <img class="blog-image" src="assets/img/blog/impeachment.jpg" alt="">
    <p class="blog-content">
        
    
    O cenário atual no Brasil é bastante delicado, o que nos traz muitos reflexos em todos os setores de nossas vidas. Principalmente no Profissional, o mais importante, pois é a base para que tenhamos sustentabilidade.</br></br>
    
    Momentos como estes podem se tornar excelentes oportunidades para nos reinventarmos. Como dizem, “enquanto uns choram podemos vender lenços”. Na pressão e na crise devemos nos forçar a sermos criativos e pensarmos fora da “caixinha”. Aliás, deveríamos fazer isso sempre, mas quando não somos ameaçados por nada temos a tendência de estabelecermos uma “zona de conforto”. Isto acontece nos relacionamentos, no nosso autodesenvolvimento, na família, no trabalho e também nas amizades. Não nos provocamos à criatividade, não nos permitimos  viver novas experiências e acabamos, ou deixando a vida nos levar, ou cairmos numa rotina enfadonha. Quando nos damos conta, talvez possa ser tarde demais, até mesmo porque estamos vivendo um mundo interativo que nos cobra estarmos ALERTAS (On & OFF).</br></br>
    
    Convido você agora a declarar o seu IMPEACHMENT:</br></br>
    
    <strong>FORA ZONA DE CONFORTO!</strong> – Escreva num papel todas as situações que não estão satisfatórias em sua vida. Coloque-as na ordem da mais importante para a menos importante. Feito isto, escolha aquela que está mais “tirando seu sono” e monte um plano de ação;</br></br>
    <strong>FORA ENERGIAS NEGATIVAS!</strong> – Observe à sua volta quem são as pessoas mais presentes no seu dia à dia (amigos, colegas de trabalho, família…). É importante deixar claro aqui que, com relação aos amigos e família, principalmente, blindá-las temporariamente nesse seu momento, não significa que não goste delas, caso estejam vibrando negativamente. Deixe junto a você, apenas pessoas que tem como proposta REAGIR, e não sucumbir à CRISE;</br></br>
    <strong>FORA DESORGANIZAÇÃO!</strong> – Planejar e organizar sua vida como um todo é primordial. Na “bagunça” é exatamente onde nos perdermos e ficamos sem referências. Está endividado? Mesmo querendo se desculpar pelas dificuldades econômicas do país, talvez seja uma excelente hora para negociar dívidas, minimizando seus problemas. Seus credores também estão precisando se reinventar, precisando de dinheiro… É quando praticam uma negociação boa para as partes. Organize-se em todos os seus recursos para criar SUSTENTABILIDADE;</br></br>
    <strong>FORA IGNORÂNCIA!</strong> – Leia, estude, assista programas diversificados e alimente-se de CONHECIMENTO! A ignorância, falta de conhecimento e não grosseria, nos torna cegos às possibilidades. Ela é inimiga do sucesso e quer nos manter numa vida MEDÍOCRE (mediana) onde consideramos que é assim mesmo ou que tá “MAIS OU MENOS”. Transforme o MENOS em MAIS e queira para você uma SAUDÁVEL!</br></br>
    <strong>FORA PROJETO VERÃO!</strong> – Nós temos a tendência de nos motivarmos para alguns eventos. Por exemplo, malhar e ficar sarado para o Carnaval. Começamos alguns planos, mas devido às adversidades da vida ou acomodação, muitas vezes adiamos para o próximo verão. Também achamos que virada de ano é que devemos mudar. NÃO! Devemos mudar sempre, em todos os períodos do ano. É IMPERATIVO que abramos nossa mente para enxergarmos OPORTUNIDADES em todos os momentos e não apenas nas “estações” propícias. Existem comerciantes que vendem muito mais roupas de frio no verão! Estratégias (plano de ação) e táticas (meios para operacionalizar seu plano) devem andar juntos.</br></br>
    Ficam aqui dicas para que você definitivamente parta para uma ZONA DE ESFORÇO! Ficar aí onde você está, conformado, ou se VITIMIZANDO não levará você a lugar nenhum. Ao contrário, a tendência é só piorar!</br></br>
    
    MEXA-SE! MOVA-SE! REPAGINE-SE! REINVENTE-SE!</br></br>
    
    COMECE AGORA! Nem que seja mudando seu corte de cabelo!</br></br>
    </p>  
    
    `
}

fs.writeFile(__dirname + './../../blog/blog.json', JSON.stringify(produto), err =>{
    console.log(err || 'Aquivo Salvo!')
})