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


// Seção Dúvidas
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");

        const answer = btn.nextElementSibling;

        if (btn.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = 0;
        }
    });
});
