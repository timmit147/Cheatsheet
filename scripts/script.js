const block = document.querySelector('.include').innerHTML;

console.log(block);

fetch(`blocks/sidebar/`+block+`.html`)
    .then(response=> response.text())
    .then(text=>  document.body.innerHTML = text);

var file = location.pathname.split( `blocks/sidebar/`+block+`.css` ).pop();
var link = document.createElement( "link" );
link.href = file.substr( 0, file.lastIndexOf( "." ) ) + "blocks/sidebar/sidebar.css";
link.type = "text/css";
link.rel = "stylesheet";
link.media = "screen,print";
document.getElementsByTagName( "head" )[0].appendChild( link );



