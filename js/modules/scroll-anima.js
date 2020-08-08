import debounce from './debounce.js';

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6; // 60% da tela

    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offsetTop = section.offsetTop;
      return {
        element: section,
        offsetTop: Math.floor(offsetTop - this.windowMetade),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      console.log(window.pageYOffset, item.offsetTop, item.element.offsetTop);
      if (window.pageYOffset > item.offsetTop) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
