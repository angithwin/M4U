"use strict";

angular.module('app.directives.home', [])
	.directive('homeForm', [function () {
		return {
			restrict: 'E',
			scope: {},
			// replace: true,
			templateUrl: 'components/home/template.html',
			controller: ['$scope', '$http', '$mdSidenav', function ($scope, $http, $mdSidenav) {
				$scope.items = [];

				$scope.toggleLeft = buildToggler('left');
				$scope.toggleRight = buildToggler('right');

				function buildToggler(componentId) {
					return function () {
						$mdSidenav(componentId).toggle();
					}
				}

				for (var i = 0; i < 1000; i++) {
					$scope.items.push(i);
				}

				$scope.movies = ["https://image.tmdb.org/t/p/w300/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg",
								"https://image.tmdb.org/t/p/w300/3Ypk0OLrECSp7tqQFLMppGBrHfo.jpg",
								"https://image.tmdb.org/t/p/w300/bVsJsE6fSzauhFZDuhNJ9SHs10f.jpg",
								"https://image.tmdb.org/t/p/w300/g1xLrof2RVgtHBB4fLvR5Xr8l5x.jpg",
								"https://image.tmdb.org/t/p/w300/A2S4Ut2mDmedw7JQHxfCsnxCprV.jpg",
								"https://image.tmdb.org/t/p/w300/rZd0y1X1Gw4t5B3f01Qzj8DYY66.jpg",
								"https://image.tmdb.org/t/p/w300/qtBFrsEQ4oXW8sKvRxkKnYuPLg.jpg",
								"https://image.tmdb.org/t/p/w300/1Ly7jDlYOFl7fc3aH61vEUtd2Ua.jpg",
								"https://image.tmdb.org/t/p/w300/f2CqQR8DF2I3DvmJFp5lRzRKD30.jpg"]
			}]

			
		};
	}]);
