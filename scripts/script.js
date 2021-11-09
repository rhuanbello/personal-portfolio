// Light Mode

const initLightMode = () => {
    document.querySelector('input[type="checkbox"]').addEventListener('change', () => {
        document.body.classList.toggle('light-mode')
    })

}

initLightMode()

// Open Menu

const initOpenMenu = () => {

    const menuBtn = document.querySelector('header .menu i')
    const closeBtn = document.querySelector('header .menu i:nth-child(2)')
    const menu = document.querySelector('.menuOpen');
    const header = document.querySelector('header')

    const close = () => {
        menu.classList.add('hidden')
        menuBtn.classList.remove('hidden')
        closeBtn.classList.add('hidden')
        document.body.style.overflow = 'visible';
        header.classList.remove('open')

    }

    const open = () => {
        menu.classList.remove('hidden')
        menuBtn.classList.add('hidden')
        closeBtn.classList.remove('hidden')
        document.body.style.overflow = 'hidden';
        header.classList.add('open')
    }

    // Open with Btn
    menuBtn.addEventListener('click', open)

    // Close with Btn
    closeBtn.addEventListener('click', close)

    // Close with Esc
    document.addEventListener ('keydown', (event) => event.key === "Escape" ? close() : '');

    // Close with Links
    const links = document.querySelectorAll('nav a')

    links.forEach(link => {
        link.addEventListener('click', close)
    })

}

initOpenMenu()

// Scroll Animation

const initAnimationScroll = () => {
    const sections = document.querySelectorAll('.js-section')

    const windowHalfSize = window.innerHeight * 0.6
    
    const animateScroll = () => {
        sections.forEach(item => {
            const sectionTop = item.getBoundingClientRect().top

            const isSectionVisible = (sectionTop - windowHalfSize) < 0

            if (isSectionVisible) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }

        })
        
    }

    animateScroll()

    window.addEventListener('scroll', animateScroll)


}

initAnimationScroll()

// Scroll Smooth

const initScrollSmooth = () => {

    const linksInternos = document.querySelectorAll('nav a')

    linksInternos.forEach(item => {

        const scrollToSection = (event) => {
            event.preventDefault()
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href)

            window.scrollTo ({
                top: section.offsetTop - 100
            })


        }


        item.addEventListener('click', scrollToSection)

    })

}

initScrollSmooth()

// Typing Animation

const initTypingAnimation = () => {
    const title = document.querySelector('#sobre .banner h1')
    const span = document.querySelector('#sobre .banner span')
    const paragraph = document.querySelector('#sobre .banner p')

    const typingAnimation = (element) => {

        if (element == title) {
            element.innerHTML = 'Olá, eu sou o '
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 120 * index)
            })

        } else if (element == span) {
            element.innerHTML = 'Rhuan Bello :)'
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 150 * index)
            })

        } else {
            element.innerHTML = 'Desenvolvedor Front-End e UI Designer'
            const textToArray = element.innerHTML.split('')
            element.innerHTML = ''

            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 75 * index)
            })

        }
        
    }

    typingAnimation(title)
    setTimeout(() => typingAnimation(span), 1600)
    setTimeout(() => typingAnimation(paragraph), 3700)

}

initTypingAnimation()
