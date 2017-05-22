$('.jiudian_txt').click(function(){
	$('.txt_address').show();
});
ajax.ajaxFn({
	url:'../data/jiudian.json',
	type:'get',
	successFn:function(data){
		var data = JSON.parse(data);
		console.log(data);
       for(var i in data){
       	   var li = $('<li><a href="jiudian_yuding.html"><img src="'+data[i].img+'" alt=""></a><div class="name_li_div"><h2>'+data[i].name+'</h2><p>'+data[i].num+'</p></div></li>');
       	   li.appendTo($('.main_dangji_name'));
       }
	},
    errorFn:function(err){
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
})