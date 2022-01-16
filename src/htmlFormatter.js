const fs = require('fs');
const $cardContainer = document.getElementById('card-container');

const generateHTML = function() {    
return `
<!DOCTYPE html>
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
                
              </div>
          </div>
        <script src='../src/htmlFormatter.js'></script>
    </body>
</html>
`
}

const writeToFile = function(filename, data) {
    let file = new Promise((resolve, reject) => {    
        fs.writeFile(filename, generateCards(data), err => {if (err) {reject(err); return}});
    })
};

const generateCards = function(data) {
return  `                    
<div class="col-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
        </div>
        <div class="d-flex justify-content-center">
            <div class="pt-10 border border-dark w-75">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><a href="#" class="card-link">first item</a></li>
                    <li class="list-group-item"><a href="#" class="card-link">second item</a></li>
                    <li class="list-group-item"><a href="#" class="card-link">third item</a></li>
                </ul>
            </div>
        </div>
    </div> 
</div>
`
};

module.exports = { writeToFile }