let borrar = require('../erase');

const check = {
    init() {
        console.log('Hola bundle!!');
        $('#todo-form').submit(check.addTodo);
    },
    addTodo(event) {
        event.preventDefault();
        const { value: todo } = document.getElementById('todo');

        let todoId = `todo-${check.counter + 1}`;
        let buttonData = `todo-${check.counter + 1}`;

        const $todoContainer = $('<div />').addClass('col s12 m6 todo');
        const $todoCard = $('<div />').addClass('card-panel');
        const $todoCheckbox = $('<input type="checkbox" />').attr('id', todoId);
        const $todoText = $('<label />').attr('for', todoId).text(todo);
        const $row = $("<div />").addClass("row");
        const $erase = $("<button />").addClass("right").text("x").click(borrar);

        $row.append($erase);
        $todoCard.append($row);
        $todoCard.append($todoCheckbox);
        $todoCard.append($todoText);
        $todoContainer.append($todoCard);

        $('#todos').append($todoContainer);

        check.counter = check.counter + 1;
    },
    counter: 0
};

module.exports = check;








