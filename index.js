function tableFuncion()
{
    var table = document.querySelector("#tarjet");
    var array1 = ['A','p','3','!',' ','2','U'];
    array1 = array1.sort(
        function()
        {
            return 0.5-Math.random();
        }
    );
    table.innerHTML = "";
    array1.forEach(
        function(index){
            var objTar = document.createElement("div");
            objTar.innerHTML = 
                '<div class="tarjet">'+ index +'</div>';
            table.appendChild(objTar);
        }
    );
}
function show()
{
    this.classList.add("show");
}

tableFuncion();
document.querySelectorAll(".tarjet").forEach(
    function(index)
    {
        index.addEventListener("click",show);
    }
);




