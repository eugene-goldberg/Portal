/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('DatasetController', DataTableController);

    DataTableController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder','$scope','$window'];
    function DataTableController($resource, DTOptionsBuilder, DTColumnDefBuilder, $scope, $window) {
        var vm = this;

        $scope.templateList = [{id:1, name: 'H2O'}, {id:2, name: 'R'}, {id: 3, name: "Python"}];

        $scope.selectedOption = $scope.templateList[1];

        $scope.template = {};
        $scope.setValue = function(list) {
            $scope.template.template_id = list.id;
            $scope.template.template_name = list.name;
            console.log("selected item:  " + list.name);
            $window.open('https://www.google.com', '_blank');
        };

        activate();

        ////////////////

        function activate() {

          // Ajax

          $resource('server/datasets.json').query().$promise.then(function(persons) {
             vm.persons = persons;
          });

          // Changing data

          vm.heroes = [{
              'id': 860,
              'firstName': 'Superman',
              'lastName': 'Yoda'
            }, {
              'id': 870,
              'firstName': 'Ace',
              'lastName': 'Ventura'
            }, {
              'id': 590,
              'firstName': 'Flash',
              'lastName': 'Gordon'
            }, {
              'id': 803,
              'firstName': 'Luke',
              'lastName': 'Skywalker'
            }
          ];

          vm.dtOptions = DTOptionsBuilder.newOptions()
            .withPaginationType('full_numbers')
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                {extend: 'copy',  className: 'btn-sm' },
                {extend: 'csv',   className: 'btn-sm' },
                {extend: 'excel', className: 'btn-sm', title: 'XLS-File'},
                {extend: 'pdf',   className: 'btn-sm', title: $('title').text() },
                {extend: 'print', className: 'btn-sm' }
            ]);

          vm.dtColumnDefs = [
              DTColumnDefBuilder.newColumnDef(0),
              DTColumnDefBuilder.newColumnDef(1),
              DTColumnDefBuilder.newColumnDef(2),
              DTColumnDefBuilder.newColumnDef(3).notSortable()
          ];
          vm.person2Add = _buildPerson2Add(1);
          vm.addPerson = addPerson;
          vm.modifyPerson = modifyPerson;
          vm.removePerson = removePerson;

          function _buildPerson2Add(id) {
              return {
                  id: id,
                  firstName: 'Foo' + id,
                  lastName: 'Bar' + id
              };
          }
          function addPerson() {
              vm.heroes.push(angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function modifyPerson(index) {
              vm.heroes.splice(index, 1, angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function removePerson(index) {
              vm.heroes.splice(index, 1);
          }

        }
    }
})();
