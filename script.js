function displaySearchResults(results) {
    let html = '';
    results.forEach(function(result) {
        html += `<div class="result">
                    <a href="${result.link}">${result.title}</a>
                    <p>${result.snippet}</p>
                </div>`;
    });
    $('#results').html(html);

    // Pagination
    const pagination = $('<div class="pagination"></div>');
    if (data.queries.previousPage || data.queries.nextPage) {
        if (data.queries.previousPage) {
            pagination.append(`<button class="prev-page" onclick="fetchSearchResults('${query}', ${data.queries.previousPage.startIndex})">Previous</button>`);
        }
        if (data.queries.nextPage) {
            pagination.append(`<button class="next-page" onclick="fetchSearchResults('${query}', ${data.queries.nextPage.startIndex})">Next</button>`);
        }
    }
    $('#results').append(pagination);
}
