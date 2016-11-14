angular.module('FileBrowserApp', [])
.controller('defaultCtrl', function($scope, DirectoriesService) {
        $scope.getCurrentFolder = function (path) {
            DirectoriesService.getExplorerModel(path)
                .success(function(response) {
                    $scope.currentFolder = response["CurrentFolder"];
                    $scope.DirModelList = response["DirModelList"];
                    $scope.FileModelList = response["FileModelList"]
                    $scope.getCountOfFiles(path);
                });
        };

        $scope.getCountOfFiles = function (path) {
            DirectoriesService.getCountOfFiles(path)
                .success(function(data) {
                    $scope.sizes = data;
                });
        };

        $scope.moveBack = function(path) {
            if(/^[A-Z]:\\$/.test(path)) {
                $scope.getCurrentFolder();
            } else {
                $scope.getCurrentFolder(path.substr(0, path.lastIndexOf('\\')))
            }
        };

        $scope.folderIsRoot = function(folder) {
            return folder != '';
        };

        $scope.getCurrentFolder();
    }
);