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
// Abre qualquer modal pelo ID
function abrirModal(idModal) {
  const modal = document.getElementById(idModal);
  if (!modal) return;

  modal.style.display = "flex";
  travarScrollPagina();

  // Salvar no localStorage qual modal foi aberto
  localStorage.setItem("ultimo_modal_aberto", idModal);
}

// Fecha qualquer modal pelo ID
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
function abrir_FormDenun() { abrirModal("FormDenun"); }
function fechar_FormDenun() { fecharModal("FormDenun"); }

function abrir_ModalViolencia() { abrirModal("ModalViolencia"); }
function fechar_ModalViolencia() { fecharModal("ModalViolencia"); }

function abrir_ModalBullying() { abrirModal("ModalBullying"); }
function fechar_ModalBullying() { fecharModal("ModalBullying"); }

function abrir_ModalCorrupcao() { abrirModal("ModalCorrupcao"); }
function fechar_ModalCorrupcao() { fecharModal("ModalCorrupcao"); }

function abrir_ModalDiscriminacao() { abrirModal("ModalDiscriminacao"); }
function fechar_ModalDiscriminacao() { fecharModal("ModalDiscriminacao"); }

function abrir_ModalAssedio() { abrirModal("ModalAssedio"); }
function fechar_ModalAssedio() { fecharModal("ModalAssedio"); }



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
    // Pegar os elementos do formulário
    const titulo = document.getElementById('tituloDenuncia').value.trim();
    const descricao = document.getElementById('descricaoDenuncia').value.trim();
    const categoria = document.getElementById('categoriaSelect').value;
    const data = document.getElementById('dataIncidente').value;
    const local = document.getElementById('localIncidente').value.trim();
    const checkbox = document.getElementById('checkAnonimo');

    // Checar se tudo foi preenchido e o checkbox marcado
    if (!titulo || !descricao || !categoria || !data || !local) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    if (!checkbox.checked) {
        alert("Você precisa concordar em fazer a denúncia de forma anônima.");
        return false;
    }

    alert("Denúncia enviada com sucesso!");
}