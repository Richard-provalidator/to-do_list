const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("값을 입력해주세요!");
    return;
  }

  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", () => {
    todoList.removeChild(newTask);
  });

  newTask.appendChild(deleteButton);
  todoList.appendChild(newTask);
  todoInput.value = "";
});
