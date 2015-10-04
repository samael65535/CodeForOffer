/**
 * Created by samael on 15/10/3.
 */

Shortener = new Meteor.Collection("shortener");

Shortener.allow({
    insert: function() {
        if(Meteor.isServer) {
            return true;
        }
        return false;
    }
});