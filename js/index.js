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

function shareToWhatsApp(imageURL) {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        window.open('whatsapp://send?text=https://mndpsi.github.io Latest photos to share: '+imageURL + " ")
    } else {
      window.open('https://web.whatsapp.com://send?text='+encodeURIComponent(imageURL));  
    }
}
