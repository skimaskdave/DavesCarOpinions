function selectType() {
	$(document).ready(function(){
		$('#myselection').on('change', function() {
			var demovalue = $(this).val();
			$("div.myDiv").hide();
			$("#" + demovalue).show();
		});
	});
}