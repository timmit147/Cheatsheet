function include(){
  const blocks = document.querySelectorAll(".include");

  function createElementFromHTML(htmlString) {
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();
        return div.firstChild;
    }

  blocks.forEach((block) => {
      blockName = block.innerHTML;
      block = block;
      fetch(`blocks/`+blockName+`/block.html`)
      .then(response=> response.text())
      .then(text=> block.parentNode.replaceChild(createElementFromHTML(text), block)
      );



    var file = location.pathname.split( `blocks/`+blockName+`/style.css` ).pop();
    var link = document.createElement( "link" );
    link.href = file.substr( 0, file.lastIndexOf( "." ) ) + `blocks/`+blockName+`/style.css`;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName( "head" )[0].appendChild( link );

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `blocks/`+blockName+`/script.js`;    
    document.head.appendChild(script);
  });
}


include();


document.querySelector('button').onclick = function() {
  alert("button was clicked");
}