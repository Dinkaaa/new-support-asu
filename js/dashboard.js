$(function() {
	var remember;
	var id;
		$('.ui-draggable').draggable({
			opacity:0.9,// opacity whan you drag
			containment:"#dashboard",
			cancel: "button",//extention for drag
			start: function() {
				 remember = $(this).html();
				 id = $(this).attr('id');
        	}
		});
		$('.droppable').droppable({
		   accept: '.ui-draggable',
		   hoverClass: "ui-state-highlight",
		   drop: function(event, ui) {
				ui.draggable.remove();
				$(this).find('.help-dropp').append(`<div id=` + id + ` class=" dashboard-issue ui-draggable" ></div>`);
				   $('#' + id).html(remember);
				   $('#' + id).draggable({
						opacity:0.9,
					    containment:"#dashboard",
						cancel: "button",//extention for drag
						start: function() {
							 remember = $(this).html();
							 id = $(this).attr('id');
						}
				   });
		   }
		});
	
	$(document).delegate('.dashboard-issue', 'click', function(event){
		$('.task-description-modal').show();
	});
	
	$(document).delegate('.dashboard .dashboard-status', 'click' ,function(event){
		$(this).next().slideToggle();
	});
});