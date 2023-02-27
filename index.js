const playserSettings={
    CLOSE_BTN_PLACEMENT:"right",
    playerPosition:"rightbottom",
    CLOSE_BTN_AREA:"inside" 
  }
  //main heading
  const mainHeading=document.createElement("h1");
  mainHeading.innerHTML="video player";
  //styling:
  mainHeading.style.display= "flex";
  mainHeading.style.justifyContent= "center";
  mainHeading.style.color="teal";
  document.body.appendChild(mainHeading);
  //main container
  const mainContainer=document.createElement("div");
  mainContainer.className="main";
  //styling:
    mainContainer.style.display="flex";
    mainContainer.style.justifyContent="center";
      
  document.body.appendChild(mainContainer) 
  //videoplayer container:
  const videoplayer=document.createElement("div");
  videoplayer.className="videoplayer";
  //styling:
  
  const videoContainer=document.createElement("div");
  videoContainer.className="video-container";
  videoContainer.id="sticky-bar";
  //styling:
  videoContainer.style.position="sticky";
  videoContainer.style.top="30px";
  mainContainer.appendChild(videoplayer);
  videoplayer.appendChild(videoContainer)
  
  
  //videoplayer:
  const video=document.createElement("video");
    video.id = "my-video";
    video.className="myvideo";
    video.poster="https://wallpapercave.com/wp/wp3305861.jpg"
    video.setAttribute("src","video.mp4");
    video.style.height="320px";
    video.style.width="420px";
    video.style.backgroundColor="black";
    video.setAttribute("controls", "controls");
    videoContainer.appendChild(video);
  
  //creation of playpause icon:
  const playbackAnimation=document.createElement("div");
  playbackAnimation.className="playback-animation";
  playbackAnimation.id="playback-animation";
  const playBackIcon=document.createElement("div");
  playBackIcon.className="playback-icons";
  const playPauseBtn=document.createElement("h1");
  playPauseBtn.className="closebtn"
  const playPauseIcon=`<i class="fa-solid fa-play" id="playPause"></i>`
  playPauseBtn.innerHTML=playPauseIcon;
  videoContainer.appendChild(playbackAnimation);
  playbackAnimation.appendChild(playBackIcon);
  playBackIcon.appendChild(playPauseBtn);
  
  //style of animation:
  playbackAnimation.style.pointerEvents="none";
  playbackAnimation.style.position= "absolute";
  playbackAnimation.style.top= "50%";
  playbackAnimation.style.left= "50%";
  playbackAnimation.style.marginLeft= "-35px";
  playbackAnimation.style.marginTop="-30px";
  playbackAnimation.style.width= "70px";
  playbackAnimation.style.height="70px";
  playbackAnimation.style.borderRadius= "70px";
  playbackAnimation.style.backgroundColor= "rgba(0, 0, 0, 0.6)";
  playbackAnimation.style.display= "flex";
  playbackAnimation.style.justifyContent= "center";
  playbackAnimation.style.alignItems="center";
  playbackAnimation.style.opacity= "0";
  playbackAnimation.style.zIndex= "2";
  playPauseBtn.style.color="white";
  
  //creation of brandingBar:
  const brandingBar=document.createElement("div");
  brandingBar.className="branding";
  videoContainer.appendChild(brandingBar);
  var brandBar=` <img class="btn" onclick="closeVideoPlayer()" src="close.png"/>
  <p class="brand">BrandName</p>`;
  brandingBar.innerHTML=brandBar;
  const brandName=document.querySelector(".brand");
  const closeBtn=document.querySelector(".btn")
  //style of brandbar
  brandingBar.style.position= "absolute";
  brandingBar.style.zIndex= "2";
  brandingBar.style.top="0%";
  brandingBar.style.right="1%";
  brandingBar.style.display= "flex";
  brandingBar.style.flexDirection= "row";
  brandName.style.color="teal";
  brandName.style.margin=" 6px 2px";
  closeBtn.style.width="30px";
  closeBtn.style.height="30px";
  
  //updatePlayButton function
   function updatePlayButton(){
      console.log("update")
      console.log(video.paused)
      if(video.paused){
        
        console.log(playPauseBtn);
        console.log("play");
        playPauseBtn.querySelector("#playPause").classList.replace("fa-play","fa-pause"); 
       }
      else{
        console.log(playPauseBtn);
        console.log(playPauseBtn.querySelector(".fa"));
        playPauseBtn.querySelector("#playPause").classList.replace("fa-pause","fa-play");
      }
    }
  //playPause
  // animatePlayback displays an animation when
  // the video is played or paused
  function animatePlayback(divRef) {
    console.log("hello")
    divRef.animate([
      {
        opacity: 1,
        transform: "scale(1)",
      },
      {
        opacity: 1,
        transform: "scale(1)",
      }], {
      duration: 1000,
    });
  }
  //position of videoplayer:
  function videoPlayerPos(){
    console.log(videoplayer)
    if(playserSettings.playerPosition==="leftBottom"){
      videoplayer.style.left="0%";
      videoplayer.style.bottom="0%";
      console.log("player poaition is left")
    }else{
      videoplayer.style.right="0%";
      videoplayer.style.bottom="0%";
      console.log("player position is right")
    }
    
  }
  videoPlayerPos()
  //onclick of closebutton
  function closeVideoPlayer(){
    videoplayer.remove();
    console.log("videoPlayer is close");
  
  }
  //placement of brandbar
  function getCloseBtnPos() {
   console.log(brandingBar)
     if (playserSettings.CLOSE_BTN_PLACEMENT === 'left' && playserSettings.CLOSE_BTN_AREA === 'inside') {
       brandingBar.style.top = '-1%';
       brandingBar.style.right = '69%';
     } 
   else if (playserSettings.CLOSE_BTN_PLACEMENT === 'left' && playserSettings.CLOSE_BTN_AREA === 'outside') {
    brandingBar.style.top = '-10%';
    brandingBar.style.right = '70%';
     }
   else if (playserSettings.CLOSE_BTN_PLACEMENT === 'right' &&playserSettings.CLOSE_BTN_AREA === 'inside') {
    brandingBar.style.top = '0';
    brandingBar.style.right = '0';
    brandingBar.style.flexDirection="row-reverse";
     } 
   else {
       // right and outside; defualt;
       brandingBar.style.top = '-10%';
       brandingBar.style.right = '-1%';
      brandingBar.style.flexDirection="row-reverse";
     }
  }
  getCloseBtnPos()
  
  //adding eventListner:
  video.addEventListener('click', () => {
      console.log("Event listener for playback anim called")
      animatePlayback(playbackAnimation)
    });
      
    video.addEventListener('play', () => {
      console.log("Event listener for play called")
      updatePlayButton()
    });
      
    video.addEventListener('pause', () => {
      console.log("Event listener for pause called")
      updatePlayButton();
    });
  