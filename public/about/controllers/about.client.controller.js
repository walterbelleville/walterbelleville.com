// Use strict mode
'use strict';

// Create the about controller
angular.module('about').controller('AboutController', ['$scope',
    function ($scope) {
        $scope.aboutMe = 'About Me';

        $scope.bg1 = "/img/sprit-logos.jpg" // this is the default image.

        // Css image rollover
        $scope.imageOnCss = function() {
            this.hoverTextCss = true;
        };
        $scope.imageOffCss = function() {
            this.hoverTextCss = false;
        }
        // HTML rollover
        $scope.imageOnHTML = function() {
            this.hoverTextHTML = true;
        };
        $scope.imageOffHTML = function() {
            this.hoverTextHTML = false;
        }
        // Javascript rollover
        $scope.imageOnJavascript = function() {
            this.hoverTextJavascript = true;
        };
        $scope.imageOffJavascript = function() {
            this.hoverTextJavascript = false;
        }
        // Python rollover
        $scope.imageOnPython = function() {
            this.hoverTextPython = true;
        };
        $scope.imageOffPython = function() {
            this.hoverTextPython = false;
        }
        // Angular rollover
        $scope.imageOnAngular = function() {
            this.hoverTextAngular = true;
        };
        $scope.imageOffAngular = function() {
            this.hoverTextAngular = false;
        }
        // Bower rollover
        $scope.imageOnBower = function() {
            this.hoverTextBower = true;
        };
        $scope.imageOffBower = function() {
            this.hoverTextBower = false;
        }
        // PHP rollover
        $scope.imageOnPHP = function() {
            this.hoverTextPHP = true;
        };
        $scope.imageOffPHP = function() {
            this.hoverTextPHP = false;
        }
        // RD rollover
        $scope.imageOnRD = function() {
            this.hoverTextRD = true;
        };
        $scope.imageOffRD = function() {
            this.hoverTextRD = false;
        }
        // MySQL rollover
        $scope.imageOnMySQL = function() {
            this.hoverTextMySQL = true;
        };
        $scope.imageOffMySQL = function() {
            this.hoverTextMySQL = false;
        }
        // Mongodb rollover
        $scope.imageOnMongodb = function() {
            this.hoverTextMongodb = true;
        };
        $scope.imageOffMongodb = function() {
            this.hoverTextMongodb = false;
        }
        // Node rollover
        $scope.imageOnNode = function() {
            this.hoverTextNode = true;
        };
        $scope.imageOffNode = function() {
            this.hoverTextNode = false;
        }
        // Vagrant rollover
        $scope.imageOnVagrant = function() {
            this.hoverTextVagrant = true;
        };
        $scope.imageOffVagrant = function() {
            this.hoverTextVagrant = false;
        }
        // jQuery rollover
        $scope.imageOnjQuery = function() {
            this.hoverTextjQuery = true;
        };
        $scope.imageOffjQuery = function() {
            this.hoverTextjQuery = false;
        }
        // Grunt rollover
        $scope.imageOnGrunt = function() {
            this.hoverTextGrunt = true;
        };
        $scope.imageOffGrunt = function() {
            this.hoverTextGrunt = false;
        }
        // Git rollover
        $scope.imageOnGit = function() {
            this.hoverTextGit = true;
        };
        $scope.imageOffGit = function() {
            this.hoverTextGit = false;
        }
        // Java rollover
        $scope.imageOnJava = function() {
            this.hoverTextJava = true;
        };
        $scope.imageOffJava = function() {
            this.hoverTextJava = false;
        }

    }
]);