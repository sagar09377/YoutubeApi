
$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 5,
            order: "viewCount",
            publishedAfter: "2015-01-01T00:00:00Z"
       }); 
       // execute the request
       request.execute(function(response) {
		   console.log(response);
          var results = response.result;
          $("#results").html("");
          $.each(results.items, function(index, item) {
			    console.log(item);
        
		    $("#results").append(item.snippet.title+" "+item.id.videoId);
          });
       
       });
    });
    
  
});



function init() {
    gapi.client.setApiKey("AIzaSyDSh74BCydxtxx6a5PowltvGrqzsqRHcws");//my key
    gapi.client.load("youtube", "v3", function() {
        // youtube api is ready
    });
}
