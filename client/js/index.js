getHelloData();

async function getHelloData() {
    const response = await fetch("http://localhost:3000/hello");
    const data = await response.json();
    
    let container = document.getElementById("main-container");
    container.innerHTML = `
        <h1>${data.message}</h1>
    `
}    