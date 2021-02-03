const input = document.getElementById('campo');
const princing = document.getElementById('pricing-total');
const viewsTotal = document.getElementById('pageviews');

input.addEventListener('input' , function() {
  if(this.value > 0 && this.value <= 10000){
    viewsTotal.innerHTML = '10K PAGEVIEWS';
    princing.innerHTML = '$ 8.00'
  }
  else if (this.value > 10000 && this.value <= 50000){
    viewsTotal.innerHTML = '50K PAGEVIEWS';
    princing.innerHTML = '$ 12.00'
    
  }
  else if (this.value > 50000 && this.value <= 100000){
    viewsTotal.innerHTML = '100K PAGEVIEWS';
    princing.innerHTML = '$ 16.00'
    
  }
  else if (this.value > 100000 && this.value <= 500000){
    viewsTotal.innerHTML = '500K PAGEVIEWS';
    princing.innerHTML = '$ 24.00'
    
  }
  else if (this.value > 500000 && this.value <= 1000000){
    viewsTotal.innerHTML = '1KK PAGEVIEWS';
    princing.innerHTML = '$ 36.00'
    
  }
})


