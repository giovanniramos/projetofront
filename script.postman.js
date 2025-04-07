
// Extracting the response body
let responseBody = pm.response.json();

// Sorting the response based on the 'id' field
responseBody.sort((a, b) => a.id - b.id);

// Setting the sorted response back to the response body
pm.response.json(responseBody);

// Set order by ID in the table visualization for the response
var template = `
<style type="text/css">
    .tftable    {font-size:14px;background-color:#0f131e;color:#e5e7eb;border-color:#4a5565;border-width:1px;border-collapse:collapse;width:100%;}
    .tftable th {font-size:18px;background-color:#0f131e;color:#e5e7eb;border-color:#4a5565;border-width:1px;border-style:solid;padding:8px;text-align:left;}
    .tftable td {font-size:14px;background-color:#1e2939;color:#99a1af;border-color:#364153;border-width:1px;border-style:solid;padding:8px;}
    .tftable tr {font-size:18px;background-color:#1e2939;}
    .tftable tr:hover {background-color:#273b5a;}
</style>

<table class="tftable" border="1">
    <tr>
        <th>Oco ID</th>
        <th>Informacao</th>
        <th>Data</th>
        <th>ID</th>
        <th>Anexos</th>
    </tr>
    ${responseBody.map(item => `
    <tr>
        <td>${item.ocoId}</td>
        <td>${item.informacao}</td>
        <td>${item.data}</td>
        <td>${item.id}</td>
        <td>${item.anexos}</td>
    </tr>
    `).join('')}
</table>
`;

function constructVisualizerPayload() {
    var res = pm.response.json();
    var visualizerData = res.map(item => ({
        id: item.id,
        informacao: item.informacao
    }));

    return {response: visualizerData};
}

pm.visualizer.set(template, constructVisualizerPayload());
