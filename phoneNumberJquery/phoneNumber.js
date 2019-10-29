$('.send').on('click', function(){
  if(!$('.phone').val()){
    $('body').delay(10).append('<div class="message">Введите телефон</div>');
  }
});
