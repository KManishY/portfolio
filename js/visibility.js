document.addEventListener("visibilitychange", function(){
    if(document.visibilityState == "visible")
    {
        document.title = "MANISH | WEB DEVELOPER";
        
    }
    else{
        document.title = "Comback to portfolio";
    }
})