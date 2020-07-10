function changeTitle() {
    var check=document.getElementById("checkBox");
    if (check.checked == true){
    document.getElementById('first').innerHTML = "$199.99";
    document.getElementById('second').innerHTML = "$249.99";
    document.getElementById('third').innerHTML = "$399.99";
    }
    else
    {
        document.getElementById('first').innerHTML = "$19.99";
        document.getElementById('second').innerHTML = "$24.99";
        document.getElementById('third').innerHTML = "$39.99";
    }
}