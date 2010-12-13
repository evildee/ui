$j(document).ready(function(){ 
	var img = new Image();
	var cid = $j('#context_id').attr('value'); //grab [CONTEXT_ID]
	var c = $j('#context').attr('value'); //grab [context]
	var sn = $j('#site_name').attr('value'); //grab [site.name]
	$j('#view-all').click(function() {
		$j(img).addClass('loader').load(function () {
			$j('#comments').empty().append(this);
			$j('.loader').wrap('<div class="loading" />');
		}).attr('src', '/data/assets/' + sn + '/css/images/spinner.gif');
		$j('#comments').load('/?func=object&object=comments_ajax&CONTEXT_ID=' + cid + "&context=" + c + '&show=999');
		return false;
	});
});