$(document).ready(function() {
    // Variáveis para controle
    const MAX_LIVROS = 3;
    let livrosSelecionados = [];
  
    // Atualiza a mensagem de limite de seleção
    function atualizarMensagem() {
      const contador = livrosSelecionados.length;
      $('#contadorSelecionados').text(contador);
      
      if (contador >= MAX_LIVROS) {
        $('#mensagem').show();
        // Desabilita todas as checkboxes quando o limite é atingido
        $('input[type="checkbox"]').not(':checked').prop('disabled', true);
      } else {
        $('#mensagem').hide();
        // Habilita todas as checkboxes
        $('input[type="checkbox"]').prop('disabled', false);
      }
    }
  
    // Evento de mudança nas checkboxes
    $('input[type="checkbox"]').change(function() {
      const livro = $(this).val();
  
      if (this.checked) {
        if (livrosSelecionados.length < MAX_LIVROS) {
          livrosSelecionados.push(livro);
        } else {
          this.checked = false; // Desmarca a checkbox se exceder o limite
        }
      } else {
        const index = livrosSelecionados.indexOf(livro);
        if (index !== -1) {
          livrosSelecionados.splice(index, 1);
        }
      }
  
      atualizarMensagem();
    });
  
    // Evento do botão "Salvar Seleção"
    $('#btnSalvar').click(function() {
      // Exemplo de ação ao salvar (pode ser substituído por envio para o backend)
      if (livrosSelecionados.length > 3) {
        alert(`Livros selecionados: ${livrosSelecionados.join(', ')}`);
        // Aqui você pode enviar os livros selecionados para o backend, por exemplo
        // $.post('url_do_backend', { livros: livrosSelecionados }, function(response) {
        //   console.log('Livros salvos com sucesso!');
        // });
      } else {
        alert('Selecione pelo menos um livro.');
      }
    });
  });
  