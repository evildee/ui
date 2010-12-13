		$j(document).ready(function(){
			$j("#ratings").children().not("select").hide();

			// Create target element for onHover titles
			var caption = $j("<span/>");
			var action_url = $j("#ratings").attr("action"); // grabs url from from action
				if($j("#vote_status").attr("value") != "") { //checks for vote from tag [UID ratings.get_rating]
				var voted = true;
				}else{
				var voted = false;
				}
			
			$j("#ratings").stars({
				disabled: voted,
				inputType: "select",
				split: 2,
				oneVoteOnly: true,
				captionEl: caption, // point to our newly created element
				callback: function(ui, type, value){
					$j.post(action_url, {rating: value}, function(data)
					{
						$j("#ajax_response").hide().html("Thank you for voting!").fadeIn("slow");
					});
				}

			});

			// Make it available in DOM tree
			$j(caption).appendTo("#ratings");
		});
		