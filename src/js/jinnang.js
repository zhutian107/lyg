$('.top span').click(function(){
    $('.top').hide();
}); 
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
 });
ajax.ajaxFn({
    url:"../data/jinnang.json",
    data:{
        
    },
    type:'get',
    successFn:function(data){
        var data = JSON.parse(data);
        // console.log(data);
        for(var i in data){
            var li = $('<li><img src="'+data[i].a+'" alt=""><p>'+data[i].b+'</p><button type="button" class="btn btn-primary">'+data[i].c+'</button></li>');
            li.appendTo($('.main_bianji'));
        }
    },
    errorFn:function(err){
    }
});
ajax.ajaxFn({
    url:"../data/jinnang02.json",
    data:{
        
    },
    type:'get',
    successFn:function(data){
        var data = JSON.parse(data);
        // console.log(data);
        for(var i in data){
            var li = $('<li><img src="'+data[i].a+'" alt="">&nbsp;<span>'+data[i].b+'</span></li>');
            $('.main_xiazai h4').after(li);
        }
    },
    errorFn:function(err){
    }
});
ajax.ajaxFn({
    url:"../data/jinnang03.json",
    data:{
        
    },
    type:'get',
    successFn:function(data){
        var data = JSON.parse(data);
        console.log(data);
        for(var i in data){
            var li = $('<li><div id="jinnang_mask"></div><img src="'+data[i].a+'" alt=""><h6>'+data[i].b+'</h6><p>'+data[i].c+'</p><p>'+data[i].d+'</p></li>');
            li.appendTo($('.main_gengxin'))
        }
    },
    errorFn:function(err){
    }
});
