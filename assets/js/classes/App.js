import Appoitment from "./Appoitment.js";
import Interface from "./Interface.js";
import Task from "./Task.js";

export default class App {
  tasks = []; // Tableau qui contient toutes les tâches

  constructor() {
    // Gère la création d'une tâche à partir du formulaire
    Interface.handlerCreateTask((data) => {
      let task;

      // Crée une tâche selon son type
      if (data.type == "simple") {
        task = new Task(data);
      } else if (data.type == "appoitment") {
        task = new Appoitment(data);
      }

      // Bouton pour supprimer une tâche
      task.btnDelete.addEventListener("click", () => {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
        Interface.displayTasks(this.tasks);
      });

      // Bouton pour modifier le nom d’une tâche
      task.btnEdit.addEventListener("click", () => {
        const newName = prompt("Modifier le nom de la tâche :", task.name);
        if (newName) {
          task.name = newName;
          Interface.displayTasks(this.tasks);
        }
      });

      // Ajoute la nouvelle tâche et met à jour l'affichage
      this.tasks.push(task);
      Interface.displayTasks(this.tasks);
    });
  }
}
