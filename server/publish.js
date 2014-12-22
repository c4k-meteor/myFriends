Meteor.publish("getAllFriends", function (param) {

    console.log(param);

    return Friends.find();

});



