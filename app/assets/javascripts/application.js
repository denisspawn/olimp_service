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
//= require owl.carousel
//= require_tree .

$(document).ready(function(){

  // Code for selec active element of menu
   var url=document.location.href;
          $.each($(".ul_main_menu a"),function(){
    if(this.href==url){$(this).addClass('active');};
  });

  // Code for owl-carousel
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:3,
      loop:true,
      margin:10,
      autoPlay:true,
      autoplayTimeout:1000,
      //pagination:false, //отключает точки навигации
      //navigation:true, //включает стрелки для навигации
  });

  //стрелки для навигации owl-carousel
  //$( ".owl-prev").html('<i class="glyphicon glyphicon-chevron-left"></i>');
  //$( ".owl-next").html('<i class="glyphicon glyphicon-chevron-right"></i>');

});
