
angular.module('FileBrowserApp').factory('DirectoriesService', ['$http', function ($http) {

        var fileExplorerUrl = 'http://localhost:62714/api/Default/Index/';
        var countOfFilesUrl = 'http://localhost:62714/api/Default/GetFilesSize/';
        var DirectoriesService = {};
        DirectoriesService.getExplorerModel = function (path) {
            if(typeof path === 'undefined'){
                path = '';
            } else {
                path = '?realpath=' + path;
            }
            return $http.get(fileExplorerUrl + path, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
        };

        DirectoriesService.getCountOfFiles = function (path) {
            if(typeof path === 'undefined'){
                path = '';
            } else {
                path = '?path=' + path;
            }
            return $http.get(countOfFilesUrl + path, {headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
        };


        return DirectoriesService;
}]);