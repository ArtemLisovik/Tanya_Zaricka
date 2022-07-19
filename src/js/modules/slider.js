export default function slider() {
    if(document.querySelector('.slider')) {
        let slideIndex = 0

    const slider = document.querySelector('.slider'),
         wrapper = slider.querySelector('.slider__wrapper'),
         arrowLeft = wrapper.querySelectorAll('.slider__arrow')[0],
         arrowRight = wrapper.querySelectorAll('.slider__arrow')[1],
         slides = wrapper.querySelectorAll('.slider__photo')
    

   function showSlides(index) {

        if(index > slides.length - 1) {
            slideIndex = 0
        }
        if(index < 0) {
            slideIndex = slides.length - 1
        }

        slides.forEach(slide => {
            slide.classList.add('hide')
            slide.classList.remove('show', 'fade')
        })
        slides[slideIndex].classList.remove('hide')
        slides[slideIndex].classList.add('show', 'fade')
   }

   arrowLeft.addEventListener('click', () => showSlides(++slideIndex))
   arrowRight.addEventListener('click', () => showSlides(--slideIndex))

   showSlides(slideIndex)
    }
}   
