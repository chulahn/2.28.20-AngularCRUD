angular.module("userApp", []).controller("UserController", function() {
  var userList = this;
  userList.users = JSON.parse(localStorage.getItem("users")) || [
    { name: "George Washington" },
    { name: "Chul Ahn" }
  ];

  userList.addUser = function() {
    userList.users.push({
      name: userList.userName
    });

    localStorage.setItem("users", JSON.stringify(userList.users));
  };
});
