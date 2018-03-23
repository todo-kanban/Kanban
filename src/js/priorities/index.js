const priorities = {
    edit(e) {
        e.preventDefault();
        $('.modal').modal();
        $('select').material_select();
    },
    selectColor(e){
      if(e.target.val() === '1'){
          console.log('red');
      }
      
    }
}

module.exports = priorities;