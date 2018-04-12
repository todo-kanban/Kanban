const tasks = {
  collection : document.getElementsByClassName('all-tasks'),
  collectionContainer : document.getElementsByClassName('todo'),

  finish() {
      let arrayTask = Array.from(tasks.collection);
      let arrayContainer = Array.from(tasks.collectionContainer);
      for (let i = 0; i < arrayTask.length; i++) {
        arrayContainer[i].style.display = 'none';
        let boolean = arrayTask[i].checked;
        if (boolean) {
          arrayContainer[i].style.display = 'block';
        }
      }
  },
  active() {
    let arrayTask = Array.from(tasks.collection);
    let arrayContainer = Array.from(tasks.collectionContainer);
    for (let i = 0; i < arrayTask.length; i++) {
      arrayContainer[i].style.display = 'block';
      let boolean = arrayTask[i].checked;
      if (boolean) {
        arrayContainer[i].style.display = 'none';
      }
    }
  },
  allTasks() {
    let arrayTask = Array.from(tasks.collection);
    let arrayContainer = Array.from(tasks.collectionContainer);
    for (let i = 0; i < arrayTask.length; i++) {
      arrayContainer[i].style.display = 'block';
    }
  }

}//End obj tasks.


module.exports = tasks;
