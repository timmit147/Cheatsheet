function include(block){
    fetch(`blocks/sidebar/`+block+`.html`)
        .then(response=> response.text())
        .then(text=>  document.body.innerHTML = text);

    var file = location.pathname.split( "blocks/sidebar/sidebar.css" ).pop();
    console.log("test");
    
    var link = document.createElement( "link" );
    link.href = file.substr( 0, file.lastIndexOf( "." ) ) + "blocks/sidebar/sidebar.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    
    document.getElementsByTagName( "head" )[0].appendChild( link );
}


