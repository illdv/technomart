var link=document.querySelector(".btn-contacts"),popup=document.querySelector(".feedback"),close=popup.querySelector(".feedback-close"),mapOpen=document.querySelector(".js-map"),mapPopup=document.querySelector(".map"),mapClose=mapPopup.querySelector(".map-close"),overlay=document.querySelector(".modal-overlay");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("show-block"),overlay.classList.add("modal-overlay-active")}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("show-block"),overlay.classList.remove("modal-overlay-active")}),overlay.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("show-block"),mapPopup.classList.remove("show-block"),overlay.classList.remove("modal-overlay-active")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("show-block")&&(popup.classList.remove("show-block"),overlay.classList.remove("modal-overlay-active"))}),mapOpen.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("show-block"),overlay.classList.add("modal-overlay-active")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("show-block"),overlay.classList.remove("modal-overlay-active")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("show-block")&&(mapPopup.classList.remove("show-block"),overlay.classList.remove("modal-overlay-active"))});var serviceLinks=document.querySelectorAll(".service-list a"),serviceBlocks=document.querySelectorAll(".service-block"),j,h,k;for(i=0;i<serviceLinks.length;++i)serviceLinks[i].addEventListener("click",function(e){for(e.preventDefault(e),j=0;j<serviceLinks.length;++j)serviceLinks[j].classList.remove("service-list-active");for(h=0;h<serviceLinks.length;++h)if(serviceLinks[h]==this){for(serviceLinks[h].classList.add("service-list-active"),k=0;k<serviceBlocks.length;++k)serviceBlocks[k].classList.remove("service-details-active");serviceBlocks[h].classList.add("service-details-active")}});