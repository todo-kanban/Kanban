const tasks = {
  init() {
      $('input').click(tasks.finishTasks);
  },
  finishTasks(e){
    e.preventDefault();
    console.log('buton');
  }
}


module.exports = tasks;
