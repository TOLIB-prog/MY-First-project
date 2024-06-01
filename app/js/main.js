const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");

function showPopup() {
  popupOverlay.style.display = "block";
}
function hidePopup() {
  popupOverlay.style.display = "none";
}

popupOverlay.addEventListner("click", hidePopup);
popup.addEventListner("click,(event) = &gt; event.stopPropagation()");
