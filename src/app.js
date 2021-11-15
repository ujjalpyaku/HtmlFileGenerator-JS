// component class
class Component {
  open(tagName) {
    return `<${tagName}>`;
  }
  close(tagName) {
    return `</${tagName}>`;
  }
  inputTag(name, type) {
    return `<input name="${name}" type="${type}" />`;
  }
}
// HtmlTag class that extends component
class HtmlTag extends Component {
  html() {
    let tagName = "html";
    let htmlElements = this.head() + this.body() + "\n";
    return this.openAndCloseTag(tagName, htmlElements);
  }
  openAndCloseTag(tagName, mid) {
    return "\n" + this.open(tagName) + mid + this.close(tagName);
  }
  head() {
    let tagName = "head";
    return this.openAndCloseTag(tagName, this.title() + "\n");
  }
  title() {
    let tagName = "title";
    let text = "HTML Page";
    return this.openAndCloseTag(tagName, text);
  }
  // content of the body is declared here
  body() {
    let tagName = "body";
    let bodyElements =
      this.h1("Contact Form") +
      this.label("First Name: ") +
      this.input("firstname", "text") +
      this.label("Last Name: ") +
      this.input("Lastname", "text") +
      this.label("Gender : ") +
      this.select("Male", "Female", "Other") +
      this.label("Are you Single? : ") +
      this.input("yes", "radio") +
      this.label("Yes") +
      this.input("no", "radio") +
      this.label("No") +
      this.button() +
      "\n";
    return this.openAndCloseTag(tagName, bodyElements);
  }
  h1(text) {
    return this.openAndCloseTag("h1", text);
  }
  label(labelName) {
    return this.openAndCloseTag("label", labelName) + "<br>";
  }
  input(inputName, inputType) {
    return "\n" + this.inputTag(inputName, inputType) + "<br>";
  }
  select(option1, option2, option3) {
    return (
      "\n" +
      this.open("select") +
      this.open("option") +
      option1 +
      this.close("option") +
      "\n" +
      this.open("option") +
      option2 +
      this.close("option") +
      "\n" +
      this.open("option") +
      option3 +
      this.close("option") +
      "\n" +
      this.close("select") +
      "<br>"
    );
  }
  button() {
    let tagName = "button";
    let text = "Submit";
    return (
      "\n<br>" +
      this.open(tagName + " type = 'Submit'") +
      text +
      this.close(tagName)
    );
  }
}
// creating object of HtmllTag class
let htmlFile = new HtmlTag();
let fs = require("fs");

//Assigning the Html contents to a variable
let htmlContent = htmlFile.html();

//Writing the content to index.html file
fs.writeFile("./index.html", htmlContent, function () {
  //on success
  console.log("Html File Generated Successfuly!");
});

//to generate HTML FIle
// - run "node app.js" on terminal from this directory(/src)
