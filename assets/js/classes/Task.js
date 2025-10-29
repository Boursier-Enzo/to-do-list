export default class Task {
  static idCount = 1;

  // Propriétés de chaque tâche
  id;
  name;
  checked = false;
  checkbox;

  constructor(data) {
    // Donne un id à la tâche
    this.id = Task.idCount;
    Task.idCount++;
    this.name = data.name;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    this.checkbox = checkbox;
    // Quand on clique sur la case, on change l'état de la tâche
    checkbox.addEventListener("click", () => this.toggle());
  }
  // Change l'état coché / décoché
  toggle = () => (this.checked = !this.checked);
}
