Router.configure({
	layoutTemplate:'layout'
});

Router.map(function(){
	// Route
	this.route('/',{path:'/',template:'shortener'});
	// 路由转向
	this.route("/:short_url", function() {
		console.log(this.params.short_url);
	})
});