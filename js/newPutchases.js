$(document).delegate('.btn-new-putchases', 'click',function(e){
	$('.modal-add-putchas').show();
});
$(document).delegate('.save-putchases', 'click',function(e){
	
	$('.help-error').html(''); 
	
	var name = $('#input_name').val();
	var date = $('#input_date').val();
	var note = $('#input_note').val();
	
	if(name == ''){
		$('#input_name').closest('.input-field').find('.help-error').html(`Поле обов'язкове для заповлення`);
	}else if(date == ''){
		$('#input_date').closest('.input-field').find('.help-error').html(`Не вірний формат дати`);
	}
	else{
		addPutchases(name, date, note);	
	}
	
});
function addPutchases(name, date, note){
	var id = 1;
	var src =  src;
	$.ajax({
			  type: "POST",
              url:'planpurchase/createorupdate',
              data:{
				'name' : name,
				'data':date,
				'note':note},
              success:function(r){
                  htmlAddPutchases(name, date, note)
              },
				error:function (thrownError){
					//выводим ошибку
					alert('Помилка додавання');
				}
        });
	
}

function htmlAddPutchases(name, date, note){
	
	var html = `<li class="claim-item" data-id=` + id +` data-src=` + src + `>
		<div class="claim-theme"><span>` + name + `</span></div>
		<div class="claim-date"><span>` + date + `</span></div>
		<div class="eq-note"><span>` + note + `</span></div>
		<div class="claim-theme"><a href="" class="btn--orange putchases-edit-btn"><i class="fa fa-pencil" aria-hidden="true"></i></a><button href="" class="btn--red btn-remove-equipment remove-pop-up-btn"><i class="fa fa-trash-o" aria-hidden="true"></i></button></div>

	</li>`
	
	$('.claims-list').prepend(html);
	
	$(this).closest('.modal').hide();
	$('#input_name').val('');
	$('#input_date').val('');
	$('#input_note').val('');
}
$(document).delegate('#filter_putchases button','click',function(){
	var name = $('#filter_name').val();
	var from = $('#filter_from').val();
	var to = $('#filter_to').val();

	if(name == ''){
		$('#input_name').closest('.input-field').find('.help-error').html(`Поле обов'язкове для заповлення`);
	}else if(date == ''){
		$('#input_date').closest('.input-field').find('.help-error').html(`Не вірний формат дати`);
	}
	else{
		addPutchases(name, date, note);	
	}
	
	var obj = {number : number, auditories : check};
	var url = `equipments/` + obj;
//	$.ajax({
//		  type:"GET",
//		  url: url,
//		  success: function(){
//			  history.pushState('', '', url);
//		  },
//		error:function (thrownError){
//					//выводим ошибку
//			alert('Помилка фільтрування');
//		}
//		});
});