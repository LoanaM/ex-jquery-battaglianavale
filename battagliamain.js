//genero 15 navi casuali diverse
var ships = [];
for (var i = 0; i < 15; i++) {
  do {
    var navecas = Math.floor((Math.random() * 64) + 1);
  } while (ships.includes(navecas)==true)
  ships.push(navecas)
}
console.log(ships)

countgreen = 0;
countred = 0;

//funzione che cambia sfondo e contatore
$('td').click(function(){
  var nave = $(this).attr('id')
  if (ships.includes(parseInt(nave))) {
    $(this).css('background-color','red');
    countred++
    $('.cred').html(countred)
  }
  else {
    $(this).css('background-color','green')
    countgreen++
    $('.cgreen').html(countgreen)
  }
})
