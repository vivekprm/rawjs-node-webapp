getHelloData();

async function getHelloData() {
    const response = await fetch("http://localhost:3000/hello");
    const data = await response.json();
    let msg = _.join(['hello: ', data.message], ' ');
    let htmlContent = `
        <h1>${msg}</h1>
    `
    $("#main-container").html(htmlContent);
}    