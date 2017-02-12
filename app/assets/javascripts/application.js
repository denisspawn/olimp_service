// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require_tree .

// Code for selec active element of menu
$(document).ready(function(){
   var url=document.location.href;
          $.each($(".ul_main_menu a"),function(){
    if(this.href==url){$(this).addClass('active');};
   });

//Code for validation form fields
    var app = {

    initialize : function () {
      this.setUpListeners();
    },

    setUpListeners: function () {
      $('form').on('submit', app.submitForm);
      $('form').on('keydown', 'input', app.removeError);
    },

    submitForm: function (e) {
      e.preventDefault();

      var form = $(this),
          submitBtn = form.find('button[type="submit"]');

      if( app.validateForm(form) === false ) return false;

      submitBtn.attr('disabled', 'disabled');

      var str = form.serialize();

      $.ajax({
          url: '/homes',
          type: 'POST',
          data: str
      })
      .done(function(msg) {
          if(msg === "OK"){
              var result = "<div = 'bg-success'>Спасибо за заявку! Мы вам перезвоним!</div>"
              form.html(result);
          }else{
              form.html(msg);
          }
      })
      .always(function() {
          submitBtn.removeAttr('disabled');
      });

    },

    validateForm: function (form){
      var inputs = form.find('input'),
          valid = true;


      $.each(inputs, function(index, val) {
          var input = $(val),
              val = input.val(),
              formGroup = input.parents('.form-group'),
              label = formGroup.find('label').text().toLowerCase(),
              textError = 'Введите ' + label;

          if(val.length === 0){
              formGroup.addClass('has-error').removeClass('has-success');
              input.tooltip({
                  trigger: 'manual',
                  placement: 'right',
                  title: textError
              }).tooltip('show');
              valid = false;
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
