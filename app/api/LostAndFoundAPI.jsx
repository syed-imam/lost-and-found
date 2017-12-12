var axios=require('axios');

module.exports= {

    getTemp: function(location){
        
        var requestUrl='http://sample-env.mcdntuzfaz.us-east-1.elasticbeanstalk.com/greeting';
        return axios.get(requestUrl).then(function(res){            
            return res.data;          
            
        }, function(err){            
            throw new Error(err.data.message);
        });
    }
}