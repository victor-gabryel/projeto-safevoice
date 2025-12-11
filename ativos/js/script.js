/* =========================================
   CONTROLE DE SCROLL DO BODY
========================================= */
function travarScrollPagina() {
  document.body.classList.add("body-no-scroll");
}

function liberarScrollPagina() {
  document.body.classList.remove("body-no-scroll");
}



/* =========================================
   FUNÇÕES UNIVERSAIS PARA ABRIR E FECHAR MODAIS
========================================= */
function abrirModal(idModal) {
  const modal = document.getElementById(idModal);
  if (!modal) return;

  modal.style.display = "flex";
  travarScrollPagina();
}

function fecharModal(idModal) {
  const modal = document.getElementById(idModal);
  if (!modal) return;

  modal.style.display = "none";
  liberarScrollPagina();
}



/* =========================================
   FECHAR MODAL CLICANDO FORA DO CONTEÚDO
========================================= */
window.addEventListener("click", function (event) {
  const modais = document.querySelectorAll(".FormatoModals");

  modais.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
      liberarScrollPagina();
    }
  });
});



/* =========================================
   FUNÇÕES ESPECÍFICAS (COMPATIBILIDADE)
========================================= */
// Mordal Form
function abrir_FormDenun() { abrirModal("FormDenun"); }
function fechar_FormDenun() { fecharModal("FormDenun"); }

// Modal Assédio
function abrir_ModalAssedio() { abrirModal("ModalAssedio"); }
function fechar_ModalAssedio() { fecharModal("ModalAssedio"); }

// Modal Bullying
function abrir_ModalBullying() { abrirModal("ModalBullying"); }
function fechar_ModalBullying() { fecharModal("ModalBullying"); }

// Modal Corrupcao
function abrir_ModalCorrupcao() { abrirModal("ModalCorrupcao"); }
function fechar_ModalCorrupcao() { fecharModal("ModalCorrupcao"); }

// Modal Dicriminacao
function abrir_ModalDiscriminacao() { abrirModal("ModalDiscriminacao"); }
function fechar_ModalDiscriminacao() { fecharModal("ModalDiscriminacao"); }

// Modal Violencia
function abrir_ModalViolencia() { abrirModal("ModalViolencia"); }
function fechar_ModalViolencia() { fecharModal("ModalViolencia"); }





/* =========================================
   FETCH DOS MODAIS (CARREGAMENTO DINÂMICO)
========================================= */
// Modal Violência
fetch('componentes/ModalViolencia.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('ModalViolenciaContainer');
    if (container) container.innerHTML = html;
});

// Modal Bullying
fetch('componentes/ModalBullying.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('ModalBullyingContainer');
    if (container) container.innerHTML = html;
});

// Modal Corrupção
fetch('componentes/ModalCorrupcao.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('ModalCorrupcaoContainer');
    if (container) container.innerHTML = html;
});

// Modal Discriminação
fetch('componentes/ModalDiscriminacao.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('ModalDiscriminacaoContainer');
    if (container) container.innerHTML = html;
});

// Modal Assédio
fetch('componentes/ModalAssedio.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('ModalAssedioContainer');
    if (container) container.innerHTML = html;
});



// ----------------------------
// Sessão Campanha
// ----------------------------

  // Carrega o conteúdo baseado no mês atual automaticamente
document.addEventListener('DOMContentLoaded', function() {
    carregarConteudoDoMes();
    
});

function carregarConteudoDoMes() {
    // Pega o mês atual (0 = Janeiro, 11 = Dezembro)
    const mesAtual = new Date().getMonth();
    
    let conteudo = {};
    
    // Switch case para cada mês
    switch(mesAtual) {
        case 0: // Janeiro
            conteudo = {
                titulo: "Março Azul-Marinho e Lilás: Cuidar da Saúde é um Ato de Amor",
                descricao1: "O Março Azul-Marinho e Lilás é dedicado à conscientização sobre a prevenção e o diagnóstico precoce de importantes tipos de câncer. O Azul-Marinho reforça a atenção ao câncer colorretal, incentivando hábitos saudáveis, exames regulares e o cuidado com sintomas muitas vezes negligenciados. Já o Lilás destaca o câncer do colo do útero, lembrando a importância da vacinação contra o HPV e da realização periódica do exame preventivo (Papanicolau). Ao abordar esses temas de forma clara e responsável, o Março Azul-Marinho e Lilás convida a população a vencer o medo, buscar informação de qualidade e assumir um papel ativo no cuidado com a própria saúde, porque prevenir e se cuidar é um ato de amor à vida.",
                descricao2: "",
                imagem: "ativos/midia/janeiro.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/inss/pt-br/noticias/janeiro-branco-mes-de-conscientizacao-pela-saude-mental-e-emocional"
            };
            break;
            
        case 1: // Fevereiro
            conteudo = {
                titulo: "Fevereiro Roxo e Laranja: Conscientização que Transforma Vidas",
                descricao1: "O Fevereiro Roxo e Laranja é um mês crucial para a conscientização sobre doenças que impactam milhões de vidas. O Roxo ilumina o Lúpus, o Alzheimer e a Fibromialgia, buscando combater a desinformação, incentivar o diagnóstico precoce e promover o acolhimento. Já o Laranja foca na Leucemia, destacando a vital importância da doação de medula óssea e do diagnóstico rápido. Juntos, esses movimentos reforçam que a informação é uma ferramenta poderosa para salvar vidas, reduzir o sofrimento e fortalecer o apoio a pacientes e suas famílias, construindo uma sociedade mais empática e preparada.",
                descricao2: "",
                imagem: "ativos/midia/fevereiro.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/cetene/pt-br/assuntos/noticias/campanha-fevereiro-roxo-e-laranja"
            };
            break;
            
        case 2: // Março
            conteudo = {
                titulo: "Março Azul-Marinho e Lilás: Cuidar da Saúde é um Ato de Amor",
                descricao1: "O Março Azul-Marinho e Lilás é dedicado à conscientização sobre a prevenção e o diagnóstico precoce de importantes tipos de câncer. O Azul-Marinho reforça a atenção ao câncer colorretal, incentivando hábitos saudáveis, exames regulares e o cuidado com sintomas muitas vezes negligenciados. Já o Lilás destaca o câncer do colo do útero, lembrando a importância da vacinação contra o HPV e da realização periódica do exame preventivo (Papanicolau). Ao abordar esses temas de forma clara e responsável, o Março Azul-Marinho e Lilás convida a população a vencer o medo, buscar informação de qualidade e assumir um papel ativo no cuidado com a própria saúde, porque prevenir e se cuidar é um ato de amor à vida.",
                descricao2: "",
                imagem: "ativos/midia/março.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/hfa/pt-br/marco-azul-marinho"
            };
            break;
            
        case 3: // Abril
            conteudo = {
                titulo: "Abril Verde: Segurança e Saúde no Trabalho em Primeiro Lugar",
                descricao1: "O Abril Verde é um mês dedicado à conscientização sobre a segurança e a saúde no trabalho. A campanha reforça a importância de ambientes laborais mais seguros, prevenção de acidentes, redução de riscos e cuidado com a saúde física e mental dos trabalhadores. Em um cenário em que muitas pessoas adoecem ou se acidentam exercendo suas funções, o Abril Verde chama a atenção para a necessidade de políticas de prevenção, uso de equipamentos de proteção, capacitação adequada e uma cultura organizacional que valorize a vida acima de qualquer meta. Promover segurança no trabalho não é apenas uma obrigação legal, é um gesto de respeito, responsabilidade e humanidade com todos que dedicam seu tempo e esforço para construir o dia a dia das empresas e da sociedade.",
                descricao2: "",
                imagem: "ativos/midia/abril.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/fundacentro/pt-br/comunicacao/noticias/noticias/2025/abril/abril-verde-alerta-para-a-saude-e-seguranca-no-trabalho"
            };
            break;
            
        case 4: // Maio
            conteudo = {
                titulo: "Maio Laranja: Proteção da Infância é Responsabilidade de Todos",
                descricao1: "O Maio Laranja é dedicado à conscientização e combate ao abuso e à exploração sexual de crianças e adolescentes. A campanha reforça a importância de proteger a infância, falar abertamente sobre o tema, quebrar o silêncio e reconhecer sinais de violência que muitas vezes acontecem de forma escondida. Mais do que informar, o Maio Laranja alerta para a necessidade de denunciar suspeitas, fortalecer redes de proteção, orientar famílias e educar a sociedade para que nenhuma criança cresça marcada por esse tipo de violência. Proteger crianças e adolescentes é um dever coletivo e um compromisso ético com o presente e o futuro.",
                descricao2: "",
                imagem: "ativos/midia/maio.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/pt-br/noticias/assistencia-social/2022/08/lei-institui-a-campanha-201cmaio-laranja201d-de-enfrentamento-ao-abuso-e-a-violencia-sexual-de-criancas-e-adolescentes"
            };
            break;
            
        case 5: // Junho
            conteudo = {
                titulo: "Junho Violeta: Conscientização sobre a Violência contra a Pessoa Idosa",
                descricao1: "O Junho Violeta é dedicado à conscientização e ao combate à violência contra a pessoa idosa. A campanha chama a atenção para diferentes formas de agressão – física, psicológica, financeira, negligência e abandono – que muitas vezes acontecem de forma silenciosa, até dentro da própria família. Falar sobre o tema é fundamental para quebrar o silêncio, incentivar denúncias, fortalecer redes de apoio e promover uma cultura de respeito, cuidado e dignidade para quem já contribuiu tanto com a sociedade. O Junho Violeta lembra que envelhecer com proteção, afeto e direitos garantidos é um dever de todos nós.",
                descricao2: "",
                imagem: "ativos/midia/junho.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/mdh/pt-br/comunicacao/campanhas-do-mdhc/2024/junho-violeta-respeito-a-todas-as-fases-da-vida"
            };
            break;
            
        case 6: // Julho
            conteudo = {
                titulo: "Julho Amarelo: Conscientização sobre as Hepatites Virais",
                descricao1: "O Julho Amarelo é dedicado à conscientização, prevenção e diagnóstico das hepatites virais, doenças que afetam o fígado e, muitas vezes, evoluem de forma silenciosa. A campanha reforça a importância de exames regulares, vacinação (quando disponível), uso de materiais esterilizados e práticas seguras que evitem a transmissão. Informar a população sobre formas de contágio, sintomas e tratamento é essencial para reduzir casos graves, evitar complicações como cirrose e câncer de fígado e salvar vidas. O Julho Amarelo lembra que cuidar do fígado é cuidar da saúde como um todo – e que a prevenção ainda é o caminho mais seguro e inteligente.",
                descricao2: "",
                imagem: "ativos/midia/julho.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/saude/pt-br/assuntos/saude-com-ciencia/noticias/2024/julho/julho-amarelo-entenda-a-importancia-da-prevencao-e-controle-das-hepatites-virais"
            };
            break;
            
        case 7: // Agosto
            conteudo = {
                titulo: "Agosto Lilás: Combate à Violência contra a Mulher",
                descricao1: "O Agosto Lilás é dedicado à conscientização e ao combate à violência contra a mulher em todas as suas formas: física, psicológica, sexual, moral e patrimonial. A campanha reforça a importância de informar sobre direitos, divulgar canais de denúncia, fortalecer redes de proteção e incentivar que mulheres em situação de violência não se sintam sozinhas ou culpadas. Falar sobre o tema é essencial para quebrar o ciclo de silêncio e medo, combater o machismo estrutural e promover relações mais respeitosas e igualitárias. O Agosto Lilás lembra que violência contra a mulher não é um problema privado, é uma questão social e de direitos humanos, e que toda a sociedade é responsável por prevenir, acolher e apoiar.",
                descricao2: "",
                imagem: "ativos/midia/agosto.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/mulheres/pt-br/central-de-conteudos/noticias/2025/agosto/agosto-lilas-mes-sera-marcado-por-acoes-de-mobilizacao-prevencao-e-fortalecimento-da-rede-de-protecao-as-mulheres"
            };
            break;
            
        case 8: // Setembro
            conteudo = {
                titulo: "Setembro Amarelo: Valorização da Vida e Prevenção ao Suicídio",
                descricao1: "O Setembro Amarelo é a principal campanha de prevenção ao suicídio e valorização da vida. Ele reforça a importância de falar abertamente sobre sofrimento emocional, depressão, ansiedade e outros transtornos, sem tabu ou julgamento. A iniciativa busca mostrar que pedir ajuda não é fraqueza, mas um ato de coragem, e que a escuta acolhedora pode fazer diferença entre a vida e a morte. Ao promover informação, empatia e acesso a apoio psicológico e médico, o Setembro Amarelo lembra que ninguém precisa enfrentar a dor sozinho e que cuidar da saúde mental e oferecer apoio pode salvar vidas",
                descricao2: "",
                imagem: "ativos/midia/setembro.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/fundacentro/pt-br/comunicacao/noticias/noticias/2023/setembro/setembro-amarelo-e-o-mes-dedicado-a-campanha-de-conscientizacao-sobre-a-prevencao-do-suicidio"
            };
            break;
            
        case 9: // Outubro
            conteudo = {
                titulo: "Outubro Rosa: Prevenção e Cuidado com a Saúde da Mulher",
                descricao1: "O Outubro Rosa é uma campanha dedicada à conscientização sobre o câncer de mama e, cada vez mais, à saúde da mulher como um todo. O movimento reforça a importância do diagnóstico precoce, por meio do autoexame, de consultas regulares e dos exames de rastreamento, como a mamografia. Detectar o câncer de mama em fases iniciais aumenta muito as chances de tratamento eficaz e de cura. Mais do que divulgar informações, o Outubro Rosa incentiva o cuidado, o acolhimento e o apoio às mulheres que enfrentam a doença, lembrando que prevenir, se conhecer e se cuidar é um gesto de amor-próprio e de valorização da vida.",
                descricao2: "",
                imagem: "ativos/midia/outubro.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/saude/pt-br/campanhas-da-saude/2024/outubro-rosa"
            };
            break;
            
        case 10: // Novembro
            conteudo = {
                titulo: "Novembro Azul: Cuidado com a Saúde do Homem",
                descricao1: "O Novembro Azul é uma campanha voltada à conscientização sobre a saúde do homem, com foco especial na prevenção e no diagnóstico precoce do câncer de próstata. A iniciativa busca quebrar tabus, combater o preconceito em relação aos exames e incentivar que os homens cuidem da própria saúde de forma integral, realizando consultas regulares e exames de rotina. Identificar o câncer de próstata em estágios iniciais aumenta significativamente as chances de tratamento eficaz e de qualidade de vida. O Novembro Azul lembra que cuidar da saúde não diminui a masculinidade é um ato de responsabilidade, amor-próprio e cuidado com quem se ama.",
                descricao2: "",
                imagem: "ativos/midia/novembro.webp",
                textoBotao: "Saiba Mais",
                linkBotao: "https://www.gov.br/dnocs/pt-br/assuntos/noticias/novembro-azul-cuidar-da-saude-e-um-ato-de-coragem-1"
            };
            break;
            
        case 11: // Dezembro
            conteudo = {
                titulo: "Dezembro Vermelho e Laranja: Cuidado, Informação e Prevenção",
                descricao1: "O Dezembro Vermelho é dedicado à conscientização sobre o HIV/Aids e outras infecções sexualmente transmissíveis (ISTs). A campanha reforça a importância do uso de preservativos, da testagem regular, do tratamento adequado e do combate ao preconceito que ainda cerca as pessoas vivendo com HIV. Informação de qualidade e acolhimento são fundamentais para prevenir novos casos e garantir dignidade a quem convive com o vírus.",
                descricao2: "O Dezembro Laranja foca na prevenção do câncer de pele, incentivando o uso de protetor solar, cuidados com a exposição ao sol, atenção a sinais e manchas na pele e a realização de avaliações periódicas com profissionais de saúde. O diagnóstico precoce é essencial para aumentar as chances de tratamento e reduzir complicações.",
                imagem: "ativos/midia/dezembro.webp",
                textoBotao:"Saiba Mais",
                linkBotao: "https://www.gov.br/ans/pt-br/assuntos/noticias/sobre-ans/ans-apoia-campanhas-dezembro-vermelho-e-dezembro-laranja"
            };
            break;
            
        default:
            conteudo = {
                titulo: "Bem-vindo!",
                descricao1: "Conteúdo padrão caso algo dê errado.",
                descricao2: "Entre em contato conosco para mais informações.",
                imagem: "https://placehold.co/800x600",
                textoBotao: "Saiba Mais",
                linkBotao: ""
            };
    }
    
    // Atualiza o HTML com o conteúdo do mês
    atualizarConteudo(conteudo);
}

function atualizarConteudo(conteudo) {
    // Seleciona os elementos da div
    const titulo = document.querySelector('.content-box h1');
    const descricao1 = document.querySelector('.content-box .lead');
    const descricao2 = document.querySelector('.content-box p:nth-of-type(2)');
    const botao = document.querySelector('.content-box .btn-primary');
    const imagem = document.querySelector('img');
    
    // Atualiza o conteúdo
    titulo.textContent = conteudo.titulo;
    descricao1.textContent = conteudo.descricao1;
    descricao2.textContent = conteudo.descricao2;
    botao.textContent = conteudo.textoBotao;
    imagem.src = conteudo.imagem;
    imagem.alt = conteudo.titulo;
    
    botao.onclick = function(){
        window.open(conteudo.linkBotao, '_blank');
    };

    // Animação suave
    animarConteudo();
}

function animarConteudo() {
    const contentBox = document.querySelector('.content-box');
    const image = document.querySelector('img');
    
    contentBox.style.opacity = '0';
    image.style.opacity = '0';
    
    setTimeout(() => {
        contentBox.style.transition = 'opacity 1s ease-in';
        image.style.transition = 'opacity 1s ease-in';
        contentBox.style.opacity = '1';
        image.style.opacity = '1';
    }, 100);
}



/* =========================================
   FORM DENUNCIA
========================================= */
function EnviarDenuncia() {
    const titulo = document.getElementById('tituloDenuncia').value.trim();
    const descricao = document.getElementById('descricaoDenuncia').value.trim().toLowerCase();
    const categoriaSelect = document.getElementById('categoriaSelect');
    const data = document.getElementById('dataIncidente').value;
    const local = document.getElementById('localIncidente').value.trim();
    const checkbox = document.getElementById('checkAnonimo');

    // ----------------------------
    // VALIDAÇÃO CORRIGIDA
    // ----------------------------

    if (!titulo || !descricao || !data || !local || !categoriaSelect.value) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (!checkbox.checked) {
        alert("Você precisa concordar em fazer a denúncia de forma anônima.");
        return false;
    }

    // ----------------------------
    // SISTEMA INTELIGENTE DE CATEGORIAS
    // ----------------------------

    const filtros = {
        "Assédio": ["assédio", "assediou", "encoxou", "cantada", "importunação", "assediar"],
        "Bullying": ["bullying", "zombou", "humilhou", "xingou", "apelido", "caçoou", "intimidou"],
        "Corrupção": ["corrup", "propina", "suborno", "desvio", "fraude", "dinheiro ilegal"],
        "Discriminação": ["racismo", "preconceito", "discriminação", "homofobia", "machismo", "xenofobia"],
        "Violência": ["agressão", "bateu", "violência", "empurrou", "soco", "chute", "ameaça", "espancou"]
    };

    // tabela de pontos
    let pontuacao = {
        "Assédio": 0,
        "Bullying": 0,
        "Corrupção": 0,
        "Discriminação": 0,
        "Violência": 0
    };

    // calcula pontuação
    for (let categoria in filtros) {
        filtros[categoria].forEach(palavra => {
            const regex = new RegExp(palavra, "gi");
            const ocorrencias = (descricao.match(regex) || []).length;
            pontuacao[categoria] += ocorrencias;
        });
    }

    // acha a categoria com maior pontuação
    let categoriaFinal = null;
    let maiorPontuacao = 0;

    for (let categoria in pontuacao) {
        if (pontuacao[categoria] > maiorPontuacao) {
            categoriaFinal = categoria;
            maiorPontuacao = pontuacao[categoria];
        }
    }

    // seta automaticamente se encontrou algo
    if (maiorPontuacao > 0) {
        categoriaSelect.value = categoriaFinal;
        console.log("Categorias detectadas:", pontuacao);
        console.log("Categoria final:", categoriaFinal);
    } else {
        console.log("Nenhuma categoria detectada.");
    }

    alert("Denúncia enviada com sucesso!");
}