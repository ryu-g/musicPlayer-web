window.onload = function(){
  const songs = document.getElementsByClassName('songData')
  let buttons = document.getElementsByClassName('button')
  let playing = false
  let songName = document.getElementById('songName')
  let songNames = [
    "GlayWorld",
    "Agorra",
    "metallic lustre cold remix",
    "eirini",
    "@0314 -nil history-",
    "akirame",
    "hituyouaku",
    "Silver Cluster",
    "inirie",
    "Emporia",
    "SilverWorld -third winter remaster-"
    ]
  let bgColors = [
    "#5B5B66",
    "#99826B",
    "#757575",
    "#99996B",
    "#6B9999",
    "#193E63",
    "#753B3B",
    "#6B8A99",
    "#6B6B99",
    "#BFA760",
    "#8B9299"
  ]
  console.log(songName);
  for (let i = 0 ; i< buttons.length ; i++){
    buttons[i].addEventListener('click',() => {
      if(songs[i].currentTime > 0 && playing){
        pauseSong(songs[i])
      }else{
        playSong(songs[i], i)
      }
    })
  }

  function playSong(target, num){
    for(let j = 0 ; j < buttons.length ; j ++){
      if(num != j) stopSong(songs[j])
    }
    target.volume = 0.5
    target.play()
    playing = true
    songName.innerHTML = getSongName(num, songNames)
    document.body.style.backgroundColor = bgColors[num]
  }
  function pauseSong(target){
    target.pause()
    playing = false 
  }
  function stopSong(target){
    target.pause()
    target.currentTime = 0
  }
  function getSongName(num, list){
    return list[num]
  }
}