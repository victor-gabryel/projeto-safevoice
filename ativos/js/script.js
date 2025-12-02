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
// Formulário de denúncia
fetch('componentes/FormDenun.html')
  .then(response => response.text())
  .then(html => {
    const container = document.getElementById('FormDenunContainer');
    if (container) container.innerHTML = html;
  });

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
            const regex = new RegExp(palavra, "gi"); // permite maiúsculas/minúsculas
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