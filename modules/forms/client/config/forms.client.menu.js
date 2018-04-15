(function() {
    'use strict';

    angular
        .module('app.forms')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Decisioning',
            state: 'app.form',
            type: 'dropdown',
            iconClass: 'icon-note',
            position: 5,
            roles: ['*']
        });

        Menus.addSubMenuItem('sidebar', 'app.form', {title: 'In Development',    state: 'app.form-standard'});
        Menus.addSubMenuItem('sidebar', 'app.form', {title: 'In Deployment',    state: 'app.form-extended'});
        Menus.addSubMenuItem('sidebar', 'app.form', {title: 'In Production',  state: 'app.form-validation'});
        //Menus.addSubMenuItem('sidebar', 'app.form', {title: 'Wizard',      state: 'app.form-wizard'});
        //Menus.addSubMenuItem('sidebar', 'app.form', {title: 'Upload',      state: 'app.form-upload'});
        //Menus.addSubMenuItem('sidebar', 'app.form', {title: 'xEditable',   state: 'app.form-xeditable'});
        //Menus.addSubMenuItem('sidebar', 'app.form', {title: 'Image Crop',  state: 'app.form-imagecrop'});
        //Menus.addSubMenuItem('sidebar', 'app.form', {title: 'uiSelect',    state: 'app.form-uiselect'});

    }

})();
