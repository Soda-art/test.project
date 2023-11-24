const inputSearch   = document.getElementById("job-search");
const searchQuery   = inputSearch.value;

const searchJob = async () => {

    const inputSearch   = document.getElementById("job-search");
    const searchQuery   = inputSearch.value;
    console.log(searchQuery);

    try {
        const url   = `https://frcz3.sse.codesandbox.io/jobs?q=`+searchQuery;
        const res   = await fetch(url);
        const data  = await res.json();
        renderSearchJob(data);
    } catch (err) {
        console.log('error', err);
    }
}

    inputSearch.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchJob();
    }
});

const renderSearchJob = (data) => {
    var html_render = '';
    for (let i = 0; i < data.length; i++) {
        html_render +=  `
        div id="display-job">
            <p class="title-job">Tilte-Job: ${data[i].title}</p>
            <p class="city-job">City: ${data[i].city}</p>
        </div>
            `
    };

    console.log(html_render);
    const display_job = document.getElementById("display-job");
    display_job.innerHTML = html_render;
}