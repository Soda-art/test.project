const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
const displayJob = document.querySelector('#display-job');

const nextPage = async () => {
        try {
        let limit = 10;
        let page = 10;
        let url = `https://frcz3.sse.codesandbox.io/jobs?_page=${page}&_limit=${limit}`;
        const res = await fetch(url)
        const data = await res.json();
        getPage(data)
        } catch (err) {
            console.log('Err: ', err)
    }
}
nextPage()

let getPage = (data) => {
    let html = '';
    
    for (let i = 0; i < data.length; i++) {
        html += `
        <div id="display-job">
        <p class="title-job">Tilte-Job: ${data[i].title}</p>
        <p class="city-job">City: ${data[i].city}</p>
    </div>
        `
}
console.log(html);
const display_job = document.getElementById('display-job');
display_job.innerHTML = html;
}
