(function (module) {
    'use strict';

    /**
     * @ngdoc directive
     * @name viewWithTransition
     * @description
     * Fix the height of the parent container of a view node when the view is been transitioned.
     * @author dzegarra@gmail.com
     */
    module.directive('viewWithTransition', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                /**
                 * Name of the specific class which contain the transition properties.
                 * @type {string}
                 */
                var transitionClass = attrs.viewWithTransition;

                /**
                 * Returns the height of the content inside the view container;
                 * @returns {number}
                 */
                function getHeight() {
                    return element.length ? (element[0].offsetHeight || 0) : 0;
                }

                /**
                 * Set the min height of the container.
                 * @param {number} newHeight
                 */
                function setContainerHeight(newHeight) {
                    container.css('min-height', newHeight+'px');
                }

                /**
                 * Check is the element passed is the current view active or becoming active.
                 * @param {Element} element
                 * @returns {Boolean}
                 */
                function isElementActive(element) {
                    return element && element.hasClass('ng-enter-active');
                }

                if (transitionClass) {
                    element.addClass(transitionClass);
                }

                var container = element.parent();
                scope.$watch(getHeight, function (newHeight) {
                    //Update parent height only if enter transition is running
                    if (isElementActive(element)) {
                        setContainerHeight(newHeight);
                    }
                });

            }
        };
    });

})(angular.module('dzegarra.utils.transitions', ['ngAnimate']));
