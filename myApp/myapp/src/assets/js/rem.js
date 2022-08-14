if( document.documentElement.clientWidth>=750 ){
    document.documentElement.style.fontSize = '100px';
  }else{
    document.documentElement.style.fontSize = 100 * (document.documentElement.clientWidth / 750) + 'px';
  }
  setRem(document, window)
  function setRem(doc, win){
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if(clientWidth>=750){
              docEl.style.fontSize = '100px';
          }else{
              docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
          }
      };
  
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  }