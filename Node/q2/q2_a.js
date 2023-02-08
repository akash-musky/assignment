const Handlebars = require("handlebars");
 
const template=Handlebars.compile(`name: {{name}} 
 company:{{company}}
 role: {{role}} `)

console.log(template({ 
  name: "akash kumar",
  company: "celigo",
  role: "engineering intern"
}))

