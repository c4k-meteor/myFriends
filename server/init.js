//서버측의 데이터 초기화 스크립트

Meteor.startup(function() {

    if(Friends.find().count() == 0){
        Friends.insert({no:4,name:"박승현",email:"ppillip@gmail.com"});
        Friends.insert({no:3,name:"전지현",email:"jjh@gmail.com"});
        Friends.insert({no:1,name:"김완선",email:"kws@gmail.com"});
        Friends.insert({no:2,name:"카라",email:"kara@gmail.com"});
        console.log('insert 됬음');
    };

});