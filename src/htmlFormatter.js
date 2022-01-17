const fs = require('fs');

const roleItem = function(data, role) {
    if (role === 'manager') {
        return `<li class="list-group-item">Office Number: ${data.officeNumber}</li>`
    } else if (role === 'engineers') {
        return `<li class="list-group-item">GitHub: <a href="#" class="card-link">${data.github}</a></li>`
    } else {
        return `<li class="list-group-item">School: ${data.school}</li>`
    }
}

const generateManagerCard = (data) => {
    return `
    <div class="col-3">
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                
                    <h5 class="card-title">${data.manager[0].name}</h5>
                    <h5>Manager</h5>
                </div>
                <div class="d-flex justify-content-center">
                    <div class="pt-10 border border-dark w-75">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${data.manager[0].id}</li>
                            <li class="list-group-item">Email: <a href="#" class="card-link">${data.manager[0].email}</a></li>
                        <li class="list-group-item">Office Number: ${data.manager[0].officeNumber}</li> 
                        </ul>
                    </div>
                </div>
            </div> 
        </div>`;
};

const generateEngineerCard = data => {
    return `<div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            
                <h5 class="card-title">${data.engineers[0].name}</h5>
                <h5>Engineer</h5>
            </div>
            <div class="d-flex justify-content-center">
                <div class="pt-10 border border-dark w-75">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${data.engineers[0].id}</li>
                        <li class="list-group-item">Email: <a href="#" class="card-link">${data.engineers[0].email}</a></li>
                        <li class="list-group-item">GitHub: <a href="#" class="card-link">${data.engineers[0].github}</a></li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>`   
};

const generateInternCard = data => {
    return `<div class="col-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            
                <h5 class="card-title">${data.interns[0].name}</h5>
                <h5>Intern</h5>
            </div>
            <div class="d-flex justify-content-center">
                <div class="pt-10 border border-dark w-75">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${data.interns[0].id}</li>
                        <li class="list-group-item">Email: <a href="#" class="card-link">${data.interns[0].email}</a></li>
                        <li class="list-group-item">School: ${data.interns[0].school}</li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>`;
};
const parseCard = function(data) {
    var string = '';
    for (const [key, value] of Object.entries(data)) {
        if (key === 'engineers' || key ==='interns' || key==='manager'){
            console.log(data[key])
            data[key].forEach(item => {
                return generateCard(item, key)
            })
        }
    };
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


// ${data.filter(({ manager })).map(({ name, id, email, officeNumber }) =>  {
//     return `<div class="col-3">
//         <div class="card" style="width: 18rem;">
//             <div class="card-body">
            
//                 <h5 class="card-title">${name}</h5>
//                 <h5>Manager</h5>
//             </div>
//             <div class="d-flex justify-content-center">
//                 <div class="pt-10 border border-dark w-75">
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">${id}</li>
//                         <li class="list-group-item">Email: <a href="#" class="card-link">${email}</a></li>
//                        <li class="list-group-item">Office Number: ${officeNumber}</li> 
//                     </ul>
//                 </div>
//             </div>
//         </div> 
//     </div>
//     `}).join('')}; 

// ${data.filter(({ engineers })).forEach(item => item.map(({ name, id, email, github }) =>  {
//     return `<div class="col-3">
//         <div class="card" style="width: 18rem;">
//             <div class="card-body">
            
//                 <h5 class="card-title">${name}</h5>
//                 <h5>Engineer</h5>
//             </div>
//             <div class="d-flex justify-content-center">
//                 <div class="pt-10 border border-dark w-75">
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">${id}</li>
//                         <li class="list-group-item">Email: <a href="#" class="card-link">${email}</a></li>
//                         <li class="list-group-item">GitHub: <a href="#" class="card-link">${github}</a></li>
//                     </ul>
//                 </div>
//             </div>
//         </div> 
//     </div>
//     `}).join(''))};

//     ${data.filter(({ interns })).forEach(item => item.map(({ name, id, email, officeNumber }) =>  {
//     return `<div class="col-3">
//         <div class="card" style="width: 18rem;">
//             <div class="card-body">
            
//                 <h5 class="card-title">${name}</h5>
//                 <h5>Intern</h5>
//             </div>
//             <div class="d-flex justify-content-center">
//                 <div class="pt-10 border border-dark w-75">
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">${id}</li>
//                         <li class="list-group-item">Email: <a href="#" class="card-link">${email}</a></li>
//                         <li class="list-group-item">School: ${school}</li>
//                     </ul>
//                 </div>
//             </div>
//         </div> 
//     </div>
//     `}).join(''))};
//     `;