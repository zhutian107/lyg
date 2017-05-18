$('#sou').on('mouseover',function(){
	$('.txt').show();
	$(this).css('color','green');
});
$('#sou').click(function(){
	$('.txt').hide();
	$('#sou').css('color','white');
	$('.txt').val('');
});
//提示框的信息输入到搜索框  运用的闭包
var lis = document.querySelectorAll('#uls li');
for (var i = 0; i < lis.length; i++) {
	(function (a) {
		lis[i].onclick = function () {
			$('.txt').val(lis[a].innerHTML);
			$('.txt').show();
			$('.baidusou').hide();
			$(this).css('color','green');
		}
	})(i);		
};
//搜索框提示   用的是百度搜索框
$(function(){
    $(".txt").on("keydown",function(){
        if(arr.length > 0){
            $(".baidusou").show();
                console.log(1);
        }else{
            $("baidusou").hide();
        }
        var txtVal = $(".txt").val();
        var s1 = document.createElement("script");
        s1.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+txtVal+"&cb=callBackFn";
        document.getElementsByTagName("head")[0].appendChild(s1);
        document.getElementsByTagName("head")[0].removeChild(s1);
        $("#uls li").each(function(i){
            $(this).text(arr[i]);
            // console.log(arr);
        })
    })
});

var asa = document.querySelectorAll('.header_left a');
for (var i = 0; i < asa.length; i++) {
	(function (a) {
		asa[i].onmouseover = function () {
			asa[a].style.borderTop = '2px solid white';
		}
		asa[i].onmouseout = function () {
			asa[a].style.borderTop = '';
		}
	})(i);		
};
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay:5000
    });

ajax.ajaxFn({
    url:"data/swiper.json",
    data:{
        
    },
    type:'get',
    successFn:function(data){
        var data = JSON.parse(data);
        // console.log(data);
        for(var i in data){
            var img = new Image();
            img.src = data[i].img;
            $('.swiper-slide').eq(i).append(img);
        }
    },
    errorFn:function(err){
    }
});
var lis = document.querySelectorAll('.spans span');
var divs = document.querySelectorAll('.divs div');
for (var i = 0; i < lis.length; i++) {
            lis[i].index = i;
            lis[i].onmouseover = function(){
                for (var j = 0; j < divs.length; j++) {
                    $('.divs div').eq(j).hide();
                }
                $('.divs div').eq(this.index).show(1000);
                for (var k = 0; k < lis.length; k++) {
                    lis[k].style.background="";
                }
                this.style.background="white";

            }
          }
        lis[0].style.background="white";
var lis_1 = document.querySelectorAll('.spans_1 span');
var divs_1 = document.querySelectorAll('.divs_1 div');
for (var i = 0; i < lis_1.length; i++) {
            lis_1[i].index = i;
            lis_1[i].onmouseover = function(){
                for (var j = 0; j < divs_1.length; j++) {
                    $('.divs_1 div').eq(j).hide(500);
                }
                $('.divs_1 div').eq(this.index).show();
                for (var k = 0; k < lis_1.length; k++) {
                    lis_1[k].style.background="";
                }
                this.style.background="green";

            }
          }
        lis_1[0].style.background="green";
