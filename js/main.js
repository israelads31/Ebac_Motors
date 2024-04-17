$(document).ready(function () {
  $('#carousel-images').slick({
    autoplay: true,
    arrows: false,
  })

  $('.menu-hamburguer').click(function () {
    $('nav').slideToggle();
  })

  $('#telefone').mask('(00) 00000-0000', { placeholder: '(XX) XXXXX-XXXX' })

  $('form').validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: '* Por favor, adicione um nome',
      telefone: '* Por favor, adicione um número válido',
      email: '* Por favor, adicione um email válido',
      mensagem: '* Este campo é obrigatório'
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (e, validador) {
      var camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`)
      }
    }
  })
  $('.lista-veiculos button').click(function () {
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculoDeInteresse').val(nomeVeiculo);

    $('html').animate({
      scrollTop: destino.offset().top
    },1000)
  })
})