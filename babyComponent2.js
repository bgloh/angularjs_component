



// baby component controller 
var babyComponentCtrl = function(){
      var ctrl=this;
      var name;
      
      // initialization
      ctrl.$onInit= function(){
           // Initialization code
           name = ctrl.name;

           }

      // add child
      ctrl.add = function(){
            console.log('add click');
            // call parent method
            ctrl.pCtrl.addChild({'name': name});
      }
};


babyComponentTemplate =  '<ng-transclude></ng-transclude>' +
                'baby template : {{$ctrl.name}}  ' +
                '<button ng-click="$ctrl.add()">add</button>'



app
.component('babyComponent',{
              template: babyComponentTemplate,
              controller: babyComponentCtrl,
              transclude: true,
              require : {
                  pCtrl : '^parentComponent'
              },
              bindings:{
                  name : '@'
              }
            });


      




