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
// var lis = document.querySelectorAll('.spans span');
// var divs = document.querySelectorAll('.divs div');
// for (var i = 0; i < lis.length; i++) {
//             lis[i].index = i;
//             lis[i].onmouseover = function(){
//                 for (var j = 0; j < divs.length; j++) {
//                     divs[j].style.display="none";
//                 }
//                 divs[this.index].style.display= "block";
//                 for (var k = 0; k < lis.length; k++) {
//                     lis[k].style.background="";
//                 }
//                 this.style.background="white";
//             }
//           }
//         lis[0].style.background="white";
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
        	var ul = $('<ul><li><img src="'+data[i].pic+'"><p>'+data[i].title+'</p><p><span>'+data[i].cn_name+'</span><span>'+data[i].id+'</span></p></li></ul>');
            ul.appendTo($('.imgs'));
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
// ajax.ajaxFn({
//     url:"data/shangcheng02.json",
//     data:{
        
//     },
//     type:'get',
//     successFn:function(data){
//         var data = JSON.parse(data);
//         console.log(data); 
//         for(var i in data){
//             var dl = $('<dl class="dl"><dt><img src="'+data[i].a+'"></dt><dd><a href="#"'+data[i].b+'</a><p><span class="btn btn-default">'+data[i].c+'</span><span class="long_1">'+data[i].d+'</span></p><p class="dd_2"><mark>'+data[i].e+'</mark>元起</p></dd></dl>');
//             dl.appendTo($('#sw_1'));
//         }
//     },
//     errorFn:function(err){
//     }
// });

        
        

