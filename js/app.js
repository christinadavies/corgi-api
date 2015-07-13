
$(document).ready(function(){

// Refresh button event
$('#refresh').click(function() {
	$('#results').empty();
	getData("#results");
})

// 'Go!' button click event
$('#start').click(function() {
	$(this).hide();
	$('#refresh').fadeIn(500);
	$('#intro').hide();
	$('#cont').fadeIn(500);
	getData("#results");
})

var getData = function(div) {
	$(function() {

// Params to be sent for $.ajax method
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			cache: false,
			url: "https://api.instagram.com/v1/tags/corgisofinstagram/media/recent?client_id=b70c0094196d4a10aec765699d7f9b78",
			success: function(data) {
				main(data, div);
			}
		});
	});
}

var main = function(data, div) {
	var html = "";
	for (var i = 0; i < data.data.length; i++)
	{

	html += '<div class="photo"><a href="' + data.data[i].link + '"target="_blank"><img src="' + data.data[i].images.thumbnail.url + '"></a></div>';
	
	}
	$(div).html(html);
}
});