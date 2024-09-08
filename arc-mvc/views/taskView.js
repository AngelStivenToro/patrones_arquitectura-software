
function showTasks(tasks) {
    console.log('Lista de Tareas:');
    tasks.forEach(task => {
      console.log(`[${task.completed ? 'x' : ' '}] ${task.id}: ${task.description}`);
    });
    console.log(''); // Línea en blanco
  }
  
  function showMessage(message) {
    console.log(message);
    console.log(''); // Línea en blanco
  }
  
  module.exports = { showTasks, showMessage };
  