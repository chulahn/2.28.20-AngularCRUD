angular.module("userApp", []).controller("UserController", function() {
  var userList = this;
  userList.users = [{ name: "George Washington" }, { name: "Chul Ahn" }];

  userList.addUser = function() {
    console.log(1);
    userList.users.push({
      name: userList.userName
    });
  };
});
