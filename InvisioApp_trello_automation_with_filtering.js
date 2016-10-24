var arr = [], 
	linksArr = [];
	$('.divider_label > div:nth-child(1) > span').each(function() {
			if($(this).text().match(/\D+\s?[\|]?/g)){
				var key = $(this).text().match(/\D+\s?[\|]?/g).join(' '),
					screenCol = $(this).closest('.divider').parent().find('.screen.grid').find('.screen-wrap .image-inner');
					screenCol.each(function(){
						if(key.match(/\w+/)){
							var alt = $(this).attr('alt');
							arr.push("Frontend - " + alt);
							linksArr.push("https://projects.invisionapp.com" + $('a[title*="' + alt + '"]').attr('href'));
						}
					});
			}
		});