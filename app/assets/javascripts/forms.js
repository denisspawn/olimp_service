// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function() {
  //Code for validation form fields
  var app = {

    initialize: function () {
      this.setUpListeners();
    },

    setUpListeners: function () {
      $('form').on('submit', app.submitForm);
      $('form').on('keydown', 'input', app.removeError);
    },

    submitForm: function (e) {
      e.preventDefault();

      var form = $(this);

      var div_submit_button = $('.modal-footer'),
          submitBtn = div_submit_button.find('button[type="submit"]');


      if( app.validateForm(form) === false ) return false;

      // Делает кнопку неактивной в случае успешной валидации (сделано для того, чтобы клиент не нажимал несколькораз на нее)
      submitBtn.attr('disabled', 'disabled');

      var str = form.serialize();

      $.ajax({
        url: '/form',
        type: 'POST',
        data: str
      })
      .done(function(msg) {
        if(msg === "OK"){
          var result = "Спасибо за заявку! Мы вам перезвоним!"
            form.html(result);
          }else{
            form.html(msg);
          }
        })
        .always(function() {
          submitBtn.addClass('disabled');
        });

    },

    validateForm: function (form){
      var inputs = $('.form-group').find('input'),
          valid = true;


        $.each(inputs, function(index, val) {
            var input = $(val),
                val = input.val(),
                formGroup = input.parents('.form-group'),
                label = formGroup.find('label').text().toLowerCase(),
                textError = 'Введите ' + label;

            // Если в поле имя ну будет значения - вызовится ошибка
            if(val.length == 0){
                $('input[name=user_name]').parents('.form-group').addClass('has-error').removeClass('has-success');
                $('input[name=user_name]').tooltip({
                    trigger: 'manual',
                    placement: 'right',
                    title: textError
                }).tooltip('show');
                valid = false;
            // Если в поле тел значение будет < 18 - вызовится ошибка (маска тел. подгружается с файла bootstrap-mask-phone.js)
            }else if($('input[name=user_phone]').val().length < 18){
                $('input[name=user_phone]').parents('.form-group').addClass('has-error').removeClass('has-success');
                $('input[name=user_phone]').tooltip({
                    trigger: 'manual',
                    placement: 'right',
                    title: textError
                }).tooltip('show');
                valid = false;
            // В любом другом случае все пропускается
            }else{
                formGroup.addClass('has-success').removeClass('has-error');
            }
        });

        return valid;
      },

      removeError: function () {
        $(this).tooltip('destroy').parents('.form-group').removeClass('has-error');
      }

    }

    app.initialize();

});
