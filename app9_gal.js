const output = document.querySelector('.output')
const images = ['audrey.jpg','muzzy.jpg','mishuk.jpg']

// for(let x=0;x<4;x++){
//     const el = document.createElement('div')
//     output.append(el)
//     cGallery(el)
// }

const eles = document.querySelectorAll('.gal')
eles.forEach(el => {
    cGallery(el)
})

function cGallery(parentEle){
    let curIndex = 0;
    const gallery = document.createElement('div');
    const curImage = document.createElement('img')
    curImage.setAttribute('src','audrey.jpg')
    const btn1 = document.createElement('button')
    btn1.textContent = 'Prev'
    const btn2 = document.createElement('button')    
    btn2.textContent = 'Next'

    parentEle.append(gallery)
    gallery.append(curImage)
    gallery.append(btn1)
    gallery.append(btn2)

    btn1.addEventListener('click',()=>{
        curIndex--;
        if(curIndex<0){
            curIndex = images.length-1            
        }
        console.log(images[curIndex])
        curImage.src = images[curIndex]
    })
     
    btn2.addEventListener('click',()=>{
        curIndex++;
        if(curIndex>images.length-1){
            curIndex = 0            
        }
        console.log(images[curIndex])
        curImage.src = images[curIndex]
    })
}