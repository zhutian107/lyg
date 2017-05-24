$('.top span').click(function(){
	$('.top').hide();
}); 
$('.pi img').on('mouseenter',function(){
	$(this).parent().find($('p')).hide();
	$(this).parent().find($('div')).slideDown(1000);	
});
$('.pi img').on('mouseleave',function(){
	$(this).parent().find($('p')).show();
	$(this).parent().find($('div')).slideUp();
});	
$.get('../data/address.json',function(data){
	console.log(data);
	var data = data.data.code;
	for(var i in data){
       var li = $('<li><a href="#" title="">'+data[i].name+'<span>'+data[i].pinyin+'</span></a></li>');
       li.appendTo($('.ul_name'))
	}
});

function pic(){
	$('.pi img').on('mouseenter',function(){
		$(this).parent().find($('p')).hide();
		$(this).parent().find($('div')).slideDown(1000);	
	});
	$('.pi img').on('mouseleave',function(){
		$(this).parent().find($('p')).show();
		$(this).parent().find($('div')).slideUp();
	});	
}
$('.main_nav_1 a').click(function(){
	switch($(this).index()){
		case 1:
		     $(this).css({'background':'#65B17F',"color":"#fff"}).siblings().css({'background':'#fff',"color":"black"});	
		     $('.main_pics').load('address_1.html',function(){
		     	pic();
		     });
		     $('.ul_name').load('address_name1.html',function(){
		     	  $.get('../data/address_name1.json',function(data){
						var data = data.data.code;
						for(var i in data){
					       var li = $('<li><a href="#" title="">'+data[i].name+'<span>'+data[i].pinyin+'</span></a></li>');
					       li.appendTo($('.ul_name'))
						}
				  });
		     })
		     break;
		case 2:
		     $(this).css({'background':'#65B17F',"color":"#fff"}).siblings().css({'background':'#fff',"color":"black"});	
		     $('.main_pics').load('address_2.html',function(){
		     	pic();
		     });
		     $('.ul_name').load('address_name2.html',function(){
		     	  $.get('../data/address_name2.json',function(data){
						var data = data.data.code;
						for(var i in data){
					       var li = $('<li><a href="#" title="">'+data[i].name+'<span>'+data[i].pinyin+'</span></a></li>');
					       li.appendTo($('.ul_name'))
						}
				  });
		     })
		     break;
		case 3:
		     $(this).css({'background':'#65B17F',"color":"#fff"}).siblings().css({'background':'#fff',"color":"black"});	
		     $('.main_pics').load('address_0.html',function(){
		     	pic();
		     });
		     break;         
	}
})
