//função para remover tarefa

// a função test, o event.target é usado para acessar o elemento HTML que foi clicado, e então o método remove()
// é chamado nesse elemento para removê-lo da interface do usuário.
function test(event){
    var confirmRemove = confirm("Você realmente deseja remover esta tarefa?");
    if (confirmRemove) {
        event.target.remove();
        saveTasksToCookie();
    }
};

/*DOMContentLoaded para scripts que precisam ser executados assim que o HTML for totalmente analisado,
 mas não dependem de folhas de estilo ou imagens.*/
document.addEventListener("DOMContentLoaded", function() {
  if (document.cookie) {
      document.getElementById("ft_list").innerHTML = decodeURIComponent(document.cookie);
  }

// Adicionando um ouvinte de evento de clique para o botão de adicionar tarefa
  document.getElementById("addTaskBtn").addEventListener("click", function() {
      var task = prompt("Digite a nova tarefa:");
      if (task !== null && task !== "") {
          addTask(task);
      }
  });

// Função para adicionar uma nova tarefa
  function addTask(taskContent) {
      var taskElement = document.createElement("div");
      taskElement.classList.add("task");
      taskElement.textContent = taskContent;
      taskElement.setAttribute("onclick","test(event)")

      document.getElementById("ft_list").prepend(taskElement);
      saveTasksToCookie();
  }
  
// Função para salvar as tarefas em cookies
  function saveTasksToCookie() {
      let tasksHTML = document.getElementById("ft_list").innerHTML;
      document.cookie = encodeURIComponent(tasksHTML);
  }
});
