window.onload = function(){
    var form = document.forms[0];
    var result = document.getElementById("result");
    form.onsubmit = processform;
    function processform(){
        var d1 = parseInt(document.forms[0].depth1.value);
        var d2 = parseInt(document.forms[0].depth2.value);
        var d3 = parseInt(document.forms[0].depth3.vlaue);
        var d4 = parseInt(document.forms[0].depth4.value);

        var xs = [d1, d2, d3, d4];
        console.log(xs[3]);
        function checkorder(xs){
            for(var i = 0; i< xs.length; i++){
                if(xs[i+1] > xs[i]){
                    return "Fish Rising";
                }
                else if(xs[i+1] < xs[i]){
                    return "Fish Diving"
                }else if(xs[i+1] == xs[i]){
                    return "Constant Depth";
                }
                else{
                    return "No Fish";
                }
            }
        }
    
        result.innerText = checkorder(xs);

        return false;
    }
}
