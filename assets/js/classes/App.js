// On importe les classes dont on a besoin
import Appoitment from "./Appoitment.js";
import Interface from "./Interface.js";
import Task from "./Task.js";

export default class App {
  // Tableau pour stocker les tâches
  tasks = [];

  constructor() {
    // Quand l'utilisateur crée une tâche
    Interface.handlerCreateTask((data) => {
      // Si c'est une tâche simple
      if (data.type == "simple") {
        this.tasks.push(new Task(data));

        // Si c'est un rendez-vous
      } else if (data.type == "appoitment") {
        this.tasks.push(new Appoitment(data));
      }
      // On affiche les tâches à jour
      Interface.displayTasks(this.tasks);
    });
  }
}
