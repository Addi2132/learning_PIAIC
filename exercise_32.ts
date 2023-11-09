let currentUsers = ['Atif221', 'bobby321', 'Charlie543', 'noman54', 'John32'];

// New usenames
let newUsers = ['John32', 'Eric77', 'bobby321', 'Mike2', 'Sara34'];

// Loop through new_users to check uniqueness
for (let newUser of newUsers) {
    // Check case-insnsitive uniqueness
    let isUnique = !currentUsers.some((user) => user.toLowerCase() === newUser.toLowerCase());

    if (isUnique) {
        console.log(`The username '${newUser}' is available.`);
    } else {
        console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
    }
}