let highScoreBtn = document.getElementById("highScore");
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("close");

let currentYear = document.getElementById("currentYear");

highScoreBtn.addEventListener("mouseenter", enableBtn);
highScoreBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

currentYear.innerHTML = new Date().getFullYear();

function showModal()
{
    $.ajax({
        url: "highscore.php",
        method: "GET",
        dataType: "html",
        success: function (data) {
            $("#row").html(data);
        }
    });

    modal.style.display = "block";
    highScoreBtn.disabled = true;
}

function enableBtn()
{
    highScoreBtn.disabled = false;
}

function closeModal()
{
    modal.style.display = "none";
    highScoreBtn.disabled = false;
}