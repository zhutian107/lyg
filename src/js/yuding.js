ajax.ajaxFn({
	url:"../data/yuding.json",
	type:"get",
	successFn:function(data){
		console.log(data);
		var data = JSON.parse(data);
		for(var i in data){
			var ul = $('<ul class="left_ul_shuju"><li><img src="'+data[i].img+'" alt=""><div><h4>'+data[i].title+'<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-thumbs-up"></span></h4><p class="li_p_en">'+data[i].en+'<span>￥<mark>'+data[i].price+'</mark>起/晚</span></p><p>'+data[i].pl+'<button type="button" class="btn btn-warning">查看详情</button></p><p>'+data[i].main+'</p><p>'+data[i].chose+'</p><p><img src="'+data[i].small_pic+'" alt=""> '+data[i].liuyan+'</p></div></li></ul>');
			$('#ss').before(ul);
		}
	},
	errorFn:function(err){
		console.log(1);
    }
});
ajax.ajaxFn({
	url:'../data/jiudian02.json',
	type:'get',
	successFn:function(data){
		var data = JSON.parse(data);
		console.log(data);
       	var li = $('<li><span>'+data[0].a+'</span><span>'+data[0].b+'</span><span>'+data[0].c+'</span><span>'+data[0].d+'</span><span>'+data[0].e+'</span><span>'+data[0].f+'</span><span>'+data[0].g+'</span><span>'+data[0].i+'</span><span>'+data[0].h+'</span><span>'+data[0].j+'</span><span>'+data[0].k+'</span><span>'+data[0].l+'</span><span>'+data[0].m+'</span><span>'+data[0].n+'</span><span>'+data[0].o+'</span><span>'+data[0].p+'</span><span>'+data[0].q+'</span><span>'+data[0].r+'</span><span>'+data[0].s+'</span><span>'+data[0].t+'</span></li>');
       	li.appendTo($('.main_ul_guojia'));
       
	},
    errorFn:function(err){
    }
});
 $(window).scroll(function(event) {  
    if($(window).scrollTop()>230){  
        $('.main_right').css('position','fixed').css({'top':'-95px','right':'32px'})  
    }else{
    	$('.main_right').css({'position':'absolute','right':'32px','top':'120px'})
    }
});  
 	