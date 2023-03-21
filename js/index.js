

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
        window.open('whatsapp://send?text=https://mndpsi.github.io Latest photos to share: '+imageURL);
    } else {
      window.open('https://web.whatsapp.com://send?text=https://mndpsi.github.io Latest photos to share: '+imageURL);  
    }
}


function loadImagesFrom(folder, name, alt) {

        let imageTemplate = `<div class="col">
        <div class="card shadow-sm">
          <img src="images/`+folder+`/`+name+`" alt="`+alt+`"> </img>
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-lg btn-outline-secondary" onclick="shareToWhatsApp('https://mndpsi.github.io/images/`+folder+`/`+name+`')"><img src="icons/whatsapp.png" alt="Share in whatsapp"></button>
             
                <button type="button" class="btn btn-lg btn-primary" onclick="download('images/`+folder+`/`+name+`', '`+name+`')" >Download</button>
              </div>
            </div>
          </div>
        </div>
      </div>`
 document.getElementById('images_section').insertAdjacentHTML('beforeend', imageTemplate);
}