var pages = ["home", "about", "view"];
var num = 0;
var responseDiv = document.body.querySelector(".response");
var list = [];

function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(butt);

    }
}

function createWrapper() {
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);

}

function navigate(pg) {
    if (pg === "home") {
        homePage()
    } else if (pg === "about") {
        aboutPage()
    } else {
        viewPage()
    }
}

function homePage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Home";
    wrapper.appendChild(header);

}

function aboutPage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "About Me";
    var name = document.createElement("h3");
    name.innerHTML = "Jowi";
    wrapper.appendChild(header);
    wrapper.appendChild(name);

}

function viewPage() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "View Notes";
    var single_note=document.createElement("input");
    single_note.classList.add("one_note");
    single_note.placeholder="Text";
    var importance = document.createElement("input");
    importance.classList.add("import");
    importance.placeholder="Importance";
    var note=document.createElement("button");
    note.classList.add("note")
    note.innerHTML="enter"
    var note_list=document.createElement("div");
    note_list.classList.add("note_list");
    note.addEventListener("click", function (){
        var note = document.body.querySelector(".one_note").value;
        var importance = document.body.querySelector(".import").value;
        if (note.length === 1){
            note_list.innerHTML="that note is too short to save"
        }else if(isNaN(parseInt(importance))){
            note_list.innerHTML="importance must be listed as a number"
        }else{
            list.push(`${importance} ${note}`);
            renderList()

        }
        function renderList() {
            note_list.innerHTML=""
            for (var i=0; i<list.length; i++){
                var note=document.createElement("div");
                note.innerHTML=list[i];
                note_list.appendChild(note);
            }
        }
    })

    wrapper.appendChild(header);
    wrapper.appendChild(single_note);
    wrapper.appendChild(importance);
    wrapper.appendChild(note);
    wrapper.appendChild(note_list);

}

document.body.querySelector(".butt").addEventListener("click", function () {
    var textValue = document.body.querySelector(".input").value;
    if (textValue === "coolStudent123") {
        responseDiv.innerHTML = "";
        createNav();
        createWrapper();
        navigate("home");
        document.body.querySelector(".input").style.display = "none";
        document.body.querySelector(".butt").style.display = "none";

    } else {
        responseDiv.innerHTML = "wrong user"
    }


})

    navigate("...")





