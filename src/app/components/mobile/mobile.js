console.log('✅ mobile.js loaded!');

function route()
{
    const bars2 = document.querySelector(".bars2");

    const bars = document.querySelector(".fa-bars");

    const x = document.querySelector(".fa-x");

    const body = document.body;

    if(bars2.style.display === "flex")
    {
        bars2.style.display = "none";
        x.style.display = "none";
        bars.style.display = "block";
        body.style.overflow = "auto";
    }






}


function exit()
{
    const bars2 = document.querySelector(".bars2");

    const bars = document.querySelector(".fa-bars");

    const x = document.querySelector(".fa-x");

    const body = document.body;

    if(bars2.style.display === "none" )
    {
        bars2.style.display = "flex";
        bars.style.display = "none";
        x.style.display = "block";

        body.style.overflow = "hidden";
    }
    else
    {
        bars2.style.display = "none";
        bars.style.display = "block";
        x.style.display = "none";

        body.style.overflow = "auto";

    }


}