ajax.ajaxFn({
    url:"data/01.json",
    data:{
        
    },
    type:'get',
    successFn:function(data){
        var data = JSON.parse(data);
        var data = data.data.list[0];
        // console.log(data); 
        for(var i in data){
        	var ul = $('<ul><li><div id="mask"></div><img src="'+data[i].pic+'"><p>'+data[i].title+'</p><p><span>'+data[i].cn_name+'</span><span>'+data[i].id+'</span></p></li></ul>');
            ul.appendTo($('.imgs'));
        }
        for(var ii in data){
            var ul = $('<ul><li><img src="'+data[ii].pic+'"><p>'+data[ii].title+'</p><p><span>'+data[ii].cn_name+'</span><span>'+data[ii].id+'</span></p></li></ul>');
            ul.appendTo($('#sw_5'));
        }
        for(var iii in data){
            var ul = $('<ul><li><img src="'+data[iii].pic+'"><p>'+data[iii].title+'</p><p><span>'+data[iii].cn_name+'</span><span>'+data[iii].id+'</span></p></li></ul>');
            ul.appendTo($('#sw_6'));
        }
        for(var iiii in data){
            var ul = $('<ul><li><img src="'+data[iiii].pic+'"><p>'+data[iiii].title+'</p><p><span>'+data[iiii].cn_name+'</span><span>'+data[iiii].id+'</span></p></li></ul>');
            ul.appendTo($('#sw_7'));
        }
        for(var iiiii in data){
            var ul = $('<ul><li><img src="'+data[iiiii].pic+'"><p>'+data[iiiii].title+'</p><p><span>'+data[iiiii].cn_name+'</span><span>'+data[iiiii].id+'</span></p></li></ul>');
            ul.appendTo($('#sw_8'));
        }
        for(var iiiiii in data){
            var ul = $('<ul><li><img src="'+data[iiiiii].pic+'"><p>'+data[iiiiii].title+'</p><p><span>'+data[iiiiii].cn_name+'</span><span>'+data[iiiiii].id+'</span></p></li></ul>');
            ul.appendTo($('#sw_9'));
        }
    },
    errorFn:function(err){
    }
});


ajax.ajaxFn({
    url:"data/shangcheng.json",
    data:{
        
    },
    type:'get',
    successFn:function(data){
        var data = JSON.parse(data);
        // console.log(data); 
        for(var i in data){
            var ul = $('<ul><li><p class="data_name">'+data[i].name+'</p><img src="'+data[i].img+'"><p><span><mark>'+data[i].price+'</mark>元起</span><span class="btn btn-danger">'+data[i].btn+'</span></p><p class="data_main">'+data[i].main+'</p></li></ul>');
            ul.appendTo($('#sw'));
        }
    },
    errorFn:function(err){
    }
});
ajax.ajaxFn({
    url:"data/shangcheng02.json",
    data:{
        
    },
    type:'get',
    successFn:function(data){
        var data = JSON.parse(data);
        console.log(data); 
        for(var i in data){
            var dl = $('<dl class="dl"><dt><img src="'+data[i].a+'"></dt><dd><a href="#">'+data[i].b+'</a><p><span class="btn btn-default">'+data[i].c+'</span><span class="long_1">'+data[i].d+'</span></p><p class="dd_2"><mark>'+data[i].e+'</mark>元起</p></dd></dl>');
            dl.appendTo($('#sw_1'));
        }
        for(var k in data){
            var dl = $('<dl class="dl"><dt><img src="'+data[k].a+'"></dt><dd><a href="#">'+data[k].b+'</a><p><span class="btn btn-default">'+data[k].c+'</span><span class="long_1">'+data[k].d+'</span></p><p class="dd_2"><mark>'+data[k].e+'</mark>元起</p></dd></dl>');
            dl.appendTo($('#sw_2'));
        }
        for(var kk in data){
            var dl = $('<dl class="dl"><dt><img src="'+data[kk].a+'"></dt><dd><a href="#">'+data[kk].b+'</a><p><span class="btn btn-default">'+data[kk].c+'</span><span class="long_1">'+data[kk].d+'</span></p><p class="dd_2"><mark>'+data[kk].e+'</mark>元起</p></dd></dl>');
            dl.appendTo($('#sw_3'));
        }
        for(var kkk in data){
            var dl = $('<dl class="dl"><dt><img src="'+data[kkk].a+'"></dt><dd><a href="#">'+data[kkk].b+'</a><p><span class="btn btn-default">'+data[kkk].c+'</span><span class="long_1">'+data[kkk].d+'</span></p><p class="dd_2"><mark>'+data[kkk].e+'</mark>元起</p></dd></dl>');
            dl.appendTo($('#sw_4'));
        }
    },
    errorFn:function(err){
    }
});

        
        

