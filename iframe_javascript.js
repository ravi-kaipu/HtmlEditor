function add_css_code(){
    if(!csscodebase.value)
        return
    var csscode = csscodebase.value
    var pat = /body\s*{[^}]*}/
    var result = csscode.replace(pat, "")
    var s = document.createElement("style")
    s.innerHTML = result;
    document.body.appendChild(s)
    window.parent.action_printer("New css code has been added to head", "action")
}

function add_code(){
    var selected_item = window.parent.selected_item
    if (!codebase.value)
        return
    var htmlcode = codebase.value;
    var patt1 = /position\s*:\s*fixed/g;
    var result1 = htmlcode.replace(patt1, "position:absolute");

    var pat = /body\s*{[^}]*}/
    result = result1.replace(pat, "")
    var fakediv = document.createElement("div")
    fakediv.className = "newcode selectableitem has-properties"
    fakediv.style.display = "inline-block"
    fakediv.style.position = "relative"
    fakediv.setAttribute("id", "fakediv"+window.parent.id_counter++)
    window.parent.save_element(fakediv)
    fakediv.innerHTML = result;
    if (selected_item && selected_item.className.search("add-elements")>0){
        console.log("Adding to ", selected_item)
        selected_item.appendChild(fakediv)
    }
    else{
        console.log("Adding to canvas")
        document.body.appendChild(fakediv)
    }
    window.parent.find_hyperlinks()
    window.parent.action_printer("new code added to #"+fakediv.id, "action")
}

window.onscroll = function(){
    document.body.style.height = document.body.scrollHeight + "px";
    }