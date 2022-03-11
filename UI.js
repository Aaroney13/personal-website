function openProj(projName) {
    let i;
    var x = document.getElementById('projects-content').children;

    for (i = 0; i < x.length; i++) 
        x[i].style.display = "none";
    
    document.getElementById(projName).style.display = "inline";
}