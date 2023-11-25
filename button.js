const apiUrl = "https://frcz3.sse.codesandbox.io/jobs";
async function fetchData(page, limit) {
  try {
    const url = `${apiUrl}?_page=${page}&_limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function renderJob(page, limit) {
  const data = await fetchData(page, limit);
  console.log(data);
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

async function getNextPage() {
  currentPage += 1;
  renderJob(currentPage, limit);
}

async function getPrevPage() {
  currentPage -= 1;
  renderJob(currentPage, limit);
}

