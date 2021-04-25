export default function ativarLupa() {

    const imgs = document.querySelectorAll('.js-imagensOfertas')

    imgs.forEach( img => {
        img.addEventListener('mousemove' , mouse => {
            const larguraImg = img.offsetWidth
            const alturaImg = img.offsetHeight
        
            let posicaoMouseX = mouse.offsetX
            let posicaoMouseY = mouse.offsetY
        
            let backgroundPositionX = (posicaoMouseX / larguraImg * 100)
            let backgroundPositionY = (posicaoMouseY / alturaImg * 100)
        
            img.style.backgroundPosition = `${backgroundPositionX}% ${backgroundPositionY}%`        
        })
        img.addEventListener('mouseleave' , () => img.style.backgroundPosition = 'center')
    })    
}
