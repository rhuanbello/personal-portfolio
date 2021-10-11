const projects = document.querySelectorAll('.cards-projects .box')
const projectsNames = document.querySelectorAll('.cards-projects .box .details p')
const closeModal = document.querySelector('.ri-close-line')
const modal = document.querySelector('section#projects .modal')
const description = document.querySelectorAll('.box .description')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const iframe = modal.querySelector('.video iframe')

const openModal = () => {
    description.forEach((item, index) => {

        item.addEventListener('click', () => {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('transparent')

            if (index == 0) {
                iframe.setAttribute('src', 'https://streamable.com/e/q700dy?autoplay=0')
                
            } else if (index == 1) {
                iframe.setAttribute('src', 'https://streamable.com/e/tlz8yr?autoplay=0')

            }

            modalDescription.innerText = projectsDescriptions[index]  
            modalTitle.innerText = projectsArraysNames[index]  


        })

    })

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent')
    })

    document.addEventListener ('keydown', (event) => {
        if (event.key === "Escape") { 
            modal.classList.add('hidden')
            document.body.style.overflow = 'visible';
            document.body.classList.remove('transparent')
        }
    });


}

openModal()

let projectsArraysNames = [];
let projectsDescriptions = [
"Essa foi a minha tentativa de clonar a interface do YouTube utilizando HTML5, CSS3 e JavaScript. Com o conceito Don't Repeat Yourself na mente, fiz com que todo o projeto rodasse em uma única página manipulada pelo JavaScript, que fica responsável por atualizar o source e a descrição dos vídeos dependendo de qual vídeo o usuário seleciona, além de ocultar/exibir o sidebar e a main para dar destaque ao vídeo. Estou há aproximadamente um mês e meio estudando JavaScript e estou bem satisfeito por já estar conseguindo utilizá-lo para facilitar o desenvolvimento dos meus projetos, isso é extremamente motivador. Voltarei nesse projeto em breve para aprimorá-lo cada vez mais.", 

"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
]

projectsNames.forEach(name => {
    return projectsArraysNames.push(name.innerText)

})


