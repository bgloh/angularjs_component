
// baby component controller 
parentComponentCtrl = function(){
      var ctrl=this;
      var children = [];
      
      // initialization
      ctrl.$onInit= function(){
           // Initialized
           ctrl.children = children;
           }

      // add child     
      ctrl.addChild = function(child){
            children.push(child);
            console.log(children);
      }
};


parentComponentTemplate = 
'<p> parent template : {{$ctrl.name}}</p>' +
'<div ng-repeat="child in $ctrl.children"><li>{{child.name}}</li></div>' +

'<ng-transclude></ng-transclude>'  


app
.component('parentComponent',{
              template: parentComponentTemplate,
              controller: parentComponentCtrl,
              transclude: true,
              bindings:{
                  name : '@'
              }
            }); 