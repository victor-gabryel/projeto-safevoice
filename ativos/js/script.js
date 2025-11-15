// // Falta Fazer 
// fetch('components/overlay')
//     .then(response => response.text())
//     .then(html => document.body.insertAdjacentHTML('beforeend', html));

// // Falta Fazer 
// fetch('components/overlay')
//     .then(response => response.text())
//     .then(html => document.body.insertAdjacentHTML('beforeend', html));

// // Falta fazer
// fetch('components/overlay')
//     .then(response => response.text())
//     .then(html => document.body.insertAdjacentHTML('beforeend', html));

// // Falta Fazer 
// fetch('components/overlay')
//     .then(response => response.text())
//     .then(html => document.body.insertAdjacentHTML('beforeend', html));

// // Falta fazer
// fetch('components/overlay')
//     .then(response => response.text())
//     .then(html => document.body.insertAdjacentHTML('beforeend', html));


// ======== FAQ Interativo ========
document.addEventListener('DOMContentLoaded', () => {
  const perguntas = document.querySelectorAll('.pergunta-faq');

  perguntas.forEach(pergunta => {
    pergunta.addEventListener('click', () => {
      // Alterna classe ativa no botão
      pergunta.classList.toggle('active');

      // Mostra ou esconde a resposta correspondente
      const resposta = pergunta.nextElementSibling;
      if (resposta.style.maxHeight) {
        resposta.style.maxHeight = null;
      } else {
        resposta.style.maxHeight = resposta.scrollHeight + "px";
      }
    });
  });
});
