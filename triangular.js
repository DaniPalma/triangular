(function() {
    'use strict';

    angular
        .module('triangular', [
            'ngMaterial',
            'triangular.layouts', 'triangular.components', 'triangular.themes', 'triangular.directives', 'triangular.router',
            // 'triangular.profiler',
            // uncomment above to activate the speed profiler
            'ui.router'
        ]);
})();
angular.module("triangular").run(["$templateCache", function($templateCache) {$templateCache.put("app/triangular/components/footer/footer.tmpl.html","<md-toolbar id=\"footer\" md-theme=\"{{triSkin.elements.toolbar}}\" ng-controller=\"FooterController as vm\" ng-show=\"vm.layout.footer\"><div class=\"md-toolbar-tools md-body-1\" layout=\"row\" layout-align=\"space-between center\"><h2>{{vm.name}}</h2><h2 hide-xs=\"\" ng-bind-html=\"vm.copyright\"></h2><h2>v{{vm.version}}</h2></div></md-toolbar>");
$templateCache.put("app/triangular/components/menu/menu-item-divider.tmpl.html","<md-divider></md-divider>");
$templateCache.put("app/triangular/components/menu/menu-item-dropdown.tmpl.html","<md-button ng-click=\"triMenuItem.toggleDropdownMenu()\" class=\"md-raised md-primary side-menu-link\"><md-icon ng-if=\"::(triMenuItem.item.icon !== undefined)\" class=\"side-menu-icon\" md-font-icon=\"{{::triMenuItem.item.icon}}\"></md-icon><span translate=\"\">{{::triMenuItem.item.name}}</span><md-icon class=\"menu-toggle-icon\" md-font-icon=\"zmdi zmdi-chevron-right\" ng-class=\"{ open: triMenuItem.item.open }\"></md-icon></md-button><ul class=\"drop-down-list\" ng-show=\"triMenuItem.item.open\"><li ng-repeat=\"child in triMenuItem.item.children\"><tri-menu-item item=\"::child\"></tri-menu-item></li></ul>");
$templateCache.put("app/triangular/components/menu/menu-item-link.tmpl.html","<md-button ng-click=\"triMenuItem.openLink(triMenuItem.item)\" class=\"md-primary md-raised side-menu-link\" ng-class=\"{ \'md-hue-1\': triMenuItem.item.active }\"><md-icon ng-if=\"::(triMenuItem.item.icon !== undefined)\" class=\"side-menu-icon\" md-font-icon=\"{{::triMenuItem.item.icon}}\"></md-icon><span translate=\"\">{{::triMenuItem.item.name}}</span> <small ng-if=\"triMenuItem.item.badge\" theme-background=\"accent\" class=\"side-menu-badge\">{{::triMenuItem.item.badge}}</small></md-button>");
$templateCache.put("app/triangular/components/menu/menu.tmpl.html","<md-toolbar class=\"sidebar-left-toolbar\" md-theme=\"{{::triSkin.elements.logo}}\"><div class=\"md-toolbar-tools\" layout=\"row\" layout-align=\"start center\"><div class=\"sidebar-left-logo\"><img ng-src=\"{{::vm.sidebarInfo.appLogo}}\" alt=\"{{::vm.sidebarInfo.appName}}\" width=\"24px\"></div><h2 flex=\"\" class=\"sidebar-left-title\">{{::vm.sidebarInfo.appName}}</h2><md-button class=\"md-icon-button sidebar-left-icon\" ng-click=\"vm.toggleIconMenu()\" aria-label=\"Open side menu\"><md-icon md-font-icon=\"\" ng-class=\"{ \'zmdi zmdi-unfold-more\' : vm.layout.sideMenuSize == \'icon\', \'zmdi zmdi-unfold-less\' : vm.layout.sideMenuSize == \'full\' }\"></md-icon></md-button></div></md-toolbar><tri-menu md-theme=\"{{triSkin.elements.sidebar}}\" flex=\"\"></tri-menu>");
$templateCache.put("app/triangular/components/notifications-panel/notifications-panel.tmpl.html","<md-content flex=\"\" layout=\"\" class=\"admin-notifications\"><md-tabs flex=\"\" md-stretch-tabs=\"always\" md-selected=\"vm.currentTab\"><md-tab><md-tab-label><md-icon md-font-icon=\"zmdi zmdi-email\"></md-icon></md-tab-label><md-tab-body><md-content><md-list><md-list-item class=\"md-3-line\" ng-repeat=\"email in ::vm.emails\" ng-click=\"vm.openMail(email)\"><img class=\"md-avatar animate\" ng-src=\"{{::email.from.image}}\" alt=\"{{::email.from.name}}\"><div class=\"md-list-item-text\"><div class=\"email-inbox-list-item-name-time\" layout=\"row\" layout-align=\"space-between start\"><h3>{{::email.from.name}}</h3><p class=\"md-caption\" am-time-ago=\"::email.date\"></p></div><h4>{{::email.subject}}</h4></div><md-divider ng-hide=\"$last\"></md-divider></md-list-item></md-list></md-content></md-tab-body></md-tab><md-tab><md-tab-label><md-icon md-font-icon=\"fa fa-bell-o\"></md-icon></md-tab-label><md-tab-body><md-content><md-list><div ng-repeat=\"group in ::vm.notificationGroups\"><md-subheader class=\"md-primary\">{{::group.name}}</md-subheader><md-list-item ng-repeat=\"notification in ::group.notifications\" layout=\"row\" layout-align=\"space-between center\"><md-icon md-font-icon=\"{{::notification.icon}}\" ng-style=\"{ color: notification.iconColor }\"></md-icon><p>{{::notification.title}}</p><span class=\"md-caption\" am-time-ago=\"::notification.date\"></span></md-list-item></div></md-list></md-content></md-tab-body></md-tab><md-tab><md-tab-label><md-icon md-font-icon=\"zmdi zmdi-account\"></md-icon></md-tab-label><md-tab-body><md-content><md-list><div ng-repeat=\"group in ::vm.settingsGroups\"><md-subheader class=\"md-primary\"><span translate=\"\">{{::group.name}}</span></md-subheader><md-list-item ng-repeat=\"setting in ::group.settings\" layout=\"row\" layout-align=\"space-around center\"><md-icon md-font-icon=\"{{::setting.icon}}\"></md-icon><p translate=\"\">{{::setting.title}}</p><md-switch class=\"md-secondary\" ng-model=\"setting.enabled\"></md-switch></md-list-item></div><div ng-repeat=\"group in ::vm.statisticsGroups\"><md-subheader class=\"md-primary\"><span translate=\"\">{{::group.name}}</span></md-subheader><md-list-item ng-repeat=\"stat in ::group.stats\" layout=\"column\" layout-align=\"space-around start\"><md-progress-linear ng-class=\"::stat.mdClass\" md-mode=\"determinate\" ng-value=\"::stat.value\"></md-progress-linear><p translate=\"\">{{::stat.title}}</p></md-list-item></div></md-list></md-content></md-tab-body></md-tab></md-tabs></md-content>");
$templateCache.put("app/triangular/components/table/table-directive.tmpl.html","<table class=\"md-table\"><thead><tr><th ng-repeat=\"column in columns\" ng-click=\"sortClick(column.field)\" ng-class=\"headerClass(column.field)\"><md-icon ng-show=\"showSortOrder(column.field, true)\" class=\"zmdi-hc-rotate-90\" md-font-icon=\"zmdi zmdi-arrow-back\"></md-icon><md-icon ng-show=\"showSortOrder(column.field, false)\" class=\"zmdi-hc-rotate-270\" md-font-icon=\"zmdi zmdi-arrow-back\"></md-icon><span>{{column.title | translate}}</span></th></tr></thead><tbody><tr ng-repeat=\"content in contents | filter:filters | startFrom:page * pageSize | limitTo: pageSize\"><td ng-repeat=\"column in columns\" ng-bind-html=\"cellContents(column, content)\" ng-class=\"column.field + \'-cell\'\"></td></tr></tbody><tfoot><tr><td colspan=\"{{columns.length}}\"><div class=\"md-table-footer\" layout=\"row\" layout-align=\"end center\"><div class=\"md-table-page-select\" layout=\"row\" layout-align=\"center center\"><span>TABLES.ROWS</span><md-select ng-model=\"pageSize\" ng-change=\"refresh(true)\"><md-option value=\"5\">5</md-option><md-option value=\"10\">10</md-option><md-option value=\"25\">25</md-option><md-option value=\"50\">50</md-option><md-option value=\"100\">100</md-option></md-select></div><span class=\"md-table-info\">{{pageStart()}} - {{pageEnd()}} <span translate=\"\">TABLES.OF</span> {{totalItems()}}</span><div class=\"md-table-page-nav\"><md-button ng-disabled=\"page == 0\" ng-click=\"page = page - 1\" aria-label=\"{{\'TABLES.PREV\' | translate}}\" class=\"md-primary md-icon-button\"><md-icon md-font-icon=\"zmdi zmdi-chevron-left\"></md-icon></md-button><md-button ng-disabled=\"page == numberOfPages() - 1\" ng-click=\"page = page + 1\" aria-label=\"{{\'TABLES.NEXT\' | translate}}\" class=\"md-primary md-icon-button\"><md-icon md-font-icon=\"zmdi zmdi-chevron-right\"></md-icon></md-button></div></div></td></tr></tfoot></table>");
$templateCache.put("app/triangular/components/toolbars/toolbar.tmpl.html","<div class=\"md-toolbar-tools\"><md-button class=\"md-icon-button\" ng-if=\"!vm.hideMenuButton()\" ng-click=\"vm.openSideNav(\'left\')\" aria-label=\"side navigation\"><md-icon md-font-icon=\"zmdi zmdi-menu\"></md-icon></md-button><h2 hide-xs=\"\" flex=\"\"><span ng-repeat=\"crumb in vm.breadcrumbs.crumbs\"><span translate=\"\">{{crumb.name}}</span><md-icon md-font-icon=\"zmdi zmdi-chevron-right\" ng-if=\"!$last\"></md-icon></span></h2><md-button class=\"md-icon-button toolbar-button\" ng-click=\"vm.toggleFullScreen()\" aria-label=\"toggle fullscreen\"><md-icon md-font-icon=\"\" ng-class=\"vm.fullScreenIcon\"></md-icon></md-button><md-menu><md-button class=\"md-icon-button\" aria-label=\"language\" ng-click=\"$mdOpenMenu()\"><md-icon md-font-icon=\"zmdi zmdi-globe-alt\"></md-icon></md-button><md-menu-content width=\"3\"><md-menu-item ng-repeat=\"language in ::vm.languages\"><md-button ng-click=\"vm.switchLanguage(language.key)\" translate=\"{{::language.name}}\" aria-label=\"{{::language.name}}\"></md-button></md-menu-item></md-menu-content></md-menu><md-button class=\"md-icon-button toolbar-button animated\" ng-click=\"vm.toggleNotificationsTab(0)\" aria-label=\"side navigation\"><md-icon md-font-icon=\"zmdi zmdi-email\"></md-icon><span class=\"toolbar-button-badge animated\" theme-background=\"accent\" ng-class=\"{ \'toolbar-button-badge-new\' : vm.emailNew }\">5</span></md-button><md-button class=\"md-icon-button toolbar-button\" ng-click=\"vm.toggleNotificationsTab(1)\"><md-icon md-font-icon=\"fa fa-bell-o\"></md-icon><span class=\"toolbar-button-badge\" theme-background=\"accent\">2</span></md-button><md-menu><md-button aria-label=\"Open user menu\" ng-click=\"$mdOpenMenu()\"><img class=\"toolbar-user-avatar\" src=\"assets/images/avatars/avatar-5.png\"> Christos</md-button><md-menu-content width=\"4\"><md-menu-item><md-button ng-click=\"vm.toggleNotificationsTab(2)\" aria-label=\"side navigation\"><md-icon md-font-icon=\"zmdi zmdi-settings\"></md-icon><span translate=\"ADMIN.TOOLBAR.SETTINGS\"></span></md-button></md-menu-item><md-menu-item><md-button href=\"#/profile\" aria-label=\"side navigation\"><md-icon md-font-icon=\"zmdi zmdi-account\"></md-icon><span translate=\"ADMIN.TOOLBAR.PROFILE\"></span></md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button href=\"#/login\" aria-label=\"side navigation\"><md-icon md-font-icon=\"zmdi zmdi-sign-in\"></md-icon><span translate=\"ADMIN.TOOLBAR.LOGOUT\"></span></md-button></md-menu-item></md-menu-content></md-menu></div>");
$templateCache.put("app/triangular/components/widget/widget.tmpl.html","<div class=\"widget md-whiteframe-z2\" ng-class=\"::{\'widget-overlay-title\': vm.overlayTitle}\" flex=\"\" layout=\"{{vm.widgetLayout}}\"><div class=\"widget-title\" ng-if=\"::(vm.title || vm.subtitle)\" layout=\"row\" layout-padding=\"\" layout-align=\"space-between center\" flex-order=\"{{vm.titleOrder}}\"><div layout=\"column\" ng-if=\"::vm.avatar\"><img ng-src=\"{{::vm.avatar}}\" class=\"widget-avatar\"></div><div flex=\"\" layout=\"column\"><h3 class=\"md-subhead\" ng-if=\"::vm.title\" translate=\"\">{{::vm.title}}</h3><p class=\"md-body-1\" ng-if=\"::vm.subtitle\" translate=\"\">{{::vm.subtitle}}</p></div><md-menu ng-if=\"::vm.menu\"><md-button class=\"widget-button md-icon-button\" ng-click=\"$mdOpenMenu()\" aria-label=\"open menu\"><md-icon md-font-icon=\"{{::vm.menu.icon}}\"></md-icon></md-button><md-menu-content><md-menu-item ng-repeat=\"item in ::vm.menu.items\"><md-button ng-click=\"item.click($event)\"><md-icon ng-if=\"::item.icon\" md-font-icon=\"{{::item.icon}}\"></md-icon><span translate=\"\">{{::item.title}}</span></md-button></md-menu-item></md-menu-content></md-menu></div><div class=\"widget-content\" layout=\"{{vm.contentLayout}}\" layout-align=\"{{vm.contentLayoutAlign}}\" ng-class=\"{\'layout-padding\': vm.contentPadding}\" ng-transclude=\"\" flex-order=\"{{vm.contentOrder}}\"></div><div class=\"widget-loading ng-hide\" ng-show=\"vm.loading\" layout=\"\" layout-fill=\"\" layout-align=\"center center\"><div class=\"widget-loading-inner\" ng-show=\"vm.loading\"><md-progress-circular md-mode=\"indeterminate\"></md-progress-circular></div></div></div>");
$templateCache.put("app/triangular/layouts/default/default-no-scroll.tmpl.html","<div layout=\"row\" class=\"full-height\"><md-sidenav class=\"admin-sidebar-left md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"layout.sideMenuSize !== \'hidden\' && $mdMedia(\'gt-sm\')\" ui-view=\"sidebarLeft\" ng-class=\"{ \'admin-sidebar-collapsed\': layout.sideMenuSize == \'icon\' }\" ng-mouseover=\"layoutController.activateHover()\" ng-mouseleave=\"layoutController.removeHover()\"></md-sidenav><div id=\"admin-panel\" layout=\"column\" flex=\"\"><tri-loader></tri-loader><md-toolbar class=\"admin-toolbar\" md-theme=\"{{triSkin.elements.toolbar}}\" ui-view=\"toolbar\" ng-class=\"[layout.toolbarSize,layout.toolbarClass]\"></md-toolbar><div ui-view=\"content\" layout=\"column\" flex=\"\" class=\"overflow-hidden\"></div><div ui-view=\"belowContent\"></div></div><md-sidenav layout=\"\" layout-fill=\"\" class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"notifications\" ui-view=\"sidebarRight\"></md-sidenav></div>");
$templateCache.put("app/triangular/layouts/default/default.tmpl.html","<div layout=\"row\" class=\"full-height\"><md-sidenav class=\"admin-sidebar-left md-sidenav-left md-whiteframe-z2\" md-component-id=\"left\" md-is-locked-open=\"layout.sideMenuSize !== \'hidden\' && $mdMedia(\'gt-sm\')\" ui-view=\"sidebarLeft\" ng-class=\"{ \'admin-sidebar-collapsed\': layout.sideMenuSize == \'icon\' }\" ng-mouseover=\"layoutController.activateHover()\" ng-mouseleave=\"layoutController.removeHover()\"></md-sidenav><div id=\"admin-panel\" layout=\"column\" flex=\"\"><tri-loader></tri-loader><md-toolbar class=\"admin-toolbar\" ng-if=\"layout.showToolbar\" md-theme=\"{{triSkin.elements.toolbar}}\" ui-view=\"toolbar\" ng-class=\"[layout.toolbarSize,layout.toolbarClass]\"></md-toolbar><md-content ng-class=\"layout.contentClass\" flex=\"\" tri-default-content=\"\" ui-view=\"content\"></md-content><div ui-view=\"belowContent\"></div></div><md-sidenav layout=\"\" layout-fill=\"\" class=\"md-sidenav-right md-whiteframe-z2\" md-component-id=\"notifications\" ui-view=\"sidebarRight\"></md-sidenav></div>");}]);
(function() {
    'use strict';

    angular
        .module('triangular.layouts', [

        ]);
})();
'use strict';

/**
 * @ngdoc function
 * @name AdminController
 * @module triAngular
 * @kind function
 *
 * @description
 *
 * Handles the admin view
 */
(function() {
    'use strict';

    DefaultLayoutController.$inject = ["$scope", "$element", "$timeout", "$window", "triLayout"];
    angular
        .module('triangular.layouts')
        .controller('DefaultLayoutController', DefaultLayoutController);

    /* @ngInject */
    function DefaultLayoutController($scope, $element, $timeout, $window, triLayout) {
        // we need to use the scope here because otherwise the expression in md-is-locked-open doesnt work
        $scope.layout = triLayout.layout; //eslint-disable-line
        var vm = this;

        vm.activateHover = activateHover;
        vm.removeHover  = removeHover;

        ////////////////

        function activateHover() {
            if(triLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').addClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                },300);
            }
        }

        function removeHover () {
            if(triLayout.layout.sideMenuSize === 'icon') {
                $element.find('.admin-sidebar-left').removeClass('hover');
                $timeout(function(){
                    $window.dispatchEvent(new Event('resize'));
                },300);
            }
        }
    }
})();
(function() {
    'use strict';

    triDefaultContent.$inject = ["$rootScope", "$compile", "$templateRequest"];
    angular
        .module('triangular.layouts')
        .directive('triDefaultContent', triDefaultContent);

    /* @ngInject */
    function triDefaultContent ($rootScope, $compile, $templateRequest) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            replace: true,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element) {
            // scroll page to the top when content is loaded (stops pages keeping scroll position even when they have changed url)
            $scope.$on('$stateChangeStart', scrollToTop);

            // when content view has loaded add footer if needed and send mdContentLoaded event
            $scope.$on('$viewContentLoaded', injectFooterUpdateContent);

            ////////////////////////

            function scrollToTop() {
                $element.scrollTop(0);
            }

            function injectFooterUpdateContent() {
                var contentView = $element.find('#admin-panel-content-view');
                var footerElem = contentView.find('#footer');
                if (footerElem.length === 0) {
                    // add footer to the content view
                    $templateRequest('app/triangular/components/footer/footer.tmpl.html')
                    .then(function(template) {
                        // compile template with current scope and add to the content
                        var linkFn = $compile(template);
                        var content = linkFn($scope);
                        contentView.append(content);
                    });

                }
            }
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('triangular.components', [
        ]);
})();
(function() {
    'use strict';

    WizardController.$inject = ["$scope", "$timeout"];
    angular
        .module('triangular.components')
        .directive('triWizard', TriWizard);

    /* @ngInject */
    function TriWizard() {
        // Usage: <div tri-wizard> (put some forms in here) </div>
        //
        // Creates: Nothing
        //
        var directive = {
            bindToController: true,
            controller: WizardController,
            controllerAs: 'triWizard',
            restrict: 'A'
        };
        return directive;
    }

    /* @ngInject */
    function WizardController($scope, $timeout) {
        var vm = this;

        var forms = [];
        var totalErrors = 0;
        var fixedErrors = 0;

        vm.currentStep = 0;
        vm.getForm = getForm;
        vm.isFormValid = isFormValid;
        vm.nextStep = nextStep;
        vm.nextStepDisabled = nextStepDisabled;
        vm.prevStep = prevStep;
        vm.prevStepDisabled = prevStepDisabled;
        vm.progress = 0;
        vm.registerForm = registerForm;
        vm.updateProgress = updateProgress;

        ////////////////

        function getForm(index) {
            return forms[index];
        }

        function nextStep() {
            vm.currentStep = vm.currentStep + 1;
        }

        function nextStepDisabled() {
            // get current active form
            var form = $scope.triWizard.getForm(vm.currentStep);
            var formInvalid = true;
            if(angular.isDefined(form) && angular.isDefined(form.$invalid)) {
                formInvalid = form.$invalid;
            }
            return formInvalid;
        }

        function isFormValid(step) {
            if(angular.isDefined(forms[step])) {
                return forms[step].$valid;
            }
        }

        function prevStep() {
            vm.currentStep = vm.currentStep - 1;
        }

        function prevStepDisabled() {
            return vm.currentStep === 0;
        }

        function registerForm(form) {
            forms.push(form);
        }

        function updateProgress() {
            var errors = calculateErrors();
            fixedErrors = totalErrors - errors;

            // calculate percentage process for completing the wizard
            vm.progress = Math.floor((fixedErrors / totalErrors) * 100);
        }

        function calculateErrors() {
            var errorCount = 0;
            for (var form = forms.length - 1; form >= 0; form--) {
                if(angular.isDefined(forms[form].$error)) {
                    for(var error in forms[form].$error) {
                        errorCount += forms[form].$error[error].length;
                    }
                }
            }
            return errorCount;
        }

        // init

        // wait until this tri wizard is ready (all forms registered)
        // then calculate the total errors
        $timeout(function() {
            totalErrors = calculateErrors();
        });
    }
})();
(function() {
    'use strict';

    angular
        .module('triangular.components')
        .directive('triWizardForm', WizardFormProgress);

    /* @ngInject */
    function WizardFormProgress() {
        // Usage:
        //  <div tri-wizard>
        //      <form tri-wizard-form>
        //      </form>
        //  </div>
        //
        var directive = {
            require: ['form', '^triWizard'],
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, require) {
            var ngFormCtrl = require[0];
            var triWizardCtrl = require[1];

            // register this form with the parent triWizard directive
            triWizardCtrl.registerForm(ngFormCtrl);

            // watch for form input changes and update the wizard progress
            element.on('input', function() {
                triWizardCtrl.updateProgress();
            });
        }
    }
})();
(function() {
    'use strict';

    widget.$inject = ["$mdTheming"];
    angular
        .module('triangular.components')
        .directive('triWidget', widget);

    /* @ngInject */
    function widget ($mdTheming) {
        // Usage:
        //
        // ```html
        // <widget title="'Nice Title'" subtitle="'Subtitle'" avatar="http://myavatar.jpg" title-position="top|bottom|left|right" content-padding overlay-title>content here</widget>
        // ```

        // Creates:
        //
        // Widget for use in dashboards
        var directive = {
            restrict: 'E',
            templateUrl: 'app/triangular/components/widget/widget.tmpl.html',
            transclude: true,
            replace: true,
            scope: {
                title: '@',
                subtitle: '@',
                avatar: '@'
            },
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link
        };
        return directive;

        function link($scope, $element, attrs) {
            // set the value of the widget layout attribute
            $scope.vm.widgetLayout = attrs.titlePosition === 'left' || attrs.titlePosition === 'right' ? 'row' : 'column';
            // set the layout attribute for the widget content
            $scope.vm.contentLayout = angular.isUndefined(attrs.contentLayout) ? 'column' : attrs.contentLayout;
            // set if the layout-padding attribute will be added
            $scope.vm.contentPadding = angular.isDefined(attrs.contentPadding);
            // set the content align
            $scope.vm.contentLayoutAlign = angular.isUndefined(attrs.contentLayoutAlign) ? '' : attrs.contentLayoutAlign;
            // set the order of the title and content based on title position
            $scope.vm.titleOrder = attrs.titlePosition === 'right' || attrs.titlePosition === 'bottom' ? 2 : 1;
            $scope.vm.contentOrder = attrs.titlePosition === 'right' || attrs.titlePosition === 'bottom' ? 1 : 2;
            // set if we overlay the title on top of the widget content
            $scope.vm.overlayTitle = angular.isUndefined(attrs.overlayTitle) ? undefined : true;

            $mdTheming($element);

            if(angular.isDefined(attrs.class)) {
                $element.addClass(attrs.class);
            }

            if(angular.isDefined(attrs.backgroundImage)) {
                $element.css('background-image', 'url(' + attrs.backgroundImage + ')');
            }

            $scope.menuClick = function($event) {
                if(angular.isUndefined($scope.menu.menuClick)) {
                    $scope.menu.menuClick($event);
                }
            };

            // remove title attribute to stop popup on hover
            $element.attr('title', '');
        }
    }

    /* @ngInject */
    function Controller () {
        var vm = this;
        vm.menu = null;
        vm.loading = false;

        this.setMenu = function(menu) {
            vm.menu = menu;
        };

        this.setLoading = function(loading) {
            vm.loading = loading;
        };
    }
})();
(function() {
    'use strict';

    DefaultToolbarController.$inject = ["$scope", "$rootScope", "$mdMedia", "$translate", "$state", "$element", "$filter", "$mdUtil", "$mdSidenav", "$mdToast", "$timeout", "$document", "triBreadcrumbsService", "triSettings", "triLayout"];
    angular
        .module('triangular.components')
        .controller('DefaultToolbarController', DefaultToolbarController);

    /* @ngInject */
    function DefaultToolbarController($scope, $rootScope, $mdMedia, $translate, $state, $element, $filter, $mdUtil, $mdSidenav, $mdToast, $timeout, $document, triBreadcrumbsService, triSettings, triLayout) {
        var vm = this;
        vm.breadcrumbs = triBreadcrumbsService.breadcrumbs;
        vm.emailNew = false;
        vm.languages = triSettings.languages;
        vm.openSideNav = openSideNav;
        vm.hideMenuButton = hideMenuButton;
        vm.switchLanguage = switchLanguage;
        vm.toggleNotificationsTab = toggleNotificationsTab;
        vm.isFullScreen = false;
        vm.fullScreenIcon = 'zmdi zmdi-fullscreen';
        vm.toggleFullScreen = toggleFullScreen;

        // initToolbar();

        ////////////////

        function openSideNav(navID) {
            $mdUtil.debounce(function(){
                $mdSidenav(navID).toggle();
            }, 300)();
        }

        function switchLanguage(languageCode) {
            $translate.use(languageCode)
            .then(function() {
                $mdToast.show(
                    $mdToast.simple()
                    .content($filter('translate')('MESSAGES.LANGUAGE_CHANGED'))
                    .position('bottom right')
                    .hideDelay(500)
                );
            });
        }

        function hideMenuButton() {
            return triLayout.layout.sideMenuSize !== 'hidden' && $mdMedia('gt-sm');
        }

        function toggleNotificationsTab(tab) {
            $rootScope.$broadcast('triSwitchNotificationTab', tab);
            vm.openSideNav('notifications');
        }

        function toggleFullScreen() {
            vm.isFullScreen = !vm.isFullScreen;
            vm.fullScreenIcon = vm.isFullScreen ? 'zmdi zmdi-fullscreen-exit':'zmdi zmdi-fullscreen';
            // more info here: https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
            var doc = $document[0];
            if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement ) {
                if (doc.documentElement.requestFullscreen) {
                    doc.documentElement.requestFullscreen();
                } else if (doc.documentElement.msRequestFullscreen) {
                    doc.documentElement.msRequestFullscreen();
                } else if (doc.documentElement.mozRequestFullScreen) {
                    doc.documentElement.mozRequestFullScreen();
                } else if (doc.documentElement.webkitRequestFullscreen) {
                    doc.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (doc.exitFullscreen) {
                    doc.exitFullscreen();
                } else if (doc.msExitFullscreen) {
                    doc.msExitFullscreen();
                } else if (doc.mozCancelFullScreen) {
                    doc.mozCancelFullScreen();
                } else if (doc.webkitExitFullscreen) {
                    doc.webkitExitFullscreen();
                }
            }
        }

        $scope.$on('newMailNotification', function(){
            vm.emailNew = true;
        });
    }
})();
(function() {
    'use strict';

    triTable.$inject = ["$filter"];
    angular
        .module('triangular.components')
        .directive('triTable', triTable);

    /* @ngInject */
    function triTable($filter) {
        var directive = {
            restrict: 'E',
            scope: {
                columns: '=',
                contents: '=',
                filters: '='
            },
            link: link,
            templateUrl: 'app/triangular/components/table/table-directive.tmpl.html'
        };
        return directive;

        function link($scope, $element, attrs) {
            var sortableColumns = [];
            var activeSortColumn = null;
            var activeSortOrder = false;

            // init page size if not set to default
            $scope.pageSize = angular.isUndefined(attrs.pageSize) ? 0 : attrs.pageSize;

            // init page if not set to default
            $scope.page = angular.isUndefined(attrs.page) ? 0 : attrs.page;

            // make an array of all sortable columns
            angular.forEach($scope.columns, function(column) {
                if(column.sortable) {
                    sortableColumns.push(column.field);
                }
            });

            $scope.refresh = function(resetPage) {
                if(resetPage === true) {
                    $scope.page = 0;
                }
                $scope.contents = $filter('orderBy')($scope.contents, activeSortColumn, activeSortOrder);
            };

            // if we have sortable columns sort by first by default
            if(sortableColumns.length > 0) {
                // sort first column by default
                activeSortOrder = false;
                activeSortColumn = sortableColumns[0];
                $scope.refresh();
            }

            $scope.sortClick = function(field) {
                if(sortableColumns.indexOf(field) !== -1) {
                    if(field === activeSortColumn) {
                        activeSortOrder = !activeSortOrder;
                    }
                    activeSortColumn = field;
                    $scope.refresh();
                }
            };

            $scope.showSortOrder = function(field, orderDown) {
                return field === activeSortColumn && activeSortOrder === orderDown;
            };

            $scope.headerClass = function(field) {
                var classes = [];
                if(sortableColumns.indexOf(field) !== -1) {
                    classes.push('sortable');
                }
                if(field === activeSortColumn) {
                    classes.push('sorted');
                }
                return classes;
            };

            $scope.cellContents = function(column, content) {
                if(angular.isDefined(column.filter)) {
                    return $filter(column.filter)(content[column.field]);
                }
                else {
                    return content[column.field];
                }
            };

            $scope.totalItems = function() {
                return $scope.contents.length;
            };

            $scope.numberOfPages = function() {
                return Math.ceil($scope.contents.length / $scope.pageSize);
            };

            $scope.pageStart = function() {
                return ($scope.page * $scope.pageSize) + 1;
            };

            $scope.pageEnd = function() {
                var end = (($scope.page + 1) * $scope.pageSize);
                if(end > $scope.contents.length) {
                    end = $scope.contents.length;
                }
                return end;
            };

            $scope.goToPage = function (page) {
                $scope.page = page;
            };
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('triangular.components')
        .filter('startFrom', startFrom);

    function startFrom() {
        return filterFilter;

        ////////////////

        function filterFilter(input, start) {
            start = +start;
            return input.slice(start);
        }
    }

})();
(function() {
    'use strict';

    tableImage.$inject = ["$sce"];
    angular
        .module('triangular.components')
        .filter('tableImage', tableImage);

    function tableImage($sce) {
        return filterFilter;

        ////////////////

        function filterFilter(value) {
            return $sce.trustAsHtml('<div style=\"background-image: url(\'' + value + '\')\"/>');
        }
    }

})();
(function() {
    'use strict';

    NotificationsPanelController.$inject = ["$scope", "$http", "$mdSidenav", "$state", "API_CONFIG"];
    angular
        .module('triangular.components')
        .controller('NotificationsPanelController', NotificationsPanelController);

    /* @ngInject */
    function NotificationsPanelController($scope, $http, $mdSidenav, $state, API_CONFIG) {
        var vm = this;
        // sets the current active tab
        vm.close = close;
        vm.currentTab = 0;
        vm.notificationGroups = [{
            name: 'Twitter',
            notifications: [{
                title: 'Mention from oxygenna',
                icon: 'fa fa-twitter',
                iconColor: '#55acee',
                date: moment().startOf('hour')
            },{
                title: 'Oxygenna',
                icon: 'fa fa-twitter',
                iconColor: '#55acee',
                date: moment().startOf('hour')
            },{
                title: 'Oxygenna',
                icon: 'fa fa-twitter',
                iconColor: '#55acee',
                date: moment().startOf('hour')
            },{
                title: 'Followed by Oxygenna',
                icon: 'fa fa-twitter',
                iconColor: '#55acee',
                date: moment().startOf('hour')
            }]
        },{
            name: 'Server',
            notifications: [{
                title: 'Server Down',
                icon: 'zmdi zmdi-alert-circle',
                iconColor: 'rgb(244, 67, 54)',
                date: moment().startOf('hour')
            },{
                title: 'Slow Response Time',
                icon: 'zmdi zmdi-alert-triangle',
                iconColor: 'rgb(255, 152, 0)',
                date: moment().startOf('hour')
            },{
                title: 'Server Down',
                icon: 'zmdi zmdi-alert-circle',
                iconColor: 'rgb(244, 67, 54)',
                date: moment().startOf('hour')
            }]
        },{
            name: 'Sales',
            notifications: [{
                title: 'Triangular Admin $21',
                icon: 'zmdi zmdi-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Lambda WordPress $60',
                icon: 'zmdi zmdi-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Triangular Admin $21',
                icon: 'zmdi zmdi-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Triangular Admin $21',
                icon: 'zmdi zmdi-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Lambda WordPress $60',
                icon: 'zmdi zmdi-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            },{
                title: 'Triangular Admin $21',
                icon: 'zmdi zmdi-shopping-cart',
                iconColor: 'rgb(76, 175, 80)',
                date: moment().startOf('hour')
            }]
        }];
        vm.openMail = openMail;
        vm.settingsGroups = [{
            name: 'ADMIN.NOTIFICATIONS.ACCOUNT_SETTINGS',
            settings: [{
                title: 'ADMIN.NOTIFICATIONS.SHOW_LOCATION',
                icon: 'zmdi zmdi-pin',
                enabled: true
            },{
                title: 'ADMIN.NOTIFICATIONS.SHOW_AVATAR',
                icon: 'zmdi zmdi-face',
                enabled: false
            },{
                title: 'ADMIN.NOTIFICATIONS.SEND_NOTIFICATIONS',
                icon: 'zmdi zmdi-notifications-active',
                enabled: true
            }]
        },{
            name: 'ADMIN.NOTIFICATIONS.CHAT_SETTINGS',
            settings: [{
                title: 'ADMIN.NOTIFICATIONS.SHOW_USERNAME',
                icon: 'zmdi zmdi-account',
                enabled: true
            },{
                title: 'ADMIN.NOTIFICATIONS.SHOW_PROFILE',
                icon: 'zmdi zmdi-account-box',
                enabled: false
            },{
                title: 'ADMIN.NOTIFICATIONS.ALLOW_BACKUPS',
                icon: 'zmdi zmdi-cloud-upload',
                enabled: true
            }]
        }];

        vm.statisticsGroups = [{
            name: 'ADMIN.NOTIFICATIONS.USER_STATS',
            stats: [{
                title: 'ADMIN.NOTIFICATIONS.STORAGE_SPACE',
                mdClass: 'md-primary',
                value: 60
            },{
                title: 'ADMIN.NOTIFICATIONS.BANDWIDTH_USAGAE',
                mdClass: 'md-accent',
                value: 10
            },{
                title: 'ADMIN.NOTIFICATIONS.MEMORY_USAGAE',
                mdClass: 'md-warn',
                value: 100
            }]
        },{
            name: 'ADMIN.NOTIFICATIONS.SERVER_STATS',
            stats: [{
                title: 'ADMIN.NOTIFICATIONS.STORAGE_SPACE',
                mdClass: 'md-primary',
                value: 60
            },{
                title: 'ADMIN.NOTIFICATIONS.BANDWIDTH_USAGAE',
                mdClass: 'md-accent',
                value: 10
            },{
                title: 'ADMIN.NOTIFICATIONS.MEMORY_USAGAE',
                mdClass: 'md-warn',
                value: 100
            }]
        }];

        ////////////////

        // add an event to switch tabs (used when user clicks a menu item before sidebar opens)
        $scope.$on('triSwitchNotificationTab', function($event, tab) {
            vm.currentTab = tab;
        });

        // fetch some dummy emails from the API
        $http({
            method: 'GET',
            url: API_CONFIG.url + 'email/inbox'
        }).success(function(data) {
            vm.emails = data.slice(1,20);
        });

        function openMail() {
            $state.go('private.admin.toolbar.inbox');
            vm.close();
        }

        function close() {
            $mdSidenav('notifications').close();
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('triangular.components')
        .provider('triMenu', menuProvider);


    /* @ngInject */
    function menuProvider() {
        // Provider
        var menuArray = [];

        this.addMenu = addMenu;
        this.removeMenu = removeMenu;
        this.removeAllMenu = removeAllMenu;

        function addMenu(item) {
            menuArray.push(item);
        }

        function removeMenu(state, params) {
            findAndDestroyMenu(menuArray, state, params);
        }

        function removeAllMenu() {
            for (var i = menuArray.length - 1; i >= 0 ; i--) {
                menuArray.splice(i, 1);
            }
        }

        function findAndDestroyMenu(menu, state, params, isChildren) {
            if (menu instanceof Array) {
                for (var i = menu.length - 1; i >= 0 ; i--) {
                    if(menu[i].state === state && angular.equals(menu[i].params, params)) {
                        menu.splice(i, 1);
                        if (!isNaN(isChildren) && !menuArray[isChildren].children.length) {
                            menuArray.splice(isChildren, 1);
                        }
                        break;
                    }
                    else if(angular.isDefined(menu[i].children)) {
                        findAndDestroyMenu(menu[i].children, state, params, i);
                    }
                }
            }
        }

        // Service
        this.$get = function() {
            return {
                menu: menuArray,
                addMenu: addMenu,
                removeMenu: removeMenu,
                removeAllMenu: removeAllMenu
            };
        };
    }
})();


(function() {
    'use strict';

    triMenuDirective.$inject = ["$location", "$mdTheming", "triTheming"];
    triMenuController.$inject = ["triMenu"];
    angular
        .module('triangular.components')
        .directive('triMenu', triMenuDirective);

    /* @ngInject */
    function triMenuDirective($location, $mdTheming, triTheming) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            template: '<md-content><tri-menu-item ng-repeat="item in triMenuController.menu | orderBy:\'priority\'" item="::item"></tri-menu-item></md-content>',
            scope: {},
            controller: triMenuController,
            controllerAs: 'triMenuController',
            link: link
        };
        return directive;

        function link($scope, $element) {
            $mdTheming($element);
            var $mdTheme = $element.controller('mdTheme'); //eslint-disable-line

            var menuColor = triTheming.getThemeHue($mdTheme.$mdTheme, 'primary', 'default');
            var menuColorRGBA = triTheming.rgba(menuColor.value);
            $element.css({ 'background-color': menuColorRGBA });
            $element.children('md-content').css({ 'background-color': menuColorRGBA });
        }
    }

    /* @ngInject */
    function triMenuController(triMenu) {
        var triMenuController = this;
        // get the menu and order it
        triMenuController.menu = triMenu.menu;
    }
})();

(function() {
    'use strict';

    MenuController.$inject = ["triSettings", "triLayout"];
    angular
        .module('triangular.components')
        .controller('MenuController', MenuController);

    /* @ngInject */
    function MenuController(triSettings, triLayout) {
        var vm = this;
        vm.layout = triLayout.layout;
        vm.sidebarInfo = {
            appName: triSettings.name,
            appLogo: triSettings.logo
        };
        vm.toggleIconMenu = toggleIconMenu;

        ////////////
        function toggleIconMenu() {
            var menu = vm.layout.sideMenuSize === 'icon' ? 'full' : 'icon';
            triLayout.setOption('sideMenuSize', menu);
        }
    }
})();

(function() {
    'use strict';

    triMenuItemController.$inject = ["$scope", "$mdSidenav", "$state", "$filter", "triBreadcrumbsService", "triActiveService"];
    angular
        .module('triangular.components')
        .directive('triMenuItem', triMenuItemDirective);

    /* @ngInject */
    function triMenuItemDirective() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            require: '^triMenu',
            scope: {
                item: '='
            },
            // replace: true,
            template: '<div ng-include="::triMenuItem.item.template" ng-show="::(!triMenuItem.item.hidden)"></div>',
            controller: triMenuItemController,
            controllerAs: 'triMenuItem',
            bindToController: true
        };
        return directive;
    }

    /* @ngInject */
    function triMenuItemController($scope, $mdSidenav, $state, $filter, triBreadcrumbsService, triActiveService) {
        var triMenuItem = this;
        // load a template for this directive based on the type ( link | dropdown )
        triMenuItem.item.template = 'app/triangular/components/menu/menu-item-' + triMenuItem.item.type + '.tmpl.html';

        switch(triMenuItem.item.type) {
            case 'dropdown':
                // if we have kids reorder them by priority
                triMenuItem.item.children = $filter('orderBy')(triMenuItem.item.children, 'priority');
                triMenuItem.toggleDropdownMenu = toggleDropdownMenu;
                // add a check for open event
                $scope.$on('toggleDropdownMenu', function(event, item, open, toState) {
                    // if this is the item we are looking for
                    if(triMenuItem.item === item) {
                        triMenuItem.item.open = open;
                    }
                    else {
                        var child = triMenuItem.item.children.filter(function (child)  { return child.state === item.state ||??child.state === toState });
                        // Si es mayor a uno significa que estan en el mismo submenu, por lo que se mantiene abierto
                        if (child.length > 1) {
                            triMenuItem.item.open = true;
                        } else {
                            triMenuItem.item.open = false;
                        }
                    }
                });
                // this event is emitted up the tree to open parent menus
                $scope.$on('openParents', function() {
                    // openParents event so open the parent item
                    triMenuItem.item.open = true;
                    // also add this to the breadcrumbs
                    triBreadcrumbsService.addCrumb(triMenuItem.item);
                });
                break;
            case 'link':
                triMenuItem.openLink = openLink;

                // on init check if this is current menu
                checkItemActive($state.current.name, $state.params);

                $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
                    checkItemActive(toState.name, fromState.name);
                });
                break;
        }

        function checkItemActive(toState, fromState) {
            var flag = 'default'; // nos da informacion por cual medio se seteo el menu activo
            if (triMenuItem.item.hidden) return; // Si es link oculto no se procesa
            if (triMenuItem.item.active) { // Si es el activo lo dejo como desactivo y mando a cerrar el menu desplegable donde se encuentre
                triMenuItem.item.active = false;
                triActiveService.cleanActive(); // servicio auxiliar para manejo del menu activo, se limpia
                $scope.$parent.$parent.$parent.$broadcast('toggleDropdownMenu', triMenuItem.item, false, toState); // aca se manda a cerrar menu desplegable
            }
            if (triMenuItem.item.state === toState) { // Si el state recorrido es el nuevo state, por lo tanto el nuevo activo
                triMenuItem.item.active = true;
                flag = 'link'; // flag link que significa que es porque viene de un link de menu de la app
            } else if (triMenuItem.item.childrenHiddenState) { // Se comprueba si tiene hijos ocultos (states)
                if (triMenuItem.item.state === fromState) { // si el from del cual viene coincide se guarda como flag from
                    triMenuItem.item.active = triMenuItem.item.childrenHiddenState.includes(toState); // si esta la lista de hijos se deja como menu activo
                    flag = 'from';
                } else {
                    if (triActiveService.canSetActive()) { // Se consulta si se puede dejar como activo, dado que ya puede existir un activo
                        triMenuItem.item.active = triMenuItem.item.childrenHiddenState.includes(toState);
                    }
                }
            } 

            // if we are now the active item reset the breadcrumbs and open all parent dropdown items
             if (triMenuItem.item.active) {
                 triBreadcrumbsService.reset();
                 triBreadcrumbsService.addCrumb(triMenuItem.item);
                 triActiveService.setActive(triMenuItem.item, flag);
                 $scope.$emit('openParents');
             }
        }

        function toggleDropdownMenu() {
            $scope.$parent.$parent.$broadcast('toggleDropdownMenu', triMenuItem.item, !triMenuItem.item.open);
        }

        function openLink() {
            var params = angular.isUndefined(triMenuItem.item.params) ? {} : triMenuItem.item.params;
            $state.go(triMenuItem.item.state, params);
            triMenuItem.item.active = true;
            $mdSidenav('left').close();
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('triangular.components')
        .service('triActiveService', triActiveService);

    /* @ngInject */
    function triActiveService() {
        var vm = this;
        var active;
        vm.setActive = setActive;
        vm.cleanActive = cleanActive;
        vm.canSetActive = canSetActive;
        
        function cleanActive() {
            active = undefined;
        }
        function canSetActive() {
            if (!active) return true;
            if (active.flag === 'default') return true;
            return false;
        }
        function setActive(el, flag) {
            active = {
                item: el,
                flag: flag
            }
        }
    }
})();
(function() {
    'use strict';

    TriLoader.$inject = ["$rootScope"];
    TriLoaderController.$inject = ["$rootScope", "triLoaderService", "triSettings"];
    angular
        .module('triangular.components')
        .directive('triLoader', TriLoader);

    /* @ngInject */
    function TriLoader ($rootScope) {
        var directive = {
            bindToController: true,
            controller: TriLoaderController,
            controllerAs: 'vm',
            template: '<div flex class="loader" ng-show="vm.status.active" layout="column" layout-fill layout-align="center center"><div class="loader-inner"><md-progress-circular md-mode="indeterminate"></md-progress-circular></div><h3 class="md-headline">{{vm.appName}}</h3></div>',
            link: link,
            restrict: 'E',
            replace: true,
            scope: {
            }
        };
        return directive;

        function link($scope) {
            var loadingListener = $rootScope.$on('$viewContentLoading', function() {
                $scope.vm.setLoaderActive(true);
            });

            var loadedListener = $rootScope.$on('$viewContentLoaded', function() {
                $scope.vm.setLoaderActive(false);
            });

            $scope.$on('$destroy', removeListeners);

            function removeListeners() {
                loadingListener();
                loadedListener();
            }
        }
    }

    /* @ngInject */
    function TriLoaderController ($rootScope, triLoaderService, triSettings) {
        var vm = this;
        vm.appName         = triSettings.name;
        vm.status          = triLoaderService.status;
        vm.setLoaderActive = triLoaderService.setLoaderActive;
    }
})();
(function() {
    'use strict';

    angular
        .module('triangular.components')
        .service('triLoaderService', LoaderService);

    /* @ngInject */
    function LoaderService() {
        var vm = this;

        vm.status = {
            active: true
        };
        vm.setLoaderActive = setLoaderActive;

        ////////////////

        function setLoaderActive(active) {
            vm.status.active = active;
        }
    }
})();
(function() {
    'use strict';

    FooterController.$inject = ["triSettings", "triLayout"];
    angular
        .module('triangular.components')
        .controller('FooterController', FooterController);

    /* @ngInject */
    function FooterController(triSettings, triLayout) {
        var vm = this;
        vm.name = triSettings.name;
        vm.copyright = triSettings.copyright;
        vm.layout = triLayout.layout;
        vm.version = triSettings.version;
    }
})();
(function() {
    'use strict';

    angular
        .module('triangular.components')
        .service('triBreadcrumbsService', BreadcrumbsService);

    /* @ngInject */
    function BreadcrumbsService() {
        this.breadcrumbs = {
            crumbs: []
        };
        this.addCrumb = addCrumb;
        this.reset = reset;

        ////////////////

        function addCrumb(item) {
            this.breadcrumbs.crumbs.unshift(item);
        }

        function reset() {
            this.breadcrumbs.crumbs = [];
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('triangular.themes', [

        ]);
})();
(function() {
    'use strict';

    themingProvider.$inject = ["$mdThemingProvider"];
    angular
        .module('triangular.themes')
        .provider('triTheming', themingProvider);

    /* @ngInject */
    function themingProvider($mdThemingProvider) {
        var themes = {};

        return {
            theme: function(name) {
                if(angular.isDefined(themes[name])) {
                    return themes[name];
                }

                var theme = new Theme(name);

                themes[name] = theme;

                return themes[name];

            },
            $get: function() {
                return {
                    getTheme: function(themeName) {
                        return themes[themeName];
                    },
                    getThemeHue: function(themeName, intentName, hue) {
                        if(angular.isDefined($mdThemingProvider._THEMES[themeName]) && angular.isDefined($mdThemingProvider._THEMES[themeName].colors[intentName])) {
                            var palette = $mdThemingProvider._THEMES[themeName].colors[intentName];
                            if(angular.isDefined($mdThemingProvider._PALETTES[palette.name]) && angular.isDefined($mdThemingProvider._PALETTES[palette.name][palette.hues[hue]])) {
                                return $mdThemingProvider._PALETTES[palette.name][palette.hues[hue]];
                            }
                        }
                    },
                    getPalette: function(name) {
                        return $mdThemingProvider._PALETTES[name];
                    },
                    getPaletteColor: function(paletteName, hue) {
                        if(angular.isDefined($mdThemingProvider._PALETTES[paletteName]) && angular.isDefined($mdThemingProvider._PALETTES[paletteName][hue])) {
                            return $mdThemingProvider._PALETTES[paletteName][hue];
                        }
                    },
                    rgba: $mdThemingProvider._rgba,
                    palettes: $mdThemingProvider._PALETTES,
                    themes: $mdThemingProvider._THEMES,
                    parseRules: $mdThemingProvider._parseRules
                };
            }
        };
    }

    function Theme(name) {
        var THEME_COLOR_TYPES = ['primary', 'accent', 'warn', 'background'];
        var self = this;
        self.name = name;
        self.colors = {};
        self.isDark = false;

        THEME_COLOR_TYPES.forEach(function(colorType) {
            self[colorType + 'Palette'] = function setPaletteType(paletteName, hues) {
                self.colors[colorType] = {
                    name: paletteName,
                    hues: {}
                };
                if(angular.isDefined(hues)) {
                    self.colors[colorType].hues = hues;
                }
                return self;
            };
        });

        self.dark = function(isDark) {
            // default setting when dark() is called is true
            self.isDark = angular.isUndefined(isDark) ? true : isDark;
        };
    }
})();
(function() {
    'use strict';

    skinsProvider.$inject = ["$mdThemingProvider", "triThemingProvider"];
    Skin.$inject = ["id", "name", "$mdThemingProvider", "triThemingProvider"];
    addSkinToScope.$inject = ["$rootScope", "triSkins"];
    angular
        .module('triangular.themes')
        .provider('triSkins', skinsProvider)
        .run(addSkinToScope);

    /* @ngInject */
    function skinsProvider($mdThemingProvider, triThemingProvider) {
        var skins = {};
        var currentSkin = null;
        var useSkinCookie = false;

        return {
            skin: function(id, name) {
                if(angular.isDefined(skins[id])) {
                    return skins[id];
                }

                var skin = new Skin(id, name, $mdThemingProvider, triThemingProvider);

                skins[id] = skin;

                return skins[id];
            },
            setSkin: function(id) {
                if(angular.isUndefined(skins[id])) {
                    return;
                }

                // set skin to selected skin
                currentSkin = skins[id];

                // override the skin if cookie is enabled and has been set
                if(useSkinCookie) {
                    // we need to check cookies to see if skin has been saved so inject it
                    var $cookies;
                    angular.injector(['ngCookies']).invoke(['$cookies', function(cookies) {
                        $cookies = cookies;
                    }]);
                    // if we have a cookie set then override the currentSkin
                    var triangularSkin = $cookies.get('triangular-skin');
                    if(angular.isDefined(triangularSkin)) {
                        var cookieTheme = angular.fromJson(triangularSkin);
                        currentSkin = angular.isDefined(skins[cookieTheme.skin]) ? skins[cookieTheme.skin] : skins[0];
                    }
                }

                // make material load the themes needed for the skin
                currentSkin.loadThemes();

                return currentSkin;
            },
            useSkinCookie: function(skinCookie) {
                useSkinCookie = skinCookie;
            },
            $get: function() {
                return {
                    getCurrent: function() {
                        return currentSkin;
                    },
                    getSkins: function() {
                        return skins;
                    }
                };
            }
        };
    }

    /* @ngInject */
    function Skin(id, name, $mdThemingProvider, triThemingProvider) {
        var THEMABLE_ELEMENTS = ['sidebar', 'logo', 'toolbar', 'content'];
        var self = this;
        self.id = id;
        self.name = name;
        self.elements = {};

        THEMABLE_ELEMENTS.forEach(function(element) {
            self[element + 'Theme'] = function setElementTheme(themeName) {
                self.elements[element] = themeName;
                return self;
            };
        });

        self.loadThemes = function() {
            // go through each element
            for (var element in self.elements) {
                // register theme with mdThemingProvider (will load css in the header)
                var theme = triThemingProvider.theme(self.elements[element]);

                $mdThemingProvider.theme(theme.name)
                .primaryPalette(theme.colors.primary.name, theme.colors.primary.hues)
                .accentPalette(theme.colors.accent.name, theme.colors.accent.hues)
                .warnPalette(theme.colors.warn.name, theme.colors.warn.hues)
                .dark(theme.isDark);

                if(angular.isDefined(theme.colors.background)) {
                    $mdThemingProvider
                    .theme(theme.name)
                    .backgroundPalette(theme.colors.background.name, theme.colors.background.hues);
                }
            }

            $mdThemingProvider.setDefaultTheme(self.elements.content);
        };
    }

    /* @ngInject */
    function addSkinToScope($rootScope, triSkins) {
        $rootScope.triSkin = triSkins.getCurrent();
    }
})();
(function() {
    'use strict';

    runFunction.$inject = ["$rootScope", "$window", "$state", "$filter", "$translate", "$timeout", "triRoute", "triBreadcrumbsService"];
    angular
        .module('triangular')
        .run(runFunction);

    /* @ngInject */
    function runFunction($rootScope, $window, $state, $filter, $translate, $timeout, triRoute, triBreadcrumbsService) {
        var breadcrumbs = triBreadcrumbsService.breadcrumbs;
        init();

        var destroyOn = $rootScope.$on('$stateChangeSuccess', function(){
            setFullTitle();
        });

        $rootScope.$on('$destroy', function(){
            destroyOn();
        });

        function setFullTitle() {
            $timeout(function(){
                var title = triRoute.title;
                angular.forEach(breadcrumbs.crumbs, function(crumb){
                    title +=' ' + triRoute.separator + ' ' + $filter('translate')(crumb.name);
                });
                $window.document.title = title;
            });
        }

        function init() {
            setFullTitle();
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('triangular')
        .provider('triRoute', routeProvider);

    /* @ngInject */
    function routeProvider() {
        // Provider
        var settings = {
            docTitle: '',
            separator: ''
        };

        this.setTitle = setTitle;
        this.setSeparator = setSeparator;
        this.$get = routeHelper;

        function setTitle(title) {
            settings.docTitle = title;
        }

        function setSeparator(separator) {
            settings.separator = separator;
        }

        // Service
        function routeHelper() {
            return {
                title: settings.docTitle,
                separator: settings.separator
            };
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('triangular.router', [

        ]);
})();
(function() {
    'use strict';

    angular
        .module('triangular.profiler', [
            'digestHud'
        ]);
})();
(function() {
    'use strict';

    profilerConfig.$inject = ["digestHudProvider"];
    angular
        .module('triangular.profiler')
        .config(profilerConfig);

    /* @ngInject */
    function profilerConfig(digestHudProvider) {
        digestHudProvider.enable();

        // Optional configuration settings:
        digestHudProvider.setHudPosition('top right'); // setup hud position on the page: top right, bottom left, etc. corner
        digestHudProvider.numTopWatches = 20;  // number of items to display in detailed table
        digestHudProvider.numDigestStats = 25;  // number of most recent digests to use f
    }
})();
(function() {
    'use strict';

    layoutRunner.$inject = ["$rootScope", "triLayout"];
    angular
        .module('triangular')
        .run(layoutRunner)
        .provider('triLayout', layoutProvider);

    /* @ngInject */
    function layoutProvider() {
        var layoutDefaults = {
            toolbarSize: 'default',
            toolbarShrink: true,
            toolbarClass: '',
            contentClass: '',
            innerContentClass: '',
            sideMenuSize: 'full',
            footer: true
        };
        var layout = {};

        this.getDefaultOption = getDefaultOption;
        this.setDefaultOption = setDefaultOption;

        function getDefaultOption(name) {
            return layoutDefaults[name];
        }

        function setDefaultOption(name, value) {
            layoutDefaults[name] = value;
        }

        // init

        angular.extend(layout, layoutDefaults);

        // Service
        this.$get = function() {
            function setOption(name, value) {
                layout[name] = value;
            }

            function updateLayoutFromState(event, toState) {
                // reset classes
                for(var option in layoutDefaults) {
                    layout[option] = layoutDefaults[option];
                }
                var layoutOverrides = angular.isDefined(toState.data) && angular.isDefined(toState.data.layout) ? toState.data.layout : {};
                angular.extend(layout, layoutDefaults, layoutOverrides);
            }

            return {
                layout: layout,
                setOption: setOption,
                updateLayoutFromState: updateLayoutFromState
            };
        };
    }

    /* @ngInject */
    function layoutRunner($rootScope, triLayout) {
        // check for $stateChangeStart and update the layouts if we have data.layout set
        // if nothing set reset to defaults for every state
        var destroyOn = $rootScope.$on('$stateChangeStart', triLayout.updateLayoutFromState);
        $rootScope.$on('$destroy', removeWatch);

        /////////////

        function removeWatch() {
            destroyOn();
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('triangular.directives', [
        ]);
})();
(function() {
    'use strict';

    themeBackground.$inject = ["$mdTheming", "triTheming"];
    angular
        .module('triangular.directives')
        .directive('themeBackground', themeBackground);

    /* @ngInject */
    function themeBackground($mdTheming, triTheming) {
        // Usage:
        // ```html
        // <div md-theme="cyan" theme-background="primary|accent|warn|background:default|hue-1|hue-2|hue-3">Coloured content</div>
        // ```
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element, attrs) {
            $mdTheming($element);

            // make sure we have access to the theme - causes an eslint but nothing we can do about AM naming
            var $mdTheme = $element.controller('mdTheme'); //eslint-disable-line
            if(angular.isDefined($mdTheme)) {
                var intent = attrs.themeBackground;
                var hue = 'default';

                // check if we have a hue provided
                if(intent.indexOf(':') !== -1) {
                    var splitIntent = attrs.themeBackground.split(':');
                    intent = splitIntent[0];
                    hue = splitIntent[1];
                }
                // get the color and apply it to the element
                var color = triTheming.getThemeHue($mdTheme.$mdTheme, intent, hue);
                if(angular.isDefined(color)) {
                    $element.css({
                        'background-color': triTheming.rgba(color.value),
                        'border-color': triTheming.rgba(color.value),
                        'color': triTheming.rgba(color.contrast)
                    });
                }
            }
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('triangular.directives')
        .directive('triSamePassword', samePassword);

    /* @ngInject */
    function samePassword() {
        // Usage:
        //
        // ```html
        // <form name="signup">
        //     <input name="password" type="password" ng-model="user.password" same-password="signup.confirm" />
        //     <input name="confirm" type="password" ng-model="user.confirm" same-password="signup.confirm" />
        // </form>
        // ```
        // Creates:
        //
        // `samePassword` is a directive with the purpose to validate a password input based on the value of another input.
        // When both input values are the same the inputs will be set to valid

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: link,
            scope: {
                triSamePassword: '='
            }
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
            ngModel.$viewChangeListeners.push(function() {
                ngModel.$setValidity('samePassword', scope.triSamePassword.$modelValue === ngModel.$modelValue);
                scope.triSamePassword.$setValidity('samePassword', scope.triSamePassword.$modelValue === ngModel.$modelValue);
            });
        }
    }
})();
(function() {
    'use strict';

    paletteBackground.$inject = ["triTheming"];
    angular
        .module('triangular.directives')
        .directive('paletteBackground', paletteBackground);

    /* @ngInject */
    function paletteBackground(triTheming) {
        // Usage:
        // ```html
        // <div palette-background="green:500">Coloured content</div>
        // ```
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            link: link,
            restrict: 'A'
        };
        return directive;

        function link($scope, $element, attrs) {
            var splitColor = attrs.paletteBackground.split(':');
            var color = triTheming.getPaletteColor(splitColor[0], splitColor[1]);

            if(angular.isDefined(color)) {
                $element.css({
                    'background-color': triTheming.rgba(color.value),
                    'border-color': triTheming.rgba(color.value),
                    'color': triTheming.rgba(color.contrast)
                });
            }
        }
    }
})();
(function() {
    'use strict';

    countupto.$inject = ["$timeout"];
    angular
        .module('triangular.directives')
        .directive('countupto', countupto);

    /* @ngInject */
    function countupto($timeout) {
        // Usage:
        //
        // ```html
        // <h1 countupto="100"></h1>
        // ```
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                'countupto': '=',
                'options': '='
            }
        };
        return directive;

        function link($scope, $element, attrs) {
            var options = {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.',
                prefix: '',
                suffix: ''
            };

            // override default options?
            if ($scope.options) {
                for(var option in options) {
                    if(angular.isDefined($scope.options[option])) {
                        options[option] = $scope.options[option];
                    }
                }
            }

            attrs.from = angular.isUndefined(attrs.from) ? 0 : parseInt(attrs.from);
            attrs.decimals = angular.isUndefined(attrs.decimals) ? 2 : parseFloat(attrs.decimals);
            attrs.duration = angular.isUndefined(attrs.duration) ? 5 : parseFloat(attrs.duration);

            $timeout(function() {
                var numAnim = new CountUp($element[0], attrs.from, $scope.countupto, attrs.decimals, attrs.duration, options);
                numAnim.start();
            }, 500);
        }
    }

})();
(function() {
    'use strict';

    runFunction.$inject = ["$rootScope", "$window"];
    angular
        .module('triangular')
        .run(runFunction);

    /* @ngInject */
    function runFunction($rootScope, $window) {
        // add a class to the body if we are on windows
        if($window.navigator.platform.indexOf('Win') !== -1) {
            $rootScope.bodyClasses = ['os-windows'];
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('triangular')
        .provider('triSettings', settingsProvider);

    /* @ngInject */
    function settingsProvider() {
        // Provider
        var settings = {
            languages: [],
            name: '',
            logo: '',
            copyright: '',
            version: ''
        };

        this.addLanguage = addLanguage;
        this.setLogo = setLogo;
        this.setName = setName;
        this.setCopyright = setCopyright;
        this.setVersion = setVersion;

        function addLanguage(newLanguage) {
            settings.languages.push(newLanguage);
        }

        function setLogo(logo) {
            settings.logo = logo;
        }

        function setName(name) {
            settings.name = name;
        }

        function setCopyright(copy) {
            settings.copyright = copy;
        }

        function setVersion(version) {
            settings.version = version;
        }

        // Service
        this.$get = function() {
            return {
                languages: settings.languages,
                name: settings.name,
                copyright: settings.copyright,
                logo: settings.logo,
                version: settings.version,
                defaultSkin: settings.defaultSkin
            };
        };
    }
})();


(function() {
    'use strict';

    routeConfig.$inject = ["$stateProvider"];
    angular
        .module('triangular')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('triangular', {
            abstract: true,
            templateUrl: 'app/triangular/layouts/default/default.tmpl.html',
            controller: 'DefaultLayoutController',
            controllerAs: 'layoutController'
        })
        .state('triangular-no-scroll', {
            abstract: true,
            templateUrl: 'app/triangular/layouts/default/default-no-scroll.tmpl.html',
            controller: 'DefaultLayoutController',
            controllerAs: 'layoutController'
        })
        .state('triangular.admin-default', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/triangular/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                sidebarRight: {
                    templateUrl: 'app/triangular/components/notifications-panel/notifications-panel.tmpl.html',
                    controller: 'NotificationsPanelController',
                    controllerAs: 'vm'
                },
                toolbar: {
                    templateUrl: 'app/triangular/components/toolbars/toolbar.tmpl.html',
                    controller: 'DefaultToolbarController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div id="admin-panel-content-view" class="{{layout.innerContentClass}}" flex ui-view></div>'
                },
                belowContent: {
                    template: '<div ui-view="belowContent"></div>'
                }
            }
        })
        .state('triangular.admin-default-no-scroll', {
            abstract: true,
            views: {
                sidebarLeft: {
                    templateUrl: 'app/triangular/components/menu/menu.tmpl.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                },
                sidebarRight: {
                    templateUrl: 'app/triangular/components/notifications-panel/notifications-panel.tmpl.html',
                    controller: 'NotificationsPanelController',
                    controllerAs: 'vm'
                },
                toolbar: {
                    templateUrl: 'app/triangular/components/toolbars/toolbar.tmpl.html',
                    controller: 'DefaultToolbarController',
                    controllerAs: 'vm'
                },
                content: {
                    template: '<div flex ui-view layout="column" class="overflow-hidden"></div>'
                }
            }
        });
    }
})();