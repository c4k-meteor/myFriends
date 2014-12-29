Template.login.events({
    'click button[name=LogIn]' : function(evt,tmpl){

        var id = tmpl.find('input[name=username]').value;
        var pwd = tmpl.find('input[name=password]').value;

        Meteor.loginWithPassword( id,pwd, function(err){
            if (err){
                alert('로그인이 실패 하였습니다. \n' + err);
            }
            else{
                alert("로그인 되었습니다.");
                Router.go('friendList');
            }
        });

    }
    ,
    'click button[name=SignUp]' : function(evt,tmpl){
        Router.go('/signup');
    }
});

Template.signup.events({
    'click button[name=Save]' : function(evt,tmpl){
        var info = {
            username : tmpl.find('input[name=username]').value
            ,password : tmpl.find('input[name=password]').value
            ,email : tmpl.find('input[name=email]').value
            ,profile : {
                nickname : tmpl.find('input[name=email]').value
            }
        };

        Accounts.createUser(info,function(err){
            if (err){
                alert(err);
            }else{
                alert("등록 되었습니다.");
                Router.go('/friendList');
            }
        });

    }
    ,
    'click button[name=Cancel]' : function(evt,tmpl){
        Router.go('/login');
    }
});

Template.logout.events({
    'click button[name=logout]': function (evt, tmpl) {
        Meteor.logout();
        Router.go('/login');
    }
})
