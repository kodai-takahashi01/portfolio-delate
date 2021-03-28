$('.philo').waypoint({
  handler(direction) {
    if (direction === `down`) {
      $(this.element).addClass(`zoomer`);
    }
  },
  offset:`80%`
});

$('.leader').waypoint({
  handler(direction) {
    if (direction === `down`) {
      $(this.element).addClass(`zoomer`);
    }
  },
  offset:`80%`
});

$('.cycle').waypoint({
  handler(direction) {
    if (direction === `down`) {
      $(this.element).addClass(`zoomer`);
    }
  },
  offset:`80%`
});

// ナビメニュー
$(`.scroll`).waypoint({
  handler(direction){
    if(direction===`down`){
      $(`.navbar`).addClass(`nav-color`);
    }
    
  },
  offset:`100%`
  
});

$(`.scroll`).waypoint({
  handler(direction){
    if(direction===`up`){
      $(`.navbar`).removeClass(`nav-color`);
    }
    
  },
  offset:`100%`
})