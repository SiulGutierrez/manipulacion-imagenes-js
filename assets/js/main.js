const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let image = new Image();
let filename = '';
const downloadBtn = document.getElementById('download-btn');
const uploadfile = document.getElementById('upload-file');
const reversefilter = document.getElementById('revert-btn');
//Añadir filtros y efectos
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
        if (e.target.classList.contains('brightness-add')) {
            Caman('#canvas', image, function() {
                this.brightness(5).render();
            })
        } else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', image, function() {
                this.brightness(-5).render();
            })
        } else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', image, function() {
                this.contrast(5).render();
            })
        } else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', image, function() {
                this.contrast(-5).render();
            })
        } else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', image, function() {
                this.saturation(5).render();
            })
        } else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', image, function() {
                this.saturation(-5).render();
            })
        } else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', image, function() {
                this.vibrance(5).render();
            })
        } else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', image, function() {
                this.vibrance(-5).render();
            })
        } else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', image, function() {
                this.vintage().render();
            })
        } else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', image, function() {
                this.lomo().render();
            })
        } else if (e.target.classList.contains('clarity-add')) {
            Caman('#canvas', image, function() {
                this.clarity().render();
            })
        } else if (e.target.classList.contains('sincity-add')) {
            Caman('#canvas', image, function() {
                this.sinCity().render();
            })
        } else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', image, function() {
                this.crossProcess().render();
            })
        } else if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', image, function() {
                this.pinhole().render();
            })
        } else if (e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', image, function() {
                this.nostalgia().render();
            })
        } else if (e.target.classList.contains('hermajesty-add')) {
            Caman('#canvas', image, function() {
                this.herMajesty().render();
            })
        }
    }
})
//Remover filtros
reversefilter.addEventListener('click', (e) => {
    Caman('#canvas', image, function() {
        this.revert();
    })
})
//Subir archivo
uploadfile.addEventListener('change', (e) => {
    //Obtener archivo
    const file = document.getElementById('upload-file').files[0];
    //iniciar FileReader
    const reader = new FileReader();
    if (file) {
        //establecer archivo
        filename = file.name;
        //leer dato como url
        reader.readAsDataURL(file);
    }
    //añadir archivo al canvas
    reader.addEventListener('load', () => {
        //crear image
        image = new Image();
        //Establecer ruta
        image.src = reader.result;
        //cargar imagen canvas
        image.onload = function() {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, image.width, image.height);
            canvas.removeAttribute('data-caman-id');
        }
    }, false)
})
//Descargar imagen
downloadBtn.addEventListener('click', () => {
    //Obtener archivo extension
    const fileExtension = filename.slice(-4);
    //Iniciar nuevo archivo
    let newFileName;
    //checar el tipo de imagen
    if (fileExtension === ".jpg" || fileExtension === ".png") {
        //nuevo
        newFilename = filename.substring(0, filename.length - 4) + "-edited.jpg";
    }
    //llamada a descargar
    download(canvas, filename);
})
//funcion para descargar
function download(canvas, filename) {
    //iniciar evento
    let e;
    //link de descarga
    const link = document.createElement('a');
    //establecer apoyo
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    //evento Mouse
    e = new MouseEvent('click');
    //enviar evento
    link.dispatchEvent(e);
}