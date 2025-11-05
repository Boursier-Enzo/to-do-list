export default class Task {
  static idCount = 1; // Compteur pour donner un ID unique à chaque tâche

  id;
  name;
  checked = false;
  checkbox;
  btnDelete;
  btnEdit;

  constructor(data) {
    // Attribue un identifiant unique à la tâche
    this.id = Task.idCount++;
    this.name = data.name;

    // Crée la case à cocher
    this.checkbox = document.createElement("input");
    this.checkbox.type = "checkbox";
    this.checkbox.addEventListener("click", () => this.toggle());

    // Bouton pour supprimer la tâche
    this.btnDelete = document.createElement("button");
    this.btnDelete.textContent = "Supprimer";

    // Bouton pour modifier la tâche
    this.btnEdit = document.createElement("button");
    this.btnEdit.textContent = "Modifier";
  }

  // Change l’état coché / décoché de la tâche
  toggle = () => (this.checked = !this.checked);
}
