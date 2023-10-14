async function fetchData() {
    const response = await fetch('../data/members.json');
    const data = await response.json();
    return data;
}

function displayData(data) {
    const element = document.getElementById('team-info');

    for (const item of data) {
        let div = document.createElement('div');
        div.className = 'col-sm-12 col-lg-6';
        div.innerHTML = `
        <a href=${item.linkedin} class="row align-items-center bg-body-tertiary m-2 rounded p-2 url-custom">
            <img class="col-3 img-circle" width="20" height="70" src=${item.image} />
            <p class="col-8">
                <b class="text-primary font-bold">${item.name}</b> <br>
                ${item.role ? item.role : ''}
            </p>
        </a>
        `;
        element.appendChild(div);
    }
}

fetchData().then(displayData);