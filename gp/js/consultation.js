 // Select the video element
 const video = document.getElementById('video');

 // Access the camera and stream video
 navigator.mediaDevices.getUserMedia({ video: true })
     .then(stream => {
         video.srcObject = stream;
     })
     .catch(error => {
         console.error('Error accessing camera:', error);
     });