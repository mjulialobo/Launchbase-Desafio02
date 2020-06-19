const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');
const maximodal = document.querySelector('.maximodal')

for (let card of cards) {
    card.addEventListener("click", function() {
        const courseId = card.getAttribute('id');
        const maximodal = modal.classList.remove('maximize')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})

document.querySelector('.maximodal').addEventListener("click", function() {
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})