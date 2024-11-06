document.getElementById('loaderbtn').addEventListener('click',
    function() {
   const loader = document.getElementById('loader');
   loader.style.display = 'block'; // Show the loader
   this.disabled = true; // Disable the button

   // Simulate a loading process with setTimeout
   setTimeout(() => {
       loader.style.display = 'none'; // Hide the loader
       this.disabled = false; // Enable the button
   }, 3000); // Change 3000 to any time in milliseconds
});
