window.onload = function(){
  document.getElementById("showMusic").style.display = "none";
  document.getElementById("showPhotography").style.display = "none";
  document.getElementById("showArt").style.display = "none";
  document.getElementById("showPerformingArts").style.display = "none";
  document.getElementById("showFindMe").style.display = "none";
  document.getElementById("showEmailMe").style.display = "none";
  document.getElementById("showAboutUs").style.display = "none";
  document.getElementById("showHelp").style.display = "none";
  document.getElementById("showExercise").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
}

function showMusic(){
  document.getElementById("showHome").style.display = "none";
  document.getElementById("showPerformingArts").style.display = "none";
  document.getElementById("showPhotography").style.display = "none";
  document.getElementById("showArt").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
  document.getElementById("showMusic").style.display = "block";
}

function showPhotography(){
  document.getElementById("showHome").style.display = "none";
  document.getElementById("showMusic").style.display = "none";
  document.getElementById("showArt").style.display = "none";
  document.getElementById("showPerformingArts").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
  document.getElementById("showPhotography").style.display = "block";
}

function showArt(){
  document.getElementById("showHome").style.display = "none";
  document.getElementById("showMusic").style.display = "none";
  document.getElementById("showPerformingArts").style.display = "none";
  document.getElementById("showPhotography").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
  document.getElementById("showArt").style.display = "block";
}

function showPerformingArts(){
  document.getElementById("showHome").style.display = "none";
  document.getElementById("showMusic").style.display = "none";
  document.getElementById("showArt").style.display = "none";
  document.getElementById("showPhotography").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
  document.getElementById("showPerformingArts").style.display = "block";
}

function showFindMe(){
  document.getElementById("indexHome").style.display = "none";
  document.getElementById("showEmailMe").style.display = "none";
  document.getElementById("showAboutUs").style.display = "none";
  document.getElementById("showHelp").style.display = "none";
  document.getElementById("showExercise").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
  document.getElementById("showFindMe").style.display = "block";
}

function showEmailMe(){
  document.getElementById("showFindMe").style.display = "none";
  document.getElementById("showAboutUs").style.display = "none";
  document.getElementById("showHelp").style.display = "none";
  document.getElementById("showExercise").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
  document.getElementById("showEmailMe").style.display = "block";
}

function congrats(){
  alert("Succesfully E-mailed, thank you.");
}

function showAboutUs(){
  document.getElementById("indexHome").style.display = "none";
  document.getElementById("showEmailMe").style.display = "none";
  document.getElementById("showFindMe").style.display = "none";
  document.getElementById("showHelp").style.display = "none";
  document.getElementById("showExercise").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
  document.getElementById("showAboutUs").style.display = "block";
}

function showHelp(){
  document.getElementById("indexHome").style.display = "none";
  document.getElementById("showEmailMe").style.display = "none";
  document.getElementById("showFindMe").style.display = "none";
  document.getElementById("showAboutUs").style.display = "none";
  document.getElementById("showExercise").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
  document.getElementById("showHelp").style.display = "block";
}

function showExercise(){
  document.getElementById("indexHome").style.display = "none";
  document.getElementById("showEmailMe").style.display = "none";
  document.getElementById("showFindMe").style.display = "none";
  document.getElementById("showAboutUs").style.display = "none";
  document.getElementById("showHelp").style.display = "none";
  for(var i = 1; i <= 10; i++){
      document.getElementById("musicTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 5; i++){
      document.getElementById("photoTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 4; i++){
      document.getElementById("artTopic"+i).style.display = "none";
  }
  for(var i = 1; i <= 3; i++){
      document.getElementById("performTopic"+i).style.display = "none";
  }
  document.getElementById("showExercise").style.display = "block";
}

function showMusicTopic(x){
  document.getElementById("showMusic").style.display = "none";
  for(var i = 1; i <= 10; i++){
    if(i == x){
      document.getElementById("musicTopic"+i).style.display = "block";
    }else{
      document.getElementById("musicTopic"+i).style.display = "none";
    }
  }
}

function showPhotoTopic(x){
  document.getElementById("showPhotography").style.display = "none";
  for(var i = 1; i <= 5; i++){
    if(i == x){
      document.getElementById("photoTopic"+i).style.display = "block";
    }else{
      document.getElementById("photoTopic"+i).style.display = "none";
    }
  }
}

function showArtTopic(x){
  document.getElementById("showArt").style.display = "none";
  for(var i = 1; i <= 4; i++){
    if(i == x){
      document.getElementById("artTopic"+i).style.display = "block";
    }else{
      document.getElementById("artTopic"+i).style.display = "none";
    }
  }
}

function showPerformTopic(x){
  document.getElementById("showPerformingArts").style.display = "none";
  for(var i = 1; i <= 3; i++){
    if(i == x){
      document.getElementById("performTopic"+i).style.display = "block";
    }else{
      document.getElementById("performTopic"+i).style.display = "none";
    }
  }
}

function checkAnswers(){
  var scores = 0;

  if(document.getElementById('q1').value == "b"){
    scores = scores + 1;
  }
  if(document.getElementById('q2').value == "a"){
    scores = scores + 1;
  }
  if(document.getElementById('q3').value == "d"){
    scores = scores + 1;
  }
  if(document.getElementById('q4').value == "c"){
    scores = scores + 1;
  }
  if(document.getElementById('q5').value == "b"){
    scores = scores + 1;
  }
  if(document.getElementById('q6').value == "b"){
    scores = scores + 1;
  }
  if(document.getElementById('q7').value == "c"){
    scores = scores + 1;
  }
  if(document.getElementById('q8').value == "a"){
    scores = scores + 1;
  }
  if(document.getElementById('q9').value == "d"){
    scores = scores + 1;
  }
  if(document.getElementById('q10').value == "c"){
    scores = scores + 1;
  }

  alert("Your score is : "+scores);
  location.reload();
}
