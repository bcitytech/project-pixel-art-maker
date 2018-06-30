// Select color input
// Select size input
var width, color, height;
// When size is submitted by the user, call makeGrid()
$( "#sizePicker" ).submit(function( event ) {
    event.preventDefault();
    width = $('#inputWeight').val();
    height = $('#inputHeight').val();
    makeGrid(height, width);
});
function makeGrid(a,b) {
	$('tr').remove();
	// Your code goes here!
	for (var i=1; i<= a; i++){
		$('#pixelCanvas').append('<tr id=tableRow' +i+ '></tr>');
		for (var j = 1; j<=b; j++){
			$('#tableRow' + i).append('<td></td>');
		}
	}
	//this is where we add color
	$('td').click( function coloradd(){
		color = $('#colorPicker').val();

		if($(this).attr('style')) {
			$(this).removeAttr('style')	
		} else{
			$(this).attr('style', 'background-color:' + color);
		}
	})
}
