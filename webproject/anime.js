function openFormRegister() {
    document.getElementById("RegisterForm").style.display = "block";
  }
  function openFormLogin() {
    document.getElementById("LoginForm").style.display = "block";
  }
  function closeFormRegister() {
    document.getElementById("RegisterForm").style.display = "none";
  }
  function closeFormLogin() {
    document.getElementById("LoginForm").style.display = "none";
  }

  // Function to send login data.
  $(function() {
    var request;
    //var $submitActors = $("#MyForm").find("input[type=submit]");
    $("#loginButton").click(function(event) {
        event.preventDefault();
        var $form = $("#MyForm");
      
        var serializedData = $form.serialize();

        // Send data to login.php
        request = $.ajax({
            url: "login.php",
            type: "post",
            data: serializedData
        });

        // Receive data
        request.done(function(response, textStatus, jqXHR){
            if (response == "Login Success") {
                console.log("Login OK");
                alert(response);
                name = document.getElementById("name").value;
                console.log(name);
                document.cookie="username="+name+";"
                //window.location.href='userpage.html';
                //document.getElementById("LoginForm").style.display = "none";
            }
            else {
                console.log("Login Failed");
                alert(response);
            }
        });
        
    });
})
//Review Section
// Function to send login data.
$(function() {
  var request;
  //var $submitActors = $("#MyForm").find("input[type=submit]");
  $("#reviewButton").click(function(event) {
      event.preventDefault();
          
      var partStr = document.cookie.split(";");
      var username = partStr[0].split("=")[1];

      var usernameField = $("<input>")
               .attr("type", "hidden")
               .attr("name", "username").val(username);
      $('#reviewForm').append(usernameField);
      
      var animeField = $("<input>")
      .attr("type", "hidden")
      .attr("name", "anime").val(document.getElementById("titleText").textContent);
      $('#reviewForm').append(animeField);

      var $form = $("#reviewForm");
      var serializedData = $form.serialize();

      // Send data
      request = $.ajax({
          url: "insertReview.php",
          type: "post",
          data: serializedData
      });

      // Receive data
      request.done(function(response, textStatus, jqXHR){
          if (response == "Login Success") {
              console.log("Login OK");
              alert(response);
              //name = document.getElementById("name").value;
              //console.log(name);
              //document.cookie="username="+name+";"
              //window.location.href='userpage.html';
              //document.getElementById("LoginForm").style.display = "none";
          }
          else {
              console.log("Login Failed");
              alert(response);
          }
      });
      
  });
})