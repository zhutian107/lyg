 //自定义指令
 app.directive('tabBar',function(){
    	 return {
    	 	templateUrl:'html/tabBar.html',
    	 	controller:'tabBar',
            css:'css/tabBar.css'
    	 }
 });  
 //控制器
 //tabBar页面切换
 app.controller('tabBar',['$scope','tabBarListData',function ($scope,tabBarListData) {
    	 $scope.arr=tabBarListData;
 }]);
 //首页控制器
 app.controller('home',['$scope','$http',function ($scope,$http) {
    	//ajax页面调取数据
        $http.get('/homedata').then(function(data){  
           // console.log(data);            
            $scope.arr=[
                {img:'images/img1/everyday_1.png'},
                {img:'images/img1/everyday_2.png'},                
                {img:'images/img1/everyday_3.png'},
                {img:'images/img1/everyday_4.png'}
            ];
           $scope.arr1 = data.data.data.act_info[1].act_rows;
           $scope.arr2 = data.data.data.act_info[3].act_rows;
           $scope.arr3=[
                {img:'images/img1/ka1.png'},
                {img:'images/img1/ka2.png'},                
                {img:'images/img1/ka3.png'},
                {img:'images/img1/ka4.png'}
            ];
           $scope.arr4 = data.data.data.act_info[4].act_rows;
           $scope.arr5 = data.data.data.act_info[5].act_rows;
        },function(err){
            console.log(err);
        });
        $scope.swipers = [
            {img:'../images/img1/pic-1.jpg'},
            {img:'../images/img1/pic-2.jpg'},
            {img:'../images/img1/pic-3.jpg'},
            {img:'../images/img1/pic-4.jpg'},
            {img:'../images/img1/pic-5.jpg'}
        ]
 }]);
 //控制器
 app.controller('shandian',['$scope','$http','shopcar',function($scope,$http,shopcar){
        $scope.arr01 = ['热销榜','天天特价','冰镇饮料','优选水果','牛奶面包','卤味熟食','饮料酒水','休闲零食','冰激凌','粮油调味','方便速食','生活用品']
        $http.get('homehotproducts').then(function(res){
            $scope.arr02=res.data.data;
        })
        $scope.add=function(ss2){       
            shopcar.add(ss2);
            console.log(shopcar);
        }
 }]);
 //控制器
 app.controller('shopCars',['$scope','shopcar',function($scope,shopcar){
        $scope.list=shopcar.list;
        $scope.removeAll=function(){
            shopcar.deleAll();           
        }
        $scope.dele=function(obj,index){
            shopcar.dele(obj,index);
        }
 }]);

