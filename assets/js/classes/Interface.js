export default class Interface {
  static listHTML = document.getElementById("taskList");

  // Gère la création d'une nouvelle tâche
  static handlerCreateTask(handler) {
    const newTaskName = document.getElementById("newTaskName");
    const newTaskType = document.getElementById("newTaskType");
    const newTaskDate = document.getElementById("newTaskDate");
    const newTaskValidate = document.getElementById("newTaskValidate");

    newTaskValidate.addEventListener("click", () => {
      // On récupère les infos entrées par l'utilisateur
      const data = {
        name: newTaskName.value,
        type: newTaskType.value,
        opt: {
          date: newTaskDate.value,
        },
      };
      // On envoie ces infos à la fonction qu'on a passée en paramètre
      handler(data);
    });
  }

  // Affiche les tâches sur la page
  static displayTasks(tasks) {
    Interface.listHTML.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");

      li.appendChild(task.checkbox);

      const p = document.createElement("p");
      p.textContent = task.name;
      li.appendChild(p);
      // On ajoute la tâche à la liste dans le HTML
      Interface.listHTML.appendChild(li);
    });
  }
}
