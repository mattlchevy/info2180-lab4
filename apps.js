window.onload = function(){
    button = document.getElementById("hello")
    result = document.getElementById("result")
    var httpRequest



    button.addEventListener("click", function(e){
        e.preventDefault();

        httpRequest = new XMLHttpRequest();

        //GET
        
        var url = "superheroes.php";
        httpRequest.onload = function(){
           result.innerHTML = this.response
        }
        httpRequest.onreadystatechange = Hello
        httpRequest.open('GET', url);
        httpRequest.send();
    })
    
    function Hello(){
        if(httpRequest.readystate === XMLHttpRequest.DONE){
          if (httpRequest.status === 200){
              var response = httpRequest.responseText
          }else{
              alert('There is an error');
          }
        }
    }


    
};

