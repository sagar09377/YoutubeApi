//function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 3,
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
            //$.get("tpl/item.html", function(data) {
               
           // });
		    $("#results").append(item.snippet.title+" "+item.id.videoId);
          });
        //  resetVideoHeight();
       });
    });
    
   // $(window).on("resize", resetVideoHeight);
});

//function resetVideoHeight() {
  //  $(".video").css("height", $("#results").width() * 9/16);
}//

function init() {
    gapi.client.setApiKey("AIzaSyDSh74BCydxtxx6a5PowltvGrqzsqRHcws");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}
