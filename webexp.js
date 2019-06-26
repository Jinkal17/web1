var express=require('express')
var app=express();

var websiteController=function(req,resp)
{
	//console.log("invoking rest api for website");
	var website=[
	
	{emp_id:1,name:"Darsh_Ramani",branch:"Japan",mobNo:"1234567"},
	{emp_id:1,name:"Pooja_Shah",branch:"Japan",mobNo:"1234567"},
	{emp_id:1,name:"Gaurav_Vora",branch:"Japan",mobNo:"1234567"},
	{emp_id:1,name:"Disha_Jain",branch:"Japan",mobNo:"1234567"},
	{emp_id:1,name:"kinjal_Mehta",branch:"Japan",mobNo:"1234567"},
	{emp_id:1,name:"Jinkal_Bhimani",branch:"Japan",mobNo:"1234567"},
	
];
resp.send(website);	
};

app.get('/website',websiteController);
var server=app.listen(8000,function()
{
	var host=server.address().address
	var port=server.address().port
})