//var clientId = '578315505212';

var CLIENT_ID = '578315505212-35r9pguposfimf82usctotv6t6gg6cim.apps.googleusercontent.com';
	var apiKey = 'AIzaSyA3jUnHuwJYrEXHoeN9ikBqlAGvCixzFJ8';
	var scopes = 'https://www.googleapis.com/auth/plus.login';


function signedIn(authResult) {
		
		console.log(authResult);
		windows.lo
}
	
function checkAuth() {
	  gapi.auth.authorize({client_id: clientId, scope: scopes, }, signedIn);
	}

	
	
	
	function test2()  {
		var config = {'client_id': clientId,'scope': scopes };
	
    gapi.auth.authorize(config, function() 
            {
                window.location = "/home.html";
            });
    
    }

	function handleAuthClick(event) {
	  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
	  return false;
	}
	
	function signinCallback() {
		
		alert('signin cllaback');
	}
	
	function test() {
		
		var additionalParams = {
			     'callback': signinCallback
			   };
		 gapi.auth.signIn(additionalParams);
	}



function init() {

	function handleClientLoad() {
	  gapi.client.setApiKey(apiKey);
	  window.setTimeout(checkAuth,1);
	}

	
	
	
}