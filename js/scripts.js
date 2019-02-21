$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    var food = $("input:radio[name=food]:checked").val();
    var sleep = $("input:radio[name=sleep]:checked").val();
    var result;
    if (food === "meat" && sleep === "little") {
      result = "dog";
    } else if  (food === "meat" && sleep === "some") {
      result = "tiger";
    } else if  (food === "meat" && sleep === "lots") {
      result = "lion";
    } else if  (food === "fish" && sleep === "little") {
      result = "bear";
    } else if  (food === "fish" && sleep === "some") {
      result = "human";
    } else if  (food === "fish" && sleep === "lots") {
      result = "cat";
    }
    $("#output").text(result);
    event.preventDefault();
  });
});
