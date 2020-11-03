const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  // TODO: Log the answer in a database
  let name = answer;
  rl.question('What is your favourite activity? ', (answer) => {
    // TODO: Log the answer in a database
    let activity = answer;
    rl.question('What city do you live in? ', (answer) => {
      // TODO: Log the answer in a database
      let city = answer;
      rl.question('How long have you lived there? ', (answer) => {
        // TODO: Log the answer in a database
        let duration = answer;
        rl.question('How old are you? ', (answer) => {
          // TODO: Log the answer in a database
          let age = answer;
          console.log(`Hello! My name is ${name}. My favourite activity is ${activity} and I live in ${city}. I have lived here for ${duration} and I am ${age} years old.`);
        });
      });
    });
  });
});




