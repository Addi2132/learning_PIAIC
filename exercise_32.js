var currentUsers = ['Atif221', 'bobby321', 'Charlie543', 'noman54', 'John32'];
// New usenames
var newUsers = ['John32', 'Eric77', 'bobby321', 'Mike2', 'Sara34'];
var _loop_1 = function (newUser) {
    // Check case-insnsitive uniqueness
    var isUnique = !currentUsers.some(function (user) { return user.toLowerCase() === newUser.toLowerCase(); });
    if (isUnique) {
        console.log("The username '".concat(newUser, "' is available."));
    }
    else {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
};
// Loop through new_users to check uniqueness
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    _loop_1(newUser);
}
