const initLightMode = () => {
  document.querySelector('input[type="checkbox"]').addEventListener('change', () => {
    document.body.classList.toggle('light-mode')
  })

}

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

  menuBtn.addEventListener('click', open)

  closeBtn.addEventListener('click', close)

  document.addEventListener('keydown', ({ key }) => key === "Escape" && close());

  const links = document.querySelectorAll('nav a')

  links.forEach(link => {
    link.addEventListener('click', close)
  })

}

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

const initScrollSmooth = () => {

  const linksInternos = document.querySelectorAll('nav a')

  linksInternos.forEach(item => {
    const scrollToSection = (event) => {
      event.preventDefault()
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href)

      window.scrollTo({
        top: section.offsetTop - 100
      })
    }
    item.addEventListener('click', scrollToSection)
  })
}

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
      element.innerHTML = 'Desenvolvedor Front-End'
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

const renderSkills = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      id: 1,
      name: 'HTML5',
      src: 'html'
    },
    {
      id: 2,
      name: 'CSS3',
      src: 'css'
    },
    {
      id: 3,
      name: 'JavaScript',
      src: 'javascript'
    },
    {
      id: 4,
      name: 'TypeScript',
      src: 'typescript'
    },
    {
      id: 5,
      name: 'React.js',
      src: 'react'
    },
    {
      id: 6,
      name: 'Next.js',
      src: 'nextjs'
    },
    {
      id: 7,
      name: 'GraphQL',
      src: 'graphql'
    }, 
    {
      id: 8,
      name: 'Material UI',
      src: 'materialui'
    },
    {
      id: 9,
      name: 'Redux',
      src: 'redux'
    },
    {
      id: 10,
      name: 'Storybook',
      src: 'storybook'
    },
    {
      id: 11,
      name: 'SASS',
      src: 'sass'
    },
    {
      id: 12,
      name: 'Figma',
      src: 'figma'
    }
  ]

  cardsContainer.innerHTML = skills.map(({ id, name, src }) => `
    <div class="box" key="${id}">
      <p>${name}</p>
      <img src="assets/languages/${src}.svg" alt="html">
    </div>
  `).join('')
}

renderSkills();

initOpenMenu()
initAnimationScroll()
initScrollSmooth()
initLightMode()
initTypingAnimation()
