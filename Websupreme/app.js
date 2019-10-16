window.onload=function ()
{
    showData()
  }
  function showData()
{

 //Round 1


  var Score1=firebase.database().ref("PUCK/ROUND1/Team1/Score");
  var Score2=firebase.database().ref("PUCK/ROUND1/Team1/Time");

  var Score3=firebase.database().ref("PUCK/ROUND1/Team2/Score");
  var Score4=firebase.database().ref("PUCK/ROUND1/Team2/Time");

  var Score5=firebase.database().ref("PUCK/ROUND1/Team3/Score");
  var Score6=firebase.database().ref("PUCK/ROUND1/Team3/Time");

  var Score7=firebase.database().ref("PUCK/ROUND1/Team4/Score");
  var Score8=firebase.database().ref("PUCK/ROUND1/Team4/Time");

  var Score9=firebase.database().ref("PUCK/ROUND1/Team5/Score");
  var Score10=firebase.database().ref("PUCK/ROUND1/Team5/Time");

  var Score11=firebase.database().ref("PUCK/ROUND1/Team6/Score");
  var Score12=firebase.database().ref("PUCK/ROUND1/Team6/Time");

  var Score13=firebase.database().ref("PUCK/ROUND1/Team7/Score");
  var Score14=firebase.database().ref("PUCK/ROUND1/Team7/Time");

  var Score15=firebase.database().ref("PUCK/ROUND1/Team8/Score");
  var Score16=firebase.database().ref("PUCK/ROUND1/Team8/Time");

//Round 1-score
      Score1.once('value').then(function(dataSnapshot1){
      console.log(dataSnapshot1.val());
      document.getElementById("Team1").innerHTML = dataSnapshot1.val();
});
    Score2.once('value').then(function(dataSnapshot2){
    console.log(dataSnapshot2.val());
    document.getElementById("Time1").innerHTML = dataSnapshot2.val();
});
Score3.once('value').then(function(dataSnapshot3){
    console.log(dataSnapshot3.val());
    document.getElementById("Team2").innerHTML = dataSnapshot3.val();
});
  Score4.once('value').then(function(dataSnapshot4){
  console.log(dataSnapshot4.val());
  document.getElementById("Time2").innerHTML = dataSnapshot4.val();
});
Score5.once('value').then(function(dataSnapshot5){
    console.log(dataSnapshot5.val());
    document.getElementById("Team3").innerHTML = dataSnapshot5.val();
  });
  Score6.once('value').then(function(dataSnapshot6){
    console.log(dataSnapshot6.val());
    document.getElementById("Time3").innerHTML = dataSnapshot6.val();
  });
  Score7.once('value').then(function(dataSnapshot7){
    console.log(dataSnapshot7.val());
    document.getElementById("Team4").innerHTML = dataSnapshot7.val();
  });
  Score8.once('value').then(function(dataSnapshot8){
    console.log(dataSnapshot8.val());
    document.getElementById("Time4").innerHTML = dataSnapshot8.val();
  });

}
