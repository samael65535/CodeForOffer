// add your events or helpers here
Template.shortener.events({
    'click #submit': function (evt) {
        var $post = $('#origin_url').val();
        if ($post.length <= 0) {
            Session.set("info", {success: "", error: "域名不能为空"});
            return;
        }
        Shortener.insert({url:$post,  time: new Date()}, function(err, id) {
            if (err) {
                console.log(err.reason);
                Session.set("info", {success:"", error: err.reason});
                return;
            }
            console.log(id);
            Session.set("info", {success:"true", error: "", tiny_url: id});
            //
        });
    }
});
