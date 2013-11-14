$(function () {
	$('.row-fluid [class*="span"]:first-child').addClass('first-child');
	
	$("#nav a").click(function() {
		var newContent = $(this).attr('href').slice(1);
		/*
		$(".drop-down").hide();
		$('#'+newContent).show();
		
		$("#nav li").removeClass('active');
		$(this).parent().addClass('active');
		*/
		if ( $(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(".drop-down").hide();
		}
		else{
			$("#nav li").removeClass('active');
			$(".drop-down").hide();
			
			$(this).parent().addClass('active');
			$('#'+newContent).show();
		}
		return false
	});
});
