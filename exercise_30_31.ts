let usernames = ['admin', 'Atif', 'Daniyal', 'Hamza', 'Om'];

// Greeting lop
if (usernames.length > 0) {
    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log('We need to find some users!');
    // Removing all usernames
    usernames = [];
}

// Checking the message when the list is empty
if (usernames.length === 0) {
    console.log('Now, the list of users is empty.');
}
