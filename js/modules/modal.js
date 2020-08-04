export default class initModal {
  constructor(btnAbrir, btnFechar, modalContainer) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  clickOutsideModal(e) {
    if (e.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.btnAbrir.addEventListener('click', this.eventToggleModal);
    this.btnFechar.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.clickOutsideModal);
  }

  init() {
    if (this.btnAbrir && this.btnFechar && this.modalContainer) {
      this.addModalEvents();
    }
    return this;
  }
}
