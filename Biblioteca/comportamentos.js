function toggleSelection(li) {
    li.classList.toggle('selected');
    var selectedItems = document.querySelectorAll('.selected');
    if (selectedItems.length > 3) {
    li.classList.remove('selected');
    alert('Você só pode selecionar até 3 livros.');
     }
}
                                  