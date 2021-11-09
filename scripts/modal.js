// Dados dos Projetos

const dataProjects = [
    {
        title: 'DoWhile 2021 Virtual Badge',
        date: '24 de Outubro de 2021',
        description: `O DoWhile 2021 Card é uma aplicação interativa que mostra informações do usuário através da API do GitHub :D <br><br>

        Após concluir o evento, adicionei funcionalidades extras, como: <br><br>
        
        • Modal para o usuário inserir seus próprios dados no Card; <br>
        • Armazenamento dos dados inseridos pelo usuário no LocalStorage do navegador, fazendo com que as informações sejam mantidas mesmo após fechar a página; <br>
        • Animação de Flip em 3D (com CSS puro); <br>
        • Verso do Card com informações sobre o DoWhile 2021; <br>
        • Versão Desktop e Mobile.`, 
        videoSrc: 'https://streamable.com/e/qceqn0',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6858050562471145472/',
        repository: 'https://github.com/rhuanbello/origin-nlw-heat',
        site: 'https://dowhile2021-rhuanbello.vercel.app/'

    },
    {
        title: 'Daily Weather',
        date: '28 de Outubro de 2021',
        description: `Daily Weather é uma aplicação web que exibe a condição climática de todas as cidades, bairros, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto os dos próximos 7 dias, além da velocidade do vento, nível de umidade, data/hora e temperatura máxima e mínima. <br><br>

        Esse projeto foi desenvolvido com as seguintes ferramentas: <br><br>
        
        • HTML5; <br>
        • Vanilla JavaScript; <br>
        • Compilador SASS; <br>
        • Unsplash API; <br>
        • Open Weather API (One Call & Current Weather Data); <br>
        • LocalStorage API; <br>
        • Moment.js; <br>
        `, 
        videoSrc: 'https://streamable.com/e/usgia6',
        linkedin: 'https://www.linkedin.com/feed/update/urn:li:activity:6862799471626059776/',
        repository: 'https://github.com/rhuanbello/dailyweather',
        site: 'https://dailyweather.vercel.app/'

    },
    {
        title: 'Calculadora do Windows 10',
        date: '14 de Outubro de 2021',
        description: `Esse é um projeto que eu desenvolvi a interface há dois meses atrás, mas que só fui me sentir confiante pra dar continuidade recentemente depois de avançar em meus estudos, pois meu objetivo era de construir toda a lógica do zero, sem utilizar a função eval(). <br><br> Eu ainda não tinha feito uma calculadora, e creio que esse seja um dos principais exercícios pra praticar a lógica de programação, então além de aplicar as funcionalidades e a interface da calculadora do Windows 10, tentei simular uma espécie de ambiente desktop, onde é possível abrir, fechar ou minimizar a aplicação. <br><br>  Algumas features que valem destacar: <br><br>
        • É possível utilizar o teclado para realizar as operações matemáticas; <br>
        • Ao "fechar" a calculadora os dados do display são apagados; <br>
        • Só é possível adicionar um ponto decimal; <br>
        • O tamanho da fonte do display se adapta conforme os números são adicionados; <br>
        • Responsivo para Mobile;`,
        videoSrc: 'https://streamable.com/e/65khi6',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_clone-windows-calculator-activity-6854500487987904512-kwzK',
        repository: 'https://github.com/rhuanbello/clone-windowsCalculator',
        site: 'https://calculator-rhuanbello.vercel.app/'

    },
    {
        title: 'Death Cat Grocery Store',
        date: '28 de Setembro de 2021',
        description: "Um E-Commerce utilizando apenas JavaScript (com localStorage) 🚀 <br><br> O objetivo desse segundo checkpoint era de desenvolver não só habilidades técnicas, mas também soft-skills como o trabalho em equipe e a organização. <br> Para essa entrega, nossa equipe (composta por Marcelo Garofalo, Filipe Farias e eu) decidiu transformar a entrega em uma loja virtual com JavaScript, alinhando o projeto com a nossa matéria de Programação Imperativa, ministrada pela instrutora Ana Cristina Teixeira. <br><br> Decidimos explorar as funcionalidades do localStorage para poder armazenar e recuperar as informações dos produtos adicionados ao carrinho, permitindo ao usuário alterar a quantidade de itens ou removê-los completamente. <br><br> Como demonstra o vídeo abaixo, mesmo após fecharmos o nosso navegador, os itens persistem em nosso carrinho de compras devido ao uso do localStorage, que armazena essas informações em nosso browser e possibilita a recuperação destes dados quando a página é aberta novamente.",
        videoSrc: 'https://streamable.com/e/tlz8yr',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_javascript-developer-digital-activity-6849053582579388416-IfoH',
        repository: 'https://github.com/rhuanbello/deathcatgrocerystore',
        site: 'https://deathcatgrocerystore.vercel.app/'

    },
    {
        title: 'Youtube Clone',
        date: '23 de Setembro de 2021',
        description: "Essa foi a minha tentativa de clonar a interface do YouTube utilizando HTML5, CSS3 e JavaScript. Com o conceito Don't Repeat Yourself na mente, fiz com que todo o projeto rodasse em uma única página manipulada pelo JavaScript, que fica responsável por atualizar o source e a descrição dos vídeos dependendo de qual vídeo o usuário seleciona, além de ocultar/exibir o sidebar e a main para dar destaque ao vídeo. Estou há aproximadamente um mês e meio estudando JavaScript e estou bem satisfeito por já estar conseguindo utilizá-lo para facilitar o desenvolvimento dos meus projetos, isso é extremamente motivador. Voltarei nesse projeto em breve para aprimorá-lo cada vez mais.",
        videoSrc: 'https://streamable.com/e/q700dy',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_html-css-developer-activity-6845803020157116417-39dj',
        repository: 'https://github.com/rhuanbello/clone-youtube',
        site: 'https://youtube-rhuanbello.vercel.app/'

    },
    {
        title: 'Digital Flix',
        date: 'Em desenvolvimento',
        description: "Em desenvolvimento",
        videoSrc: '',
        linkedin: '',
        repository: '',
        site: ''

    },
    {
        title: 'Barber House',
        date: '30 de Julho de 2021',
        description: "A Barber House é uma landing page mobile-first que reúne os conceitos fundamentais de HTML5, CSS3 e JavaScript. Ela possui animações para fazer surgir gradualmente cada section no decorrer do scroll. Além de ser totalmente responsiva para diferentes tamanhos de tela, é uma página facilmente customizável, pois todas as cores utilizadas estão armazenadas em variáveis dentro do CSS.",
        videoSrc: 'https://streamable.com/e/6ci737',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6827021119288156160-qT7i',
        repository: 'https://rhuanbello.github.io/nlw6-origin/',
        site: 'https://rhuanbello.github.io/nlw6-origin/'

    },
    {
        title: 'Rocket.Q',
        date: '07 de Julho de 2021',
        description: "Minha primeira participação da Next Leve Week da Rocketseat. <br><br> Desenvolvemos do zero uma aplicação de gerenciamento de perguntas anônimas, esse foi meu primeiro contato com o Node.js, que apesar de não ser o meu foco, foi extremamente interessante conhecer.",
        videoSrc: 'https://streamable.com/e/4ozfu5',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6818692643816665088-FxZJ',
        repository: 'https://github.com/rhuanbello/nlw6-discover',
        site: ''

    },
    {
        title: 'Naped',
        date: 'Em desenvolvimento',
        description: "Em desenvolvimento",
        videoSrc: 'https://streamable.com/e/u6x84w',
       
        linkedin: '',
        repository: 'https://github.com/rhuanbello/naped',
        site: 'https://naped-rhuanbello.vercel.app/'

    },
    {
        title: 'Mercado Livre',
        date: 'Em desenvolvimento',
        description: "Em desenvolvimento",
        videoSrc: 'https://streamable.com/e/dyteys',
        linkedin: '',
        repository: 'https://github.com/rhuanbello/clone-mercadoLivre',
        site: 'https://mercadolivre-rhuanbello.vercel.app/'

    },
    {
        title: 'Rio Turism',
        date: '04 de Setembro de 2021',
        description: "Esse é um projeto que realizei para o meu primeiro checkpoint da disciplina Front-End I da formação Certified Tech Developer na Digital House Brasil, em parceria com Mercado Livre e a Globant. <br><br> Neste checkpoint foi pedido um página sobre minha cidade, onde pudesse ser praticado os conceitos da propriedade position do CSS3. Aqui foi bem interessante trabalhar com contraste de cores e altura de linha para oferecer uma boa leitura ao usuário, além de praticar posicionamento sem precisar necessariamente de Flexbox ou CSS Grid Layout.",
        videoSrc: 'https://streamable.com/e/cwyvwh',
        linkedin: '',
        repository: 'https://github.com/rhuanbello/rioturism',
        site: 'https://rioturism-rhuanbello.vercel.app/'

    },
    {
        title: 'Cultflix',
        date: '30 de Julho de 2021',
        description: "Cultflix é um projeto que nasce desse fascínio e me convida a pôr em prática todo o aprendizado adquirido no Bootcamp HTML Web Developer da Digital Innovation One Inc. Ter a oportunidade de criar a minha própria versão de uma Plataforma de Streaming e ter a liberdade de inserir meus filmes favoritos é extremamente gratificante.",
        videoSrc: 'https://streamable.com/e/1tsfrm',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_ui-opentowork-css-activity-6821251240840835072-6GP0',
        repository: 'https://github.com/rhuanbello/cultflix',
        site: 'https://rhuanbello.github.io/cultflix/'

    },
    
    {
        title: 'Dashboard Star Wars',
        date: '08 de Julho de 2021',
        description: "Reunindo dois universos que eu amo: cinema e desenvolvimento. Assim, os estudos se tornam realmente divertidos! <br><br> Dashboard Star Wars é um projeto que realiza requisições de uma API externa para trazer diversos dados sobre o universo da saga. Projeto desenvolvido em um dia, apenas para praticar alguns conceitos.",
        videoSrc: 'https://streamable.com/e/84kzet',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_desenvolvimento-ui-starwars-activity-6818976321042038784-FPYl',
        repository: 'https://github.com/rhuanbello/clone-windowsCalculator',
        site: 'https://rhuanbello.github.io/dashboard-starwars/'

    },
    {
        title: 'Animais Fantásticos',
        date: 'Em desenvolvimento',
        description: "Em desenvolvimento",
        videoSrc: 'https://streamable.com/e/5ugnu0',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_desenvolvimento-ui-starwars-activity-6818976321042038784-FPYl',
        repository: 'https://github.com/rhuanbello/animais-fantasticos',
        site: 'https://animaisfantasticos.vercel.app/'

    },
    {
        title: 'Brafé',
        date: '07 de Agosto de 2021',
        description: "Projeto desenvolvido durante o curso de CSS Avançado da Origamid, com duração de 9 horas. <br><br> Ao longo do curso colocamos em prática de forma exaustiva os principais métodos de posicionamento no CSS, desenvolvendo a mesma página de quatro formas diferentes.",
        videoSrc: 'https://streamable.com/e/wkskpg',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-bootstrap-activity-6829784614278713344-j3x8',
        repository: 'https://github.com/rhuanbello/brafe',
        site: 'https://brafe-rhuanbello.vercel.app/'

    },
    {
        title: 'Bikcraft',
        date: '15 de Junho de 2021',
        description: "Projeto final do ótimo curso de Web Design Completo da Origamid, onde tive a oportunidade de desenvolver do wireframe ao código o projeto Bikcraft, colocando em prática todos os conteúdos teóricos apresentados no curso, como: UX/UI Design, Adobe XD, Semântica, SEO, Grid, Reset, Responsividade, Animações, Domínio, hospedagem e muito mais.",
        videoSrc: 'https://streamable.com/e/rtxzgb',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6810692015794331648-f2UO',
        repository: 'https://github.com/rhuanbello/bikcraft',
        site: 'https://rhuanbello.github.io/bikcraft/'

    },
    {
        title: 'Flexbog',
        date: '17 de Junho de 2021',
        description: "Projeto final do curso de CSS FlexBox da Origamid, um layout que te facilita bastante na hora definir o tamanho e o alinhamento (vertical e horizontal) de itens. <br><br> Apesar de ser uma página simples, ela engloba as mais importantes propriedades do CSS FlexBox, como o Display Flex, Flex Wrap, Justify Content, Flex Basis, etc. Sendo assim, depois de alguns pequenos ajustes, a página já se torna completamente responsiva, pois o FlexBox é um layout bastante inteligente por si só.",
        videoSrc: 'https://streamable.com/e/d3c1bk',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6811412518758707200-jcJ8',
        repository: 'https://github.com/rhuanbello/flexblog',
        site: 'https://rhuanbello.github.io/flexblog/'

    },
    {
        title: 'Le Scone',
        date: '01 de Outubro de 2021',
        description: "Projeto desenvolvido durante o curso de CSS com SASS da Origamid.",
        videoSrc: 'https://streamable.com/e/ajfxe4',
        linkedin: '',
        repository: 'https://github.com/rhuanbello/lesconde',
        site: 'https://lesconde-rhuanbello.vercel.app/'

    },
    {
        title: 'Wildbeast',
        date: '09 de Julho de 2021',
        description: "Projeto de mais um curso da Origamid, dessa vez sobre CSS Grid Layout, que sinceramente é uma mão na roda. Nunca foi tão fácil mudar totalmente a composição de um site, você literalmente pode fazer isso com uma linha de código. Após conhecer todos os conceitos dessa especificação (como o Grid Template Columns, Rows, Areas e Auto) foi desenvolvido o site Wildbeast para fixar na prática todo o aprendizado.",
        videoSrc: 'https://streamable.com/e/dyan89',
        linkedin: 'https://www.linkedin.com/posts/rhuanbello_opentowork-css-html-activity-6819437498171822080-BTlV',
        repository: 'https://github.com/rhuanbello/wildbeast',
        site: 'https://rhuanbello.github.io/wildbeast/'

    },

]

// Open Modal

const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line')
    const modal = document.querySelector('.modal')
    const box = document.querySelectorAll('.cards-projects .box')
    const modalTitle = modal.querySelector('.title h2')
    const modalDescription = modal.querySelector('.info p')
    const modalDate = modal.querySelector('span')
    const modalLinkProject = modal.querySelector('.links a.link-project')
    const modalLinkRepository = modal.querySelector('.links a.link-repository')
    const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
    const iframe = modal.querySelector('.video iframe')

    box.forEach((item, index) => {

        const addData = () => {

            if (index != 5) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                document.body.classList.add('transparent')
            }

            modalTitle.innerHTML = dataProjects[index].title
            modalDescription.innerHTML = dataProjects[index].description
            modalDate.innerHTML = dataProjects[index].date
            modalLinkProject.setAttribute('href', dataProjects[index].site) 
            modalLinkRepository.setAttribute('href', dataProjects[index].repository) 
            modalLinkLinkedin.setAttribute('href', dataProjects[index].linkedin) 
            iframe.setAttribute('src', dataProjects[index].videoSrc + '?autoplay=1&amp;loop=0')

        }

        item.addEventListener('click', addData)

    })

    const closingModal = () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent')
        iframe.setAttribute('src', '')

    }

    closeModal.addEventListener('click', closingModal)

    document.addEventListener ('keydown', (event) => event.key === "Escape" ? closingModal() : '');

}

openModal()
