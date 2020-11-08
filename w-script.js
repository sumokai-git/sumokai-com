$(function(){
  $('#sidebarTogglebtn,.overlay').click(function(){
  $("#sidebar-wrapper").toggleClass('active');
  $('.overlay').fadeToggle();
});
})    