// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");
  
      var newDevourState = {
        devoured: newDevour
      };
  
     // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed Devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
   
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new Burger");
          // Reload the page to get the updated list
          loburgerion.reload();
        }
      );
    });
  
    $(".delete-burger").on("click",function(event){
      event.preventDefault();
      var id = $(this).data("id");
      console.log("delete id " + id);
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("DELETE burger" + id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    });
  
  