export function CompareToDirective($parse) {
    'ngInject'
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ngModel) {
            var mainModel = $parse(attrs.compareTo);
            var secondModel = $parse(attrs.ngModel);

            //watch for changes in the 2 password input fields            
            scope.$watch(attrs.ngModel, function (newValue) {
                ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
            });

            scope.$watch(attrs.compareTo, function (newValue) {
                ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
            });





        }
    }
}