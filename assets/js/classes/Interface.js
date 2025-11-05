export default class Interface {
  // Élément HTML contenant la liste des tâches
  static listHTML = document.getElementById("taskList");

  // Gère la création d’une nouvelle tâche via le bouton "Valider"
  static handlerCreateTask(handler) {
    const newTaskName = document.getElementById("newTaskName");
    const newTaskType = document.getElementById("newTaskType");
    const newTaskDate = document.getElementById("newTaskDate");
    const newTaskValidate = document.getElementById("newTaskValidate");

    newTaskValidate.addEventListener("click", () => {
      // Récupère les données saisies et les envoie au handler
      const data = {
        name: newTaskName.value,
        type: newTaskType.value,
        opt: {
          date: newTaskDate.value,
        },
      };
      handler(data);
    });
  }

  // Affiche toutes les tâches dans la liste
  static displayTasks(tasks) {
    Interface.listHTML.innerHTML = ""; // Vide la liste avant d'afficher
    tasks.forEach((task) => {
      const li = document.createElement("li");
      const p = document.createElement("p");

      // Affiche le nom et la date si disponible
      p.textContent = task.date ? `${task.name} - ${task.date}` : task.name;

      li.appendChild(p);
      li.appendChild(task.checkbox);
      li.appendChild(task.btnEdit);
      li.appendChild(task.btnDelete);
      Interface.listHTML.appendChild(li);
    });
  }
}
