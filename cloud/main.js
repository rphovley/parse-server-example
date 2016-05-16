
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hello from Azure.');
});

/*Parse.Cloud.defin('testFunction', function(req,res){
	res.success('Hello from test.');
});*/
Parse.initialize('test_ud');
Parse.serverURL = 'https://officedev.paulhovley.com/parse';
Parse.Cloud.define("deleteUser", function(req,res){
  if (!req.user) {
    response.error("Must be signed in to call this Cloud Function.")
    return;
  }
  var query = new Parse.Query("ExtendedUser");
  query.equalTo("parent", req.user.id);
  //res.success('Hello from delete.');
  var hello = function(user){
    res.success('Hello from delete.' + user.get("first_name"));
  }
  // Get the first user which matches the above constraints.
  query.first({
    success: function(user) {
    // Successfully retrieved the object.
    console.log("before response");3
    hello(user);
    res.success('Hello from delete.' + user.get("first_name"));
    /*if(user.get("corporate_role") === 'Admin'){
      hello(user);
    }else{
      res.success("not admin");
    }*/
      
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
      res.success('Hello from delete.' + user.get("first_name"));
    }
  });

  
  
});

/*Parse.Cloud.define("modifyUser", function(request, response) {
  if (!request.user) {
    response.error("Must be signed in to call this Cloud Function.")
    return;
  }

  example test call

	Parse.Cloud.run('modifyUser', { username: 'userA' }, {
	  success: function(status) {
	    // the user was updated successfully
	  },
	  error: function(error) {
	    // error
	  }
	});

  




  // The user making this request is available in request.user
  // Make sure to first check if this user is authorized to perform this change.
  // One way of doing so is to query an Admin role and check if the user belongs to that Role.
  // Replace !authorized with whatever check you decide to implement.
  if (!authorized) {
    response.error("Not an Admin.")
    return;    
  }

  // The rest of the function operates on the assumption that request.user is *authorized*

  Parse.Cloud.useMasterKey();

  // Query for the user to be modified by username
  // The username is passed to the Cloud Function in a 
  // key named "username". You can search by email or
  // user id instead depending on your use case.

  var query = new Parse.Query(Parse.User);
  query.equalTo("username", request.params.username);

  // Get the first user which matches the above constraints.
  query.first({
    success: function(anotherUser) {
      // Successfully retrieved the user.
      // Modify any parameters as you see fit.
      // You can use request.params to pass specific
      // keys and values you might want to change about
      // this user.
      anotherUser.set("username", request.params.username);
      anotherUser.set("email", request.params.email);

      // Save the user.
      anotherUser.save(null, {
        success: function(anotherUser) {
          // The user was saved successfully.
          response.success("Successfully updated user.");
        },
        error: function(gameScore, error) {
          // The save failed.
          // error is a Parse.Error with an error code and description.
          response.error("Could not save changes to user.");
        }
      });
    },
    error: function(error) {
      response.error("Could not find user.");
    }
  });
});*/