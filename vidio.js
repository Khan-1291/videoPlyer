const vidioContiner = [
    { video: 'Photo Gallery App.mp4', song: "Husn", singer: "Anueu Rague" },
    { video: 'watermarked_preview.mp4', song: "   Khan", singer: "Mardan" },
    { video: 'pro.mp4', song: "Devolped", singer: "Zohaib Khan ", }


]






document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo"); // Corrected "vidio" to "video"
    const playPauseButton = document.getElementById("playPause");
    const muteButton = document.getElementById("muteUnmute");
    const volumeButton = document.getElementById("volumeTrack");
    const TimeTrack = document.getElementById("timeTrack");
    const currentTime = document.getElementById("currentTime");
    const duration = document.getElementById("duration");
    const reset = document.getElementById("reset");
    const previuos = document.getElementById("pre");
    const next = document.getElementById("next");
    video.controls = false;
    let currentIndex = 0;

    function currentVideo() {
        currentVideo = vidioContiner[currentIndex];
        video.src = `${currentVideo.video}`

        const currentVideoInfo = vidioContiner[currentIndex];
        document.getElementById("vidioDetailes").innerText = `${currentVideoInfo.song} by ${currentVideoInfo.singer}`;
        video.load();
        video.play();


    }

    playPauseButton.addEventListener("click", function () {
        if (playPauseButton.innerText === "Play") {
            video.play();
            playPauseButton.innerText = "Pause";
        } else {
            video.pause(); // Added condition for "Pause"
            playPauseButton.innerText = "Play";
        }
    });
    // For Mute Unmute

    muteButton.addEventListener("click", function () {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? "Unmute" : "Mute";
    })
    //for volume

    volumeButton.addEventListener("click", function () {
        video.volume = volumeButton.value;

    })

    // for time track 
    video.addEventListener('loadedmetadata', () => {
        timeTrack.max = video.duration; // Set the max value to the video's duration
        duration.textContent = timeFormat(video.duration); // Set the total duration
    });

    video.addEventListener('timeupdate', () => {
        timeTrack.value = video.currentTime; // Update time track as video plays
        currentTime.textContent = timeFormat(video.currentTime); // Update current time display
    });

    timeTrack.addEventListener('input', () => {
        video.currentTime = timeTrack.value; // Set video currentTime when the user interacts with timeTrack
    });

    function timeFormat(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // for repeat
    reset.addEventListener("click", function () {
        video.loop = true;
        video.currentTime = 0;

    })
    previuos.addEventListener("click", function () {

    })


    next.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % vidioContiner.length;
        const currentVideoObj = vidioContiner[currentIndex]; // Get the current video object
        video.src = currentVideoObj.video;

        const currentVideoInfo = vidioContiner[currentIndex];
        document.getElementById("vidioDetailes").innerText = `${currentVideoInfo.song} by ${currentVideoInfo.singer}`;
        currentVideo();


    })
    previuos.addEventListener("click", function () {
        currentIndex = (currentIndex - 1) % vidioContiner.length;
        const currentVideoObj = vidioContiner[currentIndex]; // Get the current video object
        video.src = currentVideoObj.video;

        const currentVideoInfo = vidioContiner[currentIndex];
        document.getElementById("vidioDetailes").innerText = `${currentVideoInfo.song} by ${currentVideoInfo.singer}`;
        currentVideo();


    })
    currentVideo();
    //  video from card............................................................................................
    let two = document.querySelectorAll("conatiner div");
    document.getElementById("one1").addEventListener("click", function () {
        // Assuming `two` has a data attribute or a similar way to store the video source
        video.src = 'pro.mp4'; // Replace with the actual video source
        video.load();
        video.play(); // Call play() with parentheses
    });
    document.getElementById("one2").addEventListener("click", function () {
        // Assuming `two` has a data attribute or a similar way to store the video source
        video.src = '12.08.2024_07.44.19_REC.mp4'; // Replace with the actual video source
        video.load();
        video.play(); // Call play() with parentheses
    }); document.getElementById("one3").addEventListener("click", function () {
        // Assuming `two` has a data attribute or a similar way to store the video source
        video.src = 'clideo_editor_6aa886056a074bc894095c416df20743.mp4'; // Replace with the actual video source
        video.load();
        video.play(); // Call play() with parentheses
    });
    document.getElementById("one5").addEventListener("click", function () {
        // Assuming `two` has a data attribute or a similar way to store the video source
        video.src = '12.08.2024_07.44.19_REC.mp4'; // Replace with the actual video source
        video.load();
        video.play(); // Call play() with parentheses
    }); document.getElementById("one6").addEventListener("click", function () {
        // Assuming `two` has a data attribute or a similar way to store the video source
        video.src = 'clideo_editor_f060350f93ab442682ebd590a500f40d.mp4'; // Replace with the actual video source
        video.load();
        video.play(); // Call play() with parentheses
    });














});




// card   
function CreateVideo(video, name, details) {

    let html = `<div class="card">
    <span class="img"><video src="${video}" alt="">
    </span>
    
        <span>${name}</span>
        
        <p>${details}</p>
    
</div>`;

    document.querySelector(".conatiner").innerHTML += html;



}
CreateVideo('Photo Gallery App.mp4', "Project 1", "its a photo gallery app ")
CreateVideo('watermarked_preview.mp4', "Mardan View", "Map which point location ")
CreateVideo('pro.mp4', "Project 2", "pORTFOLIO WEBSITE")
CreateVideo('watermarked_preview.mp4', "PROJECT 4", "its a pop song whose singer is anue ")
CreateVideo('pro.mp4', "VIDIO TITLE", "DESCRIPTION")




















