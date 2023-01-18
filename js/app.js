function edit_about_me(){
    document.getElementById("button-edit-about").style.display="block";
    let text = document.getElementById("about-text").innerText;
    console.log(text)
}
function new_text(value){
    document.getElementById("about-text").innerText=value;

}

document.addEventListener('DOMContentLoaded', function() {
    let textarea = document.getElementById('button-edit-about');
    if (textarea) {
        textarea.addEventListener('keyup', (e) => {
            if (e.code === "Enter") {
                console.log("Enter was press");
                let button = document.getElementById('button-edit-about');
                if (button) {
                    button.style.display = "none";
                }
            }
        });
    }
}, false);


function showFile(input){
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(){
        document.getElementById('about-text').innerText=reader.result;
    };
    reader.onerror = function(){
        console.log(reader.error);
    }
    
}