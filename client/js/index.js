getHelloData();

async function getHelloData() {
    const response = await fetch("http://localhost:3000/hello");
    const data = await response.json();
    
    let htmlContent = `
        <h1>${data.message}</h1>
    `
    $("#main-container").html(htmlContent);
}    