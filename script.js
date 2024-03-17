$(document).ready(function() {
    $('#search-form').on('submit', function(e) {
        e.preventDefault();
        const query = $('#search-input').val();

        // Show searching animation
        $('#search-gif').attr('src', 'https://cdn.dribbble.com/users/1514097/screenshots/3918356/search.gif').show();

        // Simulate searching delay (replace with your actual API call)
        setTimeout(function() {
            // Show results animation
            $('#search-gif').attr('src', 'https://cdn.dribbble.com/users/2367833/screenshots/7816190/media/b1aaf5c98510012b56422d1619dc62e8.gif');

            // Simulate display results delay (replace with your actual code to display results)
            setTimeout(function() {
                // Reset input field
                $('#search-input').val('');

                // Hide GIF
                $('#search-gif').hide();
            }, 3000); // Adjust time according to your animation duration
        }, 2000); // Adjust time according to your searching delay
    });

    // Show typing animation when user types
    $('#search-input').on('input', function() {
        $('#search-gif').attr('src', 'https://static.dribbble.com/users/2790075/screenshots/5557701/typing_ui_animation.gif').show();
        setTimeout(function() {
            $('#search-gif').hide();
        }, 500); // Adjust time according to your typing animation duration
    });
});

