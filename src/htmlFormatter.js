const fs = require('fs');

const generateManagerCard = (data) => {
    var string = '';
    data.manager.forEach(manager => {
        string += `
    <div class="col-3">
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                
                    <h5 class="card-title">${manager.getName()}</h5>
                    <h5>${manager.getRole()}</h5>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="pt-10 border border-dark w-75">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="#" class="card-link">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li> 
                        </ul>
                    </div>
                </div>
            </div> 
        </div>`;
    })
    return string;
};

const generateEngineerCard = data => {
    var string = '';
    data.engineers.forEach(engineer => {
        string += `<div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            
                <h5 class="card-title">${engineer.getName()}</h5>
                <h5>${engineer.getRole()}</h5>
            </div>
            <div class="d-flex justify-content-center">
                <div class="pt-10 border border-dark w-75">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="#" class="card-link">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="#" class="card-link">${engineer.getGitHub()}</a></li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>`
    })
    return string;
};

const generateInternCard = data => {
    if (data.interns.length === 0) {
        return '';
    }
    var string ='';
    data.interns.forEach(intern => {
        string += `<div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            
                <h5 class="card-title">${intern.getName()}</h5>
                <h5>${intern.getRole()}</h5>
            </div>
            <div class="d-flex justify-content-center">
                <div class="pt-10 border border-dark w-75">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="#" class="card-link">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>`;
    })
    return string;
};



const generateHTML = function(data) {    
return `
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
</head>
    <body>
          <header class="bg-success text-white py-5 text-center"> My Team </header>  

          <div class="container">
              <div class="row d-flex justify-content-center" id='card-container'>
                ${generateManagerCard(data)}
                ${generateEngineerCard(data)}
                ${generateInternCard(data)}
              </div>
          </div>
    </body>
</html>
`
};
const writeToFile = function(filename, data) {
    let file = new Promise((resolve, reject) => {    
        fs.writeFile(filename, generateHTML(data), err => {if (err) {reject(err); return}});
    })
};

module.exports =  writeToFile;