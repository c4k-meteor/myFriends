//var 쓰면 파일에서만 엑세스 가능

Friends = new Mongo.Collection('friends');


//friends 는 몽고디비 컬렉션이다.
//


if(Meteor.isClient){
    Meteor.methods({
        nice : function(a){
            Friends.insert({name:a,email:'난클라이언트'});
        }
    });
}
if(Meteor.isServer){
    Meteor.methods({
        nice : function(a){
            Friends.insert({name:a,email:'난서버'});
        }
    });
}


















