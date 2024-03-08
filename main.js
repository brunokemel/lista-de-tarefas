$(document).ready(function() {
    $('#todo-form').submit(function(event) {
        event.preventDefault();
        const todoText = $('#todo-input').val();
        if (todoText.trim() === '') return;
        const todoItem = $('<li>').text(todoText);
        $('#todo-list').append(todoItem);
        $('#todo-input').val('');
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});