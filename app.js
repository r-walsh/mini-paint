$(document).ready(function() {
var color = 'white';
var colors = 'red blue green yellow white'

$('.box').click(function() {
	$(this).addClass(color)
})

$('.box').on('dblclick', function() {
	$(this).removeClass(colors);
})

$('#reset').click(function() {
	$('.box').removeClass(colors)
})

$('#red').click(function(event) {
	color = 'red';
})

$('#green').click(function(event) {
	color = 'green';
})
$('#blue').click(function(event) {
	color = 'blue';
})
$('#yellow').click(function(event) {
	color = 'yellow';
})
$('#white').click(function(event) {
	color = 'white';
})






});