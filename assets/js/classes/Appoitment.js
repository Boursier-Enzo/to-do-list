import Task from "./Task.js";
// La classe Appointment hérite de Task
export default class Appoitment extends Task {
  // Propriété pour la date du rendez-vous
  date;

  constructor(data) {
    // On récupère les infos de Task
    super(data);
    // On ajoute la date spécifique au rendez-vous
    this.date = data.opt.date;
  }
}
