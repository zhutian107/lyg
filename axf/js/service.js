
//tabBar切换
app.factory('tabBarListData',function(){
    	var list=[
             {
             	cla:'cla1',
                title:'首页',
                href:'#/'
             },
             {
                cla:'cla2',
                title:'闪电快送',
                href:'#/shandian'
             },
             {
                cla:'cla3',
                title:'购物车',
                href:'#/shopcar'
             },
             {
                cla:'cla4',
                title:'预定鲜活',
                href:'#/yuding'
             },
            {
                cla:'cla5',
                title:'我的',
                href:'#/mine'
             },
    	 ]
    	return list;
    });
//添加删除
app.factory('shopcar',function(){
    var fac={};
    fac.list=[];
    //单条删除
    fac.dele=function(obj,index){
        if (obj.count>1) {
            obj.count--;
        }else{
           fac.list.splice(index,1);
        }
    };
    //添加
    fac.add=function(obj){        
        for (var i = 0; i < fac.list.length; i++) {
            if (fac.list[i].id==obj.id) {
               fac.list[i].count++;
               return;  
            }
        };
        obj.count=1;
        fac.list.push(obj);
    };
    //全部删除
    fac.deleAll=function(){        
        //清空数组内的元素
        fac.list.splice(0,fac.list.length);
    }
    return fac;
});