
 var getdbCtrl = function($http){
  var ctrl = this;
  var dbData = [];
  ctrl.dbShow = false;
  ctrl.dbData = dbData;
  

  // DB URL
  //ctrl.url = 'https://www.thedoctorr.com/retrieveDB';

  var fetchDB = function(url) {
    // get data from DB
    $http.get(url)
         .then(function(response){ctrl.dbData = response.data;})   
  }

  // Intialization
  ctrl.$onInit= function() {
  
    fetchDB(ctrl.url); // get data from DB

    // test input value
    console.log(ctrl.url);
    console.log(ctrl.val);
    console.log(ctrl.array[1].a);
  }
  
  // show DB
  ctrl.showdb = function(){
    //console.log('showdb clicked...');
    console.log(ctrl.dbData);
  }
}

getdbTemplate = '<ng-transclude></ng-transclude>' +
                'getdb component:' +
                '<button ng-click="$ctrl.showdb()"">showdbOnConsole</button>' +
                'show:<input type="checkbox" ng-model="$ctrl.dbShow" ></input> <br>'+
                'url:{{$ctrl.url}}'+
        
                '<table>' +
                '<tr ng-repeat="d in $ctrl.dbData" ng-show="$ctrl.dbShow">' +
                '<td>{{d.fields.name}} </td>' +
                '<td>{{d.fields.phone}}</td>' +
                '</tr></table>' +
                'test input value,  val: {{$ctrl.val}} <br>' +
                'test input object, obj: {{$ctrl.obj}} <br>' +
                'test input array, array: {{$ctrl.array}}';  
                

app
.controller('getdbCtrl', ['$http', getdbCtrl])
.component('getdbComponent',{
              template: getdbTemplate,
              controller: getdbCtrl,
              transclude: true,
              require : {
                  
              },
              bindings:{
                  url   : '@',
                  val   : '<',
                  obj   : '<',
                  array : '<'
              }
            });