/**
 * Created by Antony on 11/28/2015.
 */
snapshotsAttributesModule.controller('snapshotsAttributesController',
    function ($scope, $mdDialog, playbackTime, duration, description) {
        $scope.attributesDialogIcons = [
            {name: 'Close', icon: 'close'}
        ];
        $scope.durationSet = duration;
        $scope.videoplayTime = playbackTime;
        $scope.description = description;
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide([$scope.durationSet, $scope.videoplayTime, $scope.description]);
        };
    });