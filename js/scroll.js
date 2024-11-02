document.addEventListener("DOMContentLoaded", function () {
    const bioSection = document.getElementById("bio-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    bioSection.classList.add("scroll-active");
                } else {
                    bioSection.classList.remove("scroll-active"); // Optional: Remove to play animation only once
                }
            });
        },
        {
            threshold: 0.5, // Triggers when 50% of the section is visible
        }
    );

    observer.observe(bioSection);
});
