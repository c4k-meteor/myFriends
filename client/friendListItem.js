Template.friendListItem.helpers({

});

Template.friendListItem.events({
    'click button[name=star]' : function(evt,tmpl){

        // this 는 each 에서 밀어 넣어준 item 이 됩니다.
        alert(this.no + this.name + this.email);

        // evt 는 현재 이벤트를 받은 object 입니다.
        // 클릭후 숨김니다.
        $(evt.target).hide();

        // tmpl 은 each 에 의해 생성된 현재 tmplate html 오브젝트 입니다.
        // findAll 함수로 tmpl안에 오브젝트를 검색 할수 있습니다.
        var tdArr = tmpl.findAll("td");
        console.log('td들',tdArr);

    },

    'click button[name=remove]' : function(evt,tmpl){
        console.log('tmpl이멀까?',tmpl); //블레이즈 템플릿 오브젝트
        Friends.remove({_id:this._id});
    }
});

Template.friendListItem.rendered = function(){
};

