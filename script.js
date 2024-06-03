document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("dark-mode-toggle");

    // Check for previously saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        // Save the dark mode preference to localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.removeItem("darkMode");
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const vinyl = document.getElementById('vinyl');
    const playlistItems = document.querySelectorAll('.playlist-item');

    audio.addEventListener('play', function() {
        vinyl.style.animationPlayState = 'running';
        vinyl.style.animationDuration = '3s';
    });

    audio.addEventListener('pause', function() {
        vinyl.style.animationPlayState = 'paused';
    });

    audio.addEventListener('ended', function() {
        vinyl.style.animationPlayState = 'paused';
    });

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const source = item.getAttribute('data-src');
            audio.src = source;
            audio.play();
        });
    });
});
