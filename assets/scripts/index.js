let highScoreBtn = document.getElementById("highScore");
let modal = document.getElementById("myModal");
let closeBtn = document.getElementById("close");

let currentYear = document.getElementById("currentYear");

// Pagination
let pageNum = 0; //  pageNum 0 is 1st page
let numRows;
let pageNeed;
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

highScoreBtn.addEventListener("mouseenter", enableBtn);
highScoreBtn.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);

currentYear.innerHTML = new Date().getFullYear();   

function goPrev()
{
    pageNum--;

    if(pageNum <= 0)
    {
        pageNum = 0;
    }

    showModal();
}

function goNext()
{
    pageNum++;
    
    if(pageNum >= pageNeed)
    {
        pageNum = pageNeed;

    }

    showModal();
}

function showModal()
{
    // Get number of rows in database
    $.ajax({
        async: false,
        url: "highscore.php",
        method: "GET",
        dataType: "html",
        success: function (data) {
            numRows = data;
        }
    });

    pageNeed = Math.ceil(numRows / 10) - 1;

    if(pageNum == 0)
    {
        prevBtn.style.display = 'none';
    }
    else 
    {
        prevBtn.style.display = 'inline-block';    
    }

    if(pageNum == pageNeed)
    {
        nextBtn.style.display = 'none';
    }
    else
    {
        nextBtn.style.display = 'inline-block';
    }

    // Grab data from database
    $.ajax({
        url: "highscore.php",
        method: "POST",
        data:{"pageNum": pageNum},
        dataType: "html",
        success: function (data) {
            $("#row").html(data);
        }
    });

    // Show highscore
    modal.style.display = "block";
    // Disable button
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
    pageNum = 0;
}