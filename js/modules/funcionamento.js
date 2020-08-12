export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
  }

  transformInNumbers() {
    this.daysWeek = this.funcionamento.dataset.semana.split(',').map(Number);
    this.WeekHours = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  setDate() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  isOpen() {
    const semanaAberto = this.daysWeek.indexOf(this.diaAgora) !== -1;
    const horarioAberto = this.horarioAgora >= this.WeekHours[0] && this.horarioAgora < this.WeekHours[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.isOpen()) {
      this.funcionamento.classList.add('aberto');
    }
  }

  init() {
    if (this.funcionamento) {
      this.transformInNumbers();
      this.setDate();
      this.ativaAberto();
    }
    console.log(this);
    return this;
  }
}
