Meteor.publish("getAllFriends", function (param) {

    return Friends.find();

});



