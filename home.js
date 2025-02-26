

const initSlider = () => {
    const slideButtons = document.querySelectorAll(".slide-button");
    const imageList = document.querySelector(".image-list");
    const galleryWrap = document.querySelector(".gallary-Wrap");


    const scrollbarThumb = document.querySelector(".scrollbar-thumb");
    const scrollbarTrack = document.querySelector(".scrollbar-track");


    const updateScrollbar = () => {
      const scrollableWidth = imageList.scrollWidth - imageList.clientWidth;
      const scrollProgress = imageList.scrollLeft / scrollableWidth;
      const maxThumbMovement = scrollbarTrack.clientWidth - scrollbarThumb.clientWidth;
      const thumbLeft = scrollProgress * maxThumbMovement;
      scrollbarThumb.style.left = thumbLeft + "px";
    };
  
    imageList.addEventListener("scroll", updateScrollbar);
  
    const scrollImages = (direction) => {
      const scrollAmount = galleryWrap.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };
  
    slideButtons.forEach(button => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        scrollImages(direction);
      });
    });
  
    let isDragging = false;
    let startX;
    let startScrollLeft;
  
    scrollbarThumb.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = imageList.scrollLeft;
      scrollbarThumb.classList.add("dragging"); 
      e.preventDefault();
    });
  
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const scrollableWidth = imageList.scrollWidth - imageList.clientWidth;
      const maxThumbMovement = scrollbarTrack.clientWidth - scrollbarThumb.clientWidth;
      const scrollRatio = scrollableWidth / maxThumbMovement;
      imageList.scrollLeft = startScrollLeft + deltaX * scrollRatio;
    });
  
    document.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        scrollbarThumb.classList.remove("dragging");
      }
    });
  
    const goToSlide = (scrollAmount) => {
      imageList.scrollTo({ left: scrollAmount, behavior: "smooth" });
      setTimeout(updateScrollbar, 300);
    };
  
    updateScrollbar();
  
    window.goToSlide = goToSlide;
  };
  
  window.addEventListener("load", initSlider);

