export default class HandGestureView {
  loop(fn) {
    //essa função requestAnimationFrame é nativa do browser, para rodar no máximo a 60FPS
    requestAnimationFrame(fn)
  }
  
  scrollPage(top) {
    scroll({
      top,
      behavior: "smooth"
    })
  }
}