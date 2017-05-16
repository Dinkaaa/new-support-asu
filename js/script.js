$(document).ready(function () {
	$(document).delegate('.ar-task-desc','click', function (event) {
        $('.arcive-description-tasks').show();
    });
	$(document).delegate('.close-modal-btn','click', function (event) {
        $(this).closest('.modal').hide();
    });
	 $('.open-filters-btn').on('click', function () {
        var filters = $(this).closest('.filters').find('.filter-section')
        if ($(filters).hasClass('close')) {
            $(filters).removeClass('close');
            $(this).html('Сховати фільтри');
        }
        else {
            $(filters).addClass('close');
            $(this).html('Показати фільтри');
        }

    });
    $('.exit-btn').click(function () {
        window.location.href = logoffUrl;
    });
	
    $("form").data("validator").settings.ignore = "";
    $('.sa-select').each(function () {
        var checkeditem = $(this).find('ul.sa-list li.checked');
        var value = $(checkeditem).html();
        var id = $(checkeditem).attr("value");
        $(checkeditem).closest('.sa-select').find('input.sa-input').val(value);
        $(checkeditem).closest('.sa-select').find('input.sa-hidden-input').val(id);
    });
    $(document).delegate(".ckeckbox-form span", 'click', function (event) {
        var checkbox = $(this).parent().find('.sa-checkbox');
        if ($(checkbox).attr('data-checked') == 'false') {
            $(checkbox).attr({ 'data-checked': 'true' });
            $(checkbox).removeClass('false');
            $(checkbox).addClass('true');
            $(this).parent().find("input").prop('checked', true);
        } else {
            $(checkbox).attr({ 'data-checked': 'false' });
            $(checkbox).removeClass('true');
            $(checkbox).addClass('false');
            $(this).parent().find("input").prop('checked', false);
        }

    });
	$(document).delegate('.new-subtask button','click', function (event) {
        $(this).html('Успішно створено');
		$(this).removeClass('btn--orange');
		$(this).addClass('btn--green');
    });
	
	
	
    $(document).delegate(".sa-select", 'click', function (event) {
        $(this).find('.sa-list').slideToggle();
    });

    $(document).delegate(".sa-list li", 'click', function (event) {
        var value = $(this).html();
        var id = $(this).attr("value");
        $(this).closest('.sa-select').find('input.sa-input').val(value);
        var hiddenField = $(this).closest('.sa-select').find('input.sa-hidden-input');
        $(hiddenField).val(id);
        $(hiddenField).change();
        $(hiddenField).valid();
    });
    $(document).delegate('.mobile-nav-open', 'click', function (event) {
        openMenu();
    });
    //mobile swipe
    $('.main').on('swipeRight', function () {
        openMenu();
    });
    $('.main').on('swipeLeft', function () {
        $('.main-nav').animate({ left: '-320px' }, 200);
    });
   
});

function openMenu() {
    $('.main-nav').animate({ left: '0px' }, 200);
}