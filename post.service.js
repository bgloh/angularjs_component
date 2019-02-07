
postService = function($resource){
    var url = 'https://www.thedoctorr.com/retrieveDB';
    return $resource(url,{},{
        query:{
            method: "GET",
            params: {},
            isArray: true,
            cache: true,
            // transformResponse
            // interceptor
        }
        ,
        get: {

            method: "GET",
            //params: {"id":@id},
            isArray: true,
            cache: true,
        }

    })
}

angular.module('postFactory',[])
        .factory('postService',postService);