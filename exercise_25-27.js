var alienColor = 'green';
// Version that passes the if test:
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
// Version that fails the if test:
alienColor = 'red';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
// Version that runs the if block:
alienColor = 'green';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("You just earned 10 points.");
}
// Version that runs the else block:
alienColor = 'yellow';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("You just earned 10 points.");
}
// version for green alien
alienColor = 'green';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// version for yellow alien
alienColor = 'yellow';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// version for red alien
alienColor = 'red';
if (alienColor === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColor === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alienColor === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
