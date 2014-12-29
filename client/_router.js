Router.route('/friendList',{

    template : 'friendList',

    waitOn : function(){
        if(Meteor.userId()){
            return [ Meteor.subscribe("getAllFriends") ];
        }else{
            return [];
        }
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

Router.route('/login',{

    template : 'login'

});

Router.route('/signup',{

    template : 'signup'

});

