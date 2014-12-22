Router.route('/friendList',{

    template : 'friendList',

    waitOn : function(){
        return [ Meteor.subscribe("getAllFriends") ];
    },

    data : function(){
        return {
            friendList : Friends.find({},{sort:{no:1}}).fetch()
        };
    }

});

Router.route('/friendInput',{

    template : 'friendInput'

});