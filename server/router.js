Router.route('/rest/friendList', function () {

    // NodeJS request object
    var request = this.request;

    // NodeJS  response object
    var response = this.response;

    // 디비에서 조회
    var rtn = {friendList : Friends.find().fetch()};

    this.response.end(JSON.stringify(rtn));

}, {where: 'server'});












