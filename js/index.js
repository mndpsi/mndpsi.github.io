function download(file, text) {
             
    //creating an invisible element
    var element = document.createElement('a');
    element.setAttribute('href',file);
    element.setAttribute('download', file);
 
    // Above code is equivalent to
    // <a href="path of file" download="file name">
 
    document.body.appendChild(element);
 
    //onClick property
    element.click();
 
    document.body.removeChild(element);
}