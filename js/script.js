// Scroll to

$(document).ready(function(){
	$('a[href*=#]').click(function(){
	$('html, body').animate({
	    scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
	return false;
	});
});

// Ajax to retrieve testimonials
$(document).ready(function() {
  var author = $(".testimonial-author");
  author.on("click", function() {
    $.ajax('/testimonials.html', {
      data: {author: author.data('author')},
      success: function(response) {
        $('.testimonial-quote').html(response).fadeIn();
      }
    });
    $(".testimonial-author").removeClass('active');
    $(this).addClass('active');
  });
});
