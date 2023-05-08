const gallery = document.getElementById("gallery");
const gallerySelector = document.getElementById("gallery-selector");
let MARGIN_SIZE = 120;
const DIMENSION_SIZE = 20;
const SPEED = 2;
if(screen.width < 500){
    MARGIN_SIZE = 40
}else if(screen.width < 800){
    MARGIN_SIZE = 60
}else if(screen.width < 1000){
    MARGIN_SIZE = 80
}

ordenateGallery(gallery);

let currentSelectedPicture = getCentralImg(gallery.children);
let galleryCenter = getCentralImg(gallery.children);
let onGoingAnimation = false;


function ordenateGallery(gallery, middle){
    let marginSpan = 0;
    let dimesionsSpan = 0;
    let middlePosition = 0;
    if(middle === undefined){
        middlePosition = getCentralImg(gallery.children);
    }else{
        middlePosition = middle;
    }

    let middlePictureComputedStyle = getComputedStyle(gallery.children[middlePosition]);
    let positionOfCenterImage = parseInt((middlePictureComputedStyle.left).split(".")[0]) - 50;

    let zIndexFlag = 10;
    for(let i = 0; i < gallery.children.length; i++){

        gallery.children[i].id = 'gal.img.'+i;
        gallerySelector.children[i].id = 'gal.selector.'+i;

    
        if(i <= middlePosition){
            gallery.children[i].style.zIndex = zIndexFlag;
            gallery.children[i].style.width =  (gallery.children[i].offsetWidth + dimesionsSpan) +'px';
            gallery.children[i].style.height = (gallery.children[i].offsetHeight + dimesionsSpan) +'px';
            dimesionsSpan += DIMENSION_SIZE;
            zIndexFlag++;
        }else{
            dimesionsSpan -= DIMENSION_SIZE;
            zIndexFlag--;
            gallery.children[i].style.zIndex = zIndexFlag - 1;
            gallery.children[i].style.width =  (gallery.children[i].offsetWidth + dimesionsSpan - DIMENSION_SIZE) +'px';
            gallery.children[i].style.height = (gallery.children[i].offsetHeight + dimesionsSpan - DIMENSION_SIZE) +'px';
            
        }
        
        if(i === 0){
            marginSpan = positionOfCenterImage - (middlePosition * MARGIN_SIZE); 
        }else{
            marginSpan += MARGIN_SIZE;
        }


        gallery.children[i].style.left = marginSpan+'px';
    }
}

const galleryImages = document.getElementsByClassName('gallery-img');
const galleryImagesArray = [...galleryImages];
galleryImagesArray.forEach(function(element){
    element.addEventListener("click" , () => {
        if(!onGoingAnimation && element.id.split('.')[2] != currentSelectedPicture){
            onGoingAnimation = true;
            rot(parseInt(element.id.split('.')[2]));
        }
        
    })
});

const gallerySelectorImages = document.getElementsByClassName('gallery-selector-container');
const gallerySelectorImagesArray = [...gallerySelectorImages];
gallerySelectorImagesArray.forEach(function(element){
    element.addEventListener("click" , () => {
        if(!onGoingAnimation && element.id.split('.')[2] != currentSelectedPicture){
            onGoingAnimation = true;
            rot(parseInt(element.id.split('.')[2]));
        }
        
    })
});


function getCentralImg(arr){
    let middle = arr.length/2;
    if(middle % 0 !== 0){
        return Math.round(middle) -1;
    }else{
        return middle - 1;
    }
}


function rot(selectedPicture){
    const orden = [];
    if(currentSelectedPicture > selectedPicture){
        for(let i = currentSelectedPicture; i > selectedPicture ; i--){
            orden.push(i - 1);
        }
    }else{
        for(let i = currentSelectedPicture; i < selectedPicture; i++ ){
            orden.push(i + 1);
        }
    }
    rotateGallery(orden);
}

let id = null;
function rotateGallery(selectedPicture){
    if(currentSelectedPicture == selectedPicture[0] || selectedPicture[0] == undefined){
        return;
    }

    const initialValues = [];
    let dimensionCount = 0;
    let marginCount = 0;
    for(let i = 0; i < gallery.children.length; i++){
        initialValues.push({
            width : parseInt(gallery.children[i].style.width),
            height : parseInt(gallery.children[i].style.height),
            left : parseInt(gallery.children[i].style.left) 
        });
    }

    clearInterval(id);
    id = setInterval(frame, 0);
    function frame() {
      if (dimensionCount == MARGIN_SIZE) {


        currentSelectedPicture = selectedPicture[0];
        clearInterval(id);
        selectedPicture.shift();
        if(selectedPicture.length != 0){
            rotateGallery(selectedPicture);
        }else{
            onGoingAnimation = false;
        }
      } else {
        if(dimensionCount == SPEED){
            let zIndexFlag = 10;
            for(let i = 0; i < gallery.children.length; i++){
                if( i <= selectedPicture[0]){
                    gallery.children[i].style.zIndex = zIndexFlag;
                    zIndexFlag++;
                }else{
                    zIndexFlag--;
                    gallery.children[i].style.zIndex = zIndexFlag - 1;
                }
            }
        }
        for(let i = 0; i < gallery.children.length; i++){
            if(selectedPicture[0] < currentSelectedPicture){
                initialValues[i].left += SPEED;
            }else{
                initialValues[i].left -= SPEED;
            }
            
            gallery.children[i].style.left = initialValues[i].left + 'px';
           
            if(marginCount < DIMENSION_SIZE){
                //Left
                if(selectedPicture[0] < currentSelectedPicture){
                    if(i < selectedPicture[0] || i == selectedPicture[0]){
                        initialValues[i].width += SPEED;
                        initialValues[i].height += SPEED;
                    }else if(i  == selectedPicture[0]){
                        initialValues[i].width += SPEED;
                        initialValues[i].height += SPEED;
                    }else{
                        initialValues[i].width -= SPEED;
                        initialValues[i].height -= SPEED;
                    }
                }
                //Right
                else{
                    if(i <= currentSelectedPicture){
                        initialValues[i].width -= SPEED;
                        initialValues[i].height -= SPEED ;
                    }else{
                        initialValues[i].width += SPEED;
                        initialValues[i].height += SPEED;
                    }
                }

                gallery.children[i].style.width = initialValues[i].width + 'px';
                gallery.children[i].style.height = initialValues[i].height + 'px';
                
            }
        }
        marginCount += SPEED;
        dimensionCount += SPEED;
      }
    }
}