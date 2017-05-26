$('.top span').click(function(){
	$('.top').hide();
}); 

var img = document.querySelector('.dong_img');
var jing = document.querySelector('.xingcheng_jing');
var dong = document.querySelector('.dong_div');
jing.onmousemove = function(e){
        var ev = e || window.event;
        var x = ev.clientX-(img.offsetWidth/2);
        var y = ev.clientY-(img.offsetHeight/2);

       if (x<=0) {
            x=0;
        }//
        else if (x>=dong.offsetWidth-img.offsetWidth) {
            x=dong.offsetWidth-img.offsetWidth;
        }
        if (y<=0) {
            y=0;
        }
        else if (y>=dong.offsetHeight-img.offsetHeight) {
            y=dong.offsetHeight-img.offsetHeight;
        } 
        img.style.left = x+"px";
        img.style.top = y+"px";


    }
    $('.shi').on('mouseover',function(){
    	$('.bu').show();
    })
    $('.shi').on('mouseout',function(){
    	$('.bu').hide();
    });
    $.get('../data/xingcheng.json',function(data){
    	var data = data.arr[0];
    	for(var i in data){
    		var li = $('<li><span>'+data[i].title+'：</span><a href="#">'+data[i].a1+'</a><a href="#">'+data[i].a2+'</a><a href="#">'+data[i].a3+'</a><a href="#">'+data[i].a4+'</a><a href="#">'+data[i].a5+'</a><a href="#">'+data[i].a6+'</a><a href="#">'+data[i].a7+'</a><a href="#">'+data[i].a8+'</a><a href="#">'+data[i].a9+'</a><a href="#">'+data[i].a10+'</a><a href="#">'+data[i].a11+'</a><a href="#">'+data[i].a12+'</a></li>')
    	    li.appendTo($('.main_xuanzhi'));
    	}
    })
$.get('../data/xingcheng.json',function(data){
    	var data = data.arr[1];
    	for(var i in data){
    		var li = $('<li><span>'+data[i].title+'：</span><a href="#">'+data[i].a1+'</a><a href="#">'+data[i].a2+'</a><a href="#">'+data[i].a3+'</a><a href="#">'+data[i].a4+'</a><a href="#">'+data[i].a5+'</a></li>')
    	    li.appendTo($('.main_xuanzhi'));
    	}
})
$.get('../data/xingcheng.json',function(data){
    	var data = data.arr[2];
    	for(var i in data){
    		var li = $('<li><span>'+data[i].title+'：</span><a href="#">'+data[i].a1+'</a><a href="#">'+data[i].a2+'</a><a href="#">'+data[i].a3+'</a><a href="#">'+data[i].a4+'</a><a href="#">'+data[i].a5+'</a><a href="#">'+data[i].a6+'</a><a href="#">'+data[i].a7+'</a><a href="#">'+data[i].a8+'</a><a href="#">'+data[i].a9+'</a><a href="#">'+data[i].a10+'</a><a href="#">'+data[i].a11+'</a></li>')
    	    li.appendTo($('.main_xuanzhi'));
    	}
})
$.get('../data/xingcheng_shuju.json',function(data){
	console.log(data)
    	for(var i in data){
    		var li = $('<li><div><img src="'+data[i].img+'"></div><p class="p_span"><span>'+data[i].shop+'</span><span>'+data[i].food+'</span></p><p class="name_city">'+data[i].city+'</p><p><span class="glyphicon glyphicon-user"><a href="javascript:void(0)" title="">'+data[i].name+'</a></span><span class="glyphicon glyphicon-eye-open">'+data[i].num1+'</span>|<span class="glyphicon glyphicon-list-alt">'+data[i].num2+'</span></p><span class="glyphicon glyphicon-list-alt cope">复制</span></li>')
    	    li.appendTo($('.xingcheng_shuju'));
    	}
})
