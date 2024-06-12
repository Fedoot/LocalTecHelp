function iframeResponsive(iFrame) {
  iFrame.style.width = "100%";
  iFrame.style.height = iFrame.contentWindow.document.body.scrollHeight + "px";
}

window.addEventListener("DOMContentLoaded", function () {
  var iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframeResponsive(iframe);
    iframe.addEventListener("load", () => iframeResponsive(iframe));
  });
});
