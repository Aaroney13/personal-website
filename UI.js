//click listeners for proj buttons
const projButts = document.getElementById("projects-buttons").getElementsByTagName("button");
const projs = document.getElementById("projects-content").getElementsByTagName("div");
const pdfbutts = document.getElementsByClassName("PDF-button");
const pdfs = document.getElementsByClassName("PDF-type");
let activeProj = projs[0];
var sample = document.getElementById("background");
var backstyle = sample.style;

for(let i = 0; i < projButts.length; i++) {
    projButts[i].addEventListener("click", (e) => {
        var sample = document.getElementById("background");
        const currProj = e.target;
        //do nothing if clicking the same button
        if(activeProj.id === currProj.id) {
            return;
        }
        if (projs[i].id === "Rokoske"){
 // using VAR
            sample.setAttribute('style', 'background-image: url(images/previewSmall.jpg)');
        }
        else {
            sample.setAttribute('style', backstyle);
        }
        for(let i = 0; i < projs.length; i++) {
            if(projs[i].id === currProj.id) {
                activeProj.style.display = "none";
                e.target.classList.add("projButtonActive");
                e.target.style.marginLeft = "0";
                e.target.addEventListener("mouseleave", (e) => {
                    e.target.style.marginLeft = null;
                });
                projs[i].style.display = "inline";
                document.getElementById(activeProj.id).classList.remove("projButtonActive");
                activeProj = projs[i];
                break;
            }
        }
    });
}

for(let i = 0; i < pdfbutts.length; i++) {
    pdfs[i].style.display = "none"
    pdfbutts[i].addEventListener("click", (e) => {
        const butt = e.target;

        for(let i = 0; i < pdfs.length; i++)
            if(pdfs[i].id === butt.id) {
                if(pdfs[i].style.display === "none"){
                    pdfs[i].style.display = "inline";
                    butt.innerHTML = "close";
                }
                else {
                    pdfs[i].style.display = "none";
                    butt.innerHTML = "open";
                }
                break;
            }
    });
}
