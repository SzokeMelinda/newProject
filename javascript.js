document.getElementById("theme_change").onclick = function () {
    if (document.body.style.backgroundColor === "" || document.body.style.backgroundColor === "rgb(0, 0, 0)") {
        document.body.style.backgroundColor = "#f5deb3";
        document.getElementsByTagName("a")[0].style.color = "#000";
        document.getElementsByTagName("a")[0].style.borderColor = "#000";
        document.getElementById("theme_change").innerText = "Light Theme";
    } else if (document.body.style.backgroundColor === "rgb(245, 222, 179)") {
        document.body.style.backgroundColor = "#000";
        document.getElementsByTagName("a")[0].style.color = "#f5deb3";
        document.getElementsByTagName("a")[0].style.borderColor = "#f5deb3";
        document.getElementById("theme_change").innerText = "Dark Theme";
    
    }
    }