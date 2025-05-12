document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ Special Offer Popup
    setTimeout(function () {
        let popup = document.createElement("div");
        popup.id = "customPopup";
        popup.innerHTML = `
            <div class="popup-content">
                <h2>Special Offer!</h2>
                <p>Enjoy exclusive discounts on fine dining and luxury hotel stays. Don't miss out!</p>
                <button id="closePopup">OK</button>
            </div>
        `;
        document.body.appendChild(popup);
        document.getElementById("closePopup").addEventListener("click", function () {
            popup.style.display = "none";
        });
    }, 2000); // Show popup after 2 seconds
    // 3️⃣ Dark Mode Toggle
    let darkModeButton = document.createElement("button");
    darkModeButton.innerText = "🌙 Dark Mode";
    darkModeButton.id = "darkModeToggle";
    darkModeButton.style.position = "fixed";
    darkModeButton.style.top = "20px";
    darkModeButton.style.right = "20px";
    darkModeButton.style.padding = "10px";
    darkModeButton.style.border = "none";
    darkModeButton.style.background = "#333";
    darkModeButton.style.color = "white";
    darkModeButton.style.cursor = "pointer";
    darkModeButton.style.borderRadius = "5px";
    document.body.appendChild(darkModeButton);
    darkModeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            document.body.style.background = "#222";
            document.body.style.color = "";
            darkModeButton.innerText = "☀︎ Light Mode";
            darkModeButton.style.background = "#FFD700"; // Gold
            darkModeButton.style.color = "#000";
        } else {
            document.body.style.background = "";
            document.body.style.color = "";
            darkModeButton.innerText = "🌙 Dark Mode";
            darkModeButton.style.background = "#333";
            darkModeButton.style.color = "white";
        }
    });
    // 4️⃣ Floating Back-to-Top Button
    let backToTop = document.createElement("button");
    backToTop.innerText = "⬆️";
    backToTop.id = "backToTop";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px";
    backToTop.style.border = "none";
    backToTop.style.background = "#FF4500"; // Orange-Red
    backToTop.style.color = "white";
    backToTop.style.cursor = "pointer";
    backToTop.style.borderRadius = "50%";
    backToTop.style.fontSize = "20px";
    backToTop.style.display = "none"; // Hidden by default
    document.body.appendChild(backToTop);
    // Show button when user scrolls down
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });
    // Scroll to top when clicked
    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


