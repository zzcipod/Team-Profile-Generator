const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

const makeTeam = team => {

//     const generateManagerCard = manager => {
//       return
// `<div class="card" style="width: 18rem;">
// <div class="card-body">
//     <h5 class="card-title">${manager.name}</h5>
//     <h5 class="card-title">${manager.getRole()}</h5>
// </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">ID: ${manager.id}</li>
//     <a href='mailto:${manager.email}'><li class="list-group-item">Email: ${manager.email}</li></a>
//     <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
//   </ul>
//   <div class="card-body">
//   </div>
// </div>`
//     }

//     const generateManagerCard = manager => {
//       return
// `<div class="card" style="width: 18rem;">
// <div class="card-body">
//     <h5 class="card-title">${manager.name}</h5>
//     <h5 class="card-title">${manager.getRole()}</h5>
// </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">ID: ${manager.id}</li>
//     <a href='mailto:${manager.email}'><li class="list-group-item">Email: ${manager.email}</li></a>
//     <a href='https://github.com/12312312414'><li class="list-group-item">Github: ${manager.github}</li>
//   </ul>
//   <div class="card-body">
//   </div>
// </div>`
//     }

//     const generateManagerCard = manager => {
//       return
// `<div class="card" style="width: 18rem;">
// <div class="card-body">
//     <h5 class="card-title">${manager.name}</h5>
//     <h5 class="card-title">${manager.getRole()}</h5>
// </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">ID: ${manager.id}</li>
//     <a href='mailto:${manager.email}'><li class="list-group-item">Email: ${manager.email}</li></a>
//     <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
//   </ul>
//   <div class="card-body">
//   </div>
// </div>`
//     }



    const generateCard = person => {
      return
`<div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">${person.name}</h5>
    <h5 class="card-title">${person.getRole()}</h5>
</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${person.id}</li>
    <a href='mailto:${person.email}'><li class="list-group-item">Email: ${peson.email}</li></a>
    <li class="list-group-item">${person.getRole()==='Manager' ? 'Office Number: ' + person.officeNumber : person.getRole() === 'Intern' ? 'School :' + person.school : <a href=''>Github</a>}</li>
  </ul>
  <div class="card-body">
  </div>
</div>`
    }




    const html = [];

    html.push(team.map(teamMember => generateCard(teamMember)))

    return html.join('');
}


inputManagerName = getinput()
inputManagerId = getinput()
inputManagerEmail = getinput()


const newManager = new Manager(inputManagerName, inputManagerId, inputManagerEmail);
return newManager
team.push(newManager)


manager = {
  name: string;
  email: string;
  id: integer;
  officeNumber: integer;
}

inputManagerName = getinput()
inputManagerId = getinput()
inputManagerEmail = getinput()


const newManager = new Manager(inputManagerName, inputManagerId, inputManagerEmail);
return newManager
team.push(newStudent)

employee = {
  name: string;
  email: string;
  id: integer;
}

inputEmployeeName = getinput()
inputeEmployeeEmail = getinput()
inputEmployeeId = getinput()


const newManager = new Manager(inputManagerName, inputManagerId, inputManagerEmail);
return newManager

Intern = {
  name: string;
  email: string;
  id: integer;
  school: string;
}

inputInternName = getinput()
inputeInternEmail = getinput()
inputInternId = getinput()
inputInternschool = getinput()

Engineer = {
  name: string;
  email: string;
  id: integer;
  github: string;
}

inputEngineerName = getinput()
inputeEngineerEmail = getinput()
inputEngineerId = getinput()
inputEngineerGithub = getinput()