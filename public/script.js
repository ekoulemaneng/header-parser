const handleLoad = () => {
    let url = window.location.href + "api/whoami";
    console.log(url);
    fetch(url).then(res => res.json()).then(value => fillTable(value));
}

const fillTable = obj => {
    document.getElementById("table").innerHTML = '<tr><td class="bold">IP address</td><td>:</td><td>' + obj["ipaddress"] + '</td></tr>' + 
                                                 '<tr><td class="bold">Languages</td><td>:</td><td>' + obj["language"] + '</td></tr>' +
                                                 '<tr><td class="bold">Softwares</td><td>:</td><td>' + obj["software"] + '</td></tr>';
}

