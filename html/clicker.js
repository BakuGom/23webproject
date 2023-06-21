var score=0;
function add(){
    score = score +1;
    update()
}
function update(){
    document.querySelector("#countNum").value=score;
}