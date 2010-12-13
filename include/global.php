<?php

$filterArray = array(
'GRID', 'UID', 'CID', 'fsearch', 'search', 'keywords', 'keyword', 'type', 'userlevel', 'fusername', 'username', 'fullname', 'fgender', 'fage_low', 'fage_high', 'fmarital', 'fcountry' , 'fmiles', 'fzipcode', 'favatar', 'fethnicity', 'fyou_body', 'fsmoker', 'fdrinker', 'fsexpref', 'freligion', 'featured', 'key', 'artist', 'updated',
// title passing for seo in full view
'title',
// upload access from your profile or group pass (passing var to display upload button)
'entry',
// username passing
'user',
// group name passing
'gname'
);

function addToSort($filterArray) {
	for ( $count = 0; $count < count($filterArray); $count++) {

	echo ('<if_site.get.' . $filterArray[$count] . '>&' . $filterArray[$count] . '=[site.get.' . $filterArray[$count] . ']' . '</if_site.get.' . $filterArray[$count] . '>');
	}
}

function addToSearch($filterArray) {
	for ( $count = 0; $count < count($filterArray); $count++) {

	echo ('<if_site.get.' . $filterArray[$count] . '><input type="hidden" name="' . $filterArray[$count] . '" value="[site.get.' .  $filterArray[$count]  . ']" />' . '</if_site.get.' . $filterArray[$count] . '>');
	}
}
?>
