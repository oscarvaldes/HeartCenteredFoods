$(document).ready(function(){
    // Connect to our node/websockets server
    var socket = io.connect('http://localhost:8080');

    // New socket connected, display new count on page
    socket.on('users connected', function(data){
       $('#usersConnected').html('Users connected: ' + data)
      //  console.log("TESTINGGGG");
    })

    // if(document.location.href.match(/[^\/]+$/)[0]==='index.html'){
    //   //$('.navbar-brand').text('test');
    //   $('#current-tab').text('Home');
    // }
    // else{
    //   var name=document.location.href.match(/[^\/]+$/)[0];
    //   name=name.substring(0, name.length - 5);
    //   $('#current-tab').text(name);
    //   name.charAt(0).toUpperCase() + name.slice(1);
    // }

})
