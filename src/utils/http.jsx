
var $ = require('jquery');


// TODO use fetch

function getHeaders() {
    return {
        'X-Auth-Token': localStorage.getItem('token'),
    };
}

var get = function(url){
	return $.ajax({
        headers: getHeaders(),
		url : url,
		type : 'GET',
		dataType : 'json',
		cache : false,
		contentType:"application/json"
	})
}

var post = function(url, data){
//	return $.post(url, data);
	return $.ajax({
                headers: getHeaders(),
				url : url,
				type : 'POST',
				contentType:"application/json",
				data : JSON.stringify(data)
			})
}

var del = function(url){
	return $.ajax({
        headers: getHeaders(),
		url : url,
		type : 'DELETE'
	})
}

var put = function(url, data){
	return $.ajax({
        headers: getHeaders(),
		type: 'PUT',
		data: JSON.stringify(data),
		contentType: 'application/json',
		url : url
	})
}

///localStorage.setItem('token', token);


module.exports = {
	get : get,
	post : post,
	del : del,
	put : put
}
