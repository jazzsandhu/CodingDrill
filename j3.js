window.onload = function(){
    var form = document.forms[0];
    var result = document.getElementById("msg");
    form.onsubmit = processform;
    function processform(){
        var d1 = parseInt(document.getElementById('htp').value);
        if(d1 < 25){
            for(var i= 1; i<=d1; i++){
                //result.innerText += "*X*";
            }
            result.innerText  += ("*".repeat(d1) + "x".repeat(d1) + "*".repeat(d1) +"\n").repeat(d1);
            result.innerText += ("\xa0\xa0".repeat(d1) + "x".repeat(d1) + "x".repeat(d1) + "\n").repeat(d1);
            result.innerText += ("*".repeat(d1) + "\xa0\xa0".repeat(d1) + "*".repeat(d1)+ "\n").repeat(d1);
        }else{
            result.innerText = false;
        }
        return false;
    }
}
