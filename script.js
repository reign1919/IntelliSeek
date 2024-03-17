     $(window).on("load", function() {
            // Hide the loader
            $(".loader").fadeOut("slow");
            // Show the content
            $(".container").fadeIn("slow");
        });
        const apiKey = 'AIzaSyBv4XqWg5hS2tgI3ih-dZUgT7s1FIlsxTY';
        const searchEngineId = '5629b48a1d948466b';

        $('#search-form').on('submit', function(e) {
            e.preventDefault();
            const query = $('#search-input').val();
            fetchSearchResults(query);
        });

        function fetchSearchResults(query) {
            const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`;
            $.getJSON(url, function(data) {
                displaySearchResults(data.items);
            });
        }

        function displaySearchResults(results) {
            let html = '';
            results.forEach(function(result) {
                html += `<div class="result">
                            <a href="${result.link}">${result.title}</a>
                            <p>${result.snippet}</p>
                        </div>`;
            });
            $('#results').html(html);
        }
