const generateCards = cards => {

    // create empty array to contain all of generated html in
    const html = [];

    // generate HTML for the manager card
    const generateManager = manager => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body card-area">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // generate HTML for the engineer card
    const generateEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body card-area">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // generate HTML for the intern card
    const generateIntern = intern => {
        return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">${intern.getRole()}</h3>
            </div>      
            <div class="card-body card-area">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // push all card HTML into the empty html array
    html.push(cards
        // filters out the role and assures it is strictly equal 
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );


    html.push(cards
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );


    html.push(cards
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    // joins all of the individual team member card html into one string to feed in
    return html.join("");
}

module.exports = cards => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>

    <body class="text-center">
        <header>
            <h1>My Team</h1>
        </header>
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    ${generateCards(cards)}
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
}