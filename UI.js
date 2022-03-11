//click listeners for proj buttons
const projButts = document.getElementById("projects-buttons").getElementsByTagName("button");
const projs = document.getElementById("projects-content").getElementsByTagName("div");
//discard declared vars after code block
// {
//     const butts = document.getElementById("projects-buttons").getElementsByTagName("button");
//     const len = butts.length > projs.length ? butts.length : projs.length;

//     for(let i = 0; i < len; i++)
//         projButts[i] = [butts[i], projs[i]];        
// }
let activeProj = projs[0];

for(let i = 0; i < projButts.length; i++) {
    projButts[i].addEventListener("click", (e) => {
        const currProj = e.target;

        //do nothing if clicking the same butt
        if(activeProj.id === currProj.id) {
            console.log("deez nuts");
            return;
        }
        for(let i = 0; i < projs.length; i++)
            if(projs[i].id === currProj.id) {
                activeProj.style.display = "none";
                projs[i].style.display = "inline";
                activeProj = projs[i];
                break;
            }
        
        console.log(this, e);
    });
}