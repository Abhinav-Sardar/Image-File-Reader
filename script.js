const file = document.getElementById('file') ; 
const img = document.getElementById('img') ; 

file.onchange = () =>{
    let files = file.files[0] ; 
    let fileReader  = new FileReader()  ; 
    fileReader.onload = () => {
        img.src = fileReader.result ; 
    }
    fileReader.readAsDataURL(files) ; 
}