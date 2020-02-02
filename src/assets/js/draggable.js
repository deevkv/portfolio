export default {
  foo: function () {
    window.console.log('Hi')
    // body...
  }

  /*foo: function (event) {
    let windowHome = this.$refs.windowHome.$refs.link;
    let shiftX = event.clientX - windowHome.getBoundingClientRect().left;
    let shiftY = event.clientY - windowHome.getBoundingClientRect().top;

    windowHome.style.width = getComputedStyle(windowHome).width;

    windowHome.style.position = 'absolute';
    windowHome.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      windowHome.style.left = pageX - shiftX + 'px';
      windowHome.style.top = pageY - shiftY - 48 + 'px';
    }
  
    function mousemove(event) {
      moveAt(event.pageX, event.pageY);
    }

    function mouseup() {
      document.removeEventListener('mousemove', mousemove);
      windowHome.onmouseup = null;

    }

    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);

    windowHome.ondragstart = function() {
      return false;
    };
  }*/
}