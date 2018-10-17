const inputs = document.querySelectorAll('.controls input');
    function handleUpdate() {
     if (this.classList.contains('blur')) {
        document.documentElement.style.setProperty('--blur', (this.value*2) + 'px');
     }
     else if (this.classList.contains('hue')){
        document.documentElement.style.setProperty('--hue', (this.value*36) + 'deg');
     }
     else{
        document.documentElement.style.setProperty('--base', this.value);

     }
    }
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));