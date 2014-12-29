Template.friendList.helpers({

    listName : function(){
        return "사용자목록";
    }

    ,list : function(){

        return this.friendList;

    }

});


Accounts.ui.config({
    requestPermissions: {
        facebook: ['user_likes'],
        github: ['user', 'repo']
    },
    requestOfflineToken: {
        google: true
    },
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});
