// add your events or helpers here
Shortener = new Meteor.Collection("shortener");

Template.shortener.events({
    'click #submit': function (evt) {
        var $post = $('#origin_url').val();
        if ($post.length <= 0) {
            Session.set("info", {success: "", error: "域名不能为空"});
            return;
        }
        Shortener.insert({url:$post,  time: new Date()}, function(err, id) {
            if (err) {
                Session.set("info", {success:"", error: err.reason});
                return;
            }
            Session.set("info", {success:"true", error: "", tinny_url: id});
            //
        });
    }
});


Template.shortener.tinyURL({
    "tinyURL": function() {
        var originUrl = $('#origin_url').val();
        return Shortener.find({"url": originUrl});
    }
});