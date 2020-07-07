$(document).ready(function () {

  // FLOATING PLACEHOLDERS
  function initTricks() {
    var labels = $('.floating-placeholder label');
    labels.each(function (i) {
      var ph = $(labels[i])
        .siblings('input')
        .first()
        .attr('placeholder');
      $(labels[i]).html(ph);
    });
  }

  $('.floating-placeholder input').keyup(function () {
    var input = $(this).val();
    if (input) $(this).parent().addClass('float');
    else $(this).parent().removeClass('float');
  });

  initTricks();

  // INSERT CONTENIDO DE FORMULARIO CON AJAX
  $("#form").on("submit", function (e) {
    e.preventDefault();
    var mensaje = $("#mensaje").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    $.ajax({
      type: 'POST',
      url: 'Email/enviarEmail.php',
      data: {
        mensaje: mensaje,
        subject: subject,
        name: name,
        email: email
      }
    }).done(function (data) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title:'Gracias, He recibido su mensaje!',
    })
    }).fail(function () {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Gracias, He recibido su mensaje!',
    })
    });
  })
})