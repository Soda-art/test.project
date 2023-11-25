
const searchJob = async (page, limit, query) => {
    try {
        const url   = `https://frcz3.sse.codesandbox.io/jobs?_page=${page}&_limit=${limit}&q=${query}`;
        const res   = await fetch(url);
        const data  = await res.json();
        renderJobs(data);
    } catch (err) {
        console.log('error', err);
    }
}


async function renderJobs(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      html += `
              <div id="display-job">
              <p class="title-job">Tilte-Job: ${data[i].title}</p>
              <p class="city-job">City: ${data[i].city}</p>
          </div>
              `;
    }
    const displayJob = document.getElementById("display-job");
    displayJob.innerHTML = html;
  }
