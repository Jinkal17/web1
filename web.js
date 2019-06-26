var http=require('http');

var website={
	name:"Corporate_Customer_Accounting",
	status:"running",
	service:"charged"
};
//var count=45;
//count++;
var controller=function(request,response)
{
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.end(JSON.stringify(website));
};

var server=http.createServer(controller);
server.listen(4000);
console.log("listen on port 4000");
//{id:1,name:"bottle",price:40,color:"pink"},