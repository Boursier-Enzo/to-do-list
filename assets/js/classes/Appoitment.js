import Task from "./Task.js";

export default class Appoitment extends Task {
  date; // Date spécifique au rendez-vous

  constructor(data) {
    super(data); // Appelle le constructeur de la classe parente
    this.date = data.opt.date; // Récupère la date depuis les options
  }
}
