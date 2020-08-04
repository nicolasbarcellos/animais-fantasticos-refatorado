export default class initTabNav {
  constructor(tabMenu, tabContent) {
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.tabContent = document.querySelectorAll(tabContent);
    this.activeClass = 'ativo';
  }

  showContentTab(i) {
    this.tabContent.forEach((tab) => tab.classList.remove(this.activeClass));
    const classAnima = this.tabContent[i].dataset.anime;
    this.tabContent[i].classList.add(this.activeClass, classAnima);
  }

  addEventInit() {
    this.tabMenu.forEach((item, i) => {
      item.addEventListener('click', () => {
        this.showContentTab(i);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.showContentTab(0);
      this.addEventInit();
    }
    return this;
  }
}
