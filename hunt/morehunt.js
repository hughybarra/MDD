console.log('ran');

var myRootRef = new Firebase('https://secret.firebaseio.com/');

myRootRef.on('child_added', function(snapshot) {
  console.log(snapshot);
});


// auth.login('github');