$(function () {

var $games = $('#games')

 $.ajax({
  type: 'GET',
  url: 'http://stage.whgstage.com/front-end-test/games.php',
  success: function(games){
   console.log('success', data);
   $.each(games, function(i, item) {
    $games.append('<li>' + item.name + item.image +'</li>');
   })
  }
 })

})