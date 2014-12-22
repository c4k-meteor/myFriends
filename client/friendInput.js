Template.friendInput.events({
    'click button' : function(evt,tmpl){
        Friends.insert({
            no : tmpl.find('input[name=no]').value
            ,name : tmpl.find('input[name=name]').value
            ,email : tmpl.find('input[name=email]').value
        },function(){
            Router.go('/friendList');
        });
    }
});

Template.friendInput.rendered = function(){
};

Template.friendInput.helpers({
});