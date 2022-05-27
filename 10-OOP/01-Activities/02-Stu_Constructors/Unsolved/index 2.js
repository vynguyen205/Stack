// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    // TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech
    this.introduction = () => {
        console.log(`my name is ${this.name}, I like ${this.tech}`)
    }
}
// TODO: Create a new object using the 'Developer' constructor

const somethingElse = new Developer("Kane","apple")
somethingElse.introduction();

// TODO: Call the 'introduction()' method on the new object
