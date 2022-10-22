function includeFile(){
    fetch('blocks/sidebar/sidebar.html')
    .then(response=> response.text())
    .then(text=> document.querySelector('.sidebar').innerHTML = text);

    var file = location.pathname.split( "blocks/sidebar/sidebar.css" ).pop();

    var link = document.createElement( "link" );
    link.href = file.substr( 0, file.lastIndexOf( "." ) ) + "blocks/sidebar/sidebar.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";

    document.getElementsByTagName( "head" )[0].appendChild( link );
}

includeFile();