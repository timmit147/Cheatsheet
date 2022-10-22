function include(block){
    fetch(`blocks/sidebar/`+block+`.html`)
        .then(response=> response.text())
        .then(text=>  document.write(text));
}


