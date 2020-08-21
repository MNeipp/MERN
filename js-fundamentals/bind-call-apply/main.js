function levelUp() {
    console.log(this.name + " has learned a new kata, in " + this.gender + " favorite language: " + this.language);
  }
  var person = {
    name: 'Lisa',
    gender: 'her',
    language: 'JavaScript, duh!'
  };
  levelUp.call(person);
  