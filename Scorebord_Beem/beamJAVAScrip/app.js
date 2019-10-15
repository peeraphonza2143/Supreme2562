var counter = 0;
var counter2 = 0;
var get = 0;
var nowsec = 0;
var nowmin = 3;
var get2 = 0;
var nowsec2 = 0;
var nowmin2 = 3;
var value = 0;
var a = 0;
var b = 0;

function getScore(cir) {
    var pic;
        pic = "1.png"
  /*  } else {
        pic = "2.gif"
    }*/
    document.getElementById("imgcanvas").innerHTML = pic;
}
function saveOnclick(){
  var team = document.getElementById('team');
  var score = document.getElementById('score');
  var time = document.getElementById('timett');
  var firebaseRef=firebase.database().ref('Beam Open/ROUND1')
  //var nowsec = document.getElementById('nowsec');
  // console.console.log(email.value); ให้แสดงใน console
  //insertData(team.value,score.value,time.value);
  if (team.value == 1)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team1')
      firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 2)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team2')
      firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 3)
  {
        var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team3')
        firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 4)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team4')
      firebaseRef.update({Score:score.value, Time:time.value});
  }
  if (team.value == 5)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team5')
      firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 6)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team6')
      firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 7)
  {
        var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team7')
        firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 8)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team8')
      firebaseRef.update({Score:score.value, Time:time.value});
  }
  if (team.value == 9)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team9')
      firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 10)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team10')
      firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 11)
  {
        var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team11')
        firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 12)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team12')
      firebaseRef.update({Score:score.value, Time:time.value});
  }
  if (team.value == 13)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team13')
      firebaseRef.update({Score:score.value, Time:time.value});
  }

  if (team.value == 14)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team14')
      firebaseRef.update({Score:score.value, Time:time.value});
  }

}
function saveOnclick2(){
  var team2 = document.getElementById('team2');
  var score2 = document.getElementById('score2');
  var time2 = document.getElementById('timett2');
  var firebaseRef=firebase.database().ref('Beam Open/ROUND1')
  //var nowsec = document.getElementById('nowsec');
  // console.console.log(email.value); ให้แสดงใน console
  //insertData(team.value,score.value,time.value);
  if (team2.value == 1)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team1')
      firebaseRef.update({Score:score2.value, Time:time2.value});
  }

  if (team2.value == 2)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team2')
      firebaseRef.update({score:score2.value, time:time2.value});
  }

  if (team2.value == 3)
  {
        var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team3')
        firebaseRef.update({score:score2.value, time:time2.value});
  }

  if (team2.value == 4)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team4')
      firebaseRef.update({score:score2.value, time:time2.value});
  }
  if (team2.value == 5)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team5')
      firebaseRef.update({score:score2.value, time:time2.value});
  }

  if (team2.value == 6)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team6')
      firebaseRef.update({score:score2.value, time:time2.value});
  }

  if (team2.value == 7)
  {
        var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team7')
        firebaseRef.update({score:score2.value, time:time2.value});
  }

  if (team2.value == 8)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team8')
      firebaseRef.update({score:score2.value, time:time2.value});
  }
  if (team2.value == 9)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team9')
      firebaseRef.update({score:score2.value, time:time2.value});
  }

  if (team2.value == 10)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team10')
      firebaseRef.update({score:score2.value, time:time2.value});
  }

  if (team2.value == 11)
  {
        var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team11')
        firebaseRef.update({score:score2.value, time:time2.value});
  }

  if (team2.value == 12)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team12')
      firebaseRef.update({score:score2.value, time:time2.value});
  }
  if (team2.value == 13)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team13')
      firebaseRef.update({score:score2.value, time:time2.value});
  }

  if (team2.value == 14)
  {
      var firebaseRef=firebase.database().ref('Beam Open/ROUND1/Team14')
      firebaseRef.update({score:score2.value, time:time2.value});
  }

}
window.onload=function ()
{
  /*var strr=firebase.database().ref("SS/Time/TIMEredst");
  //get2 = document.getElementById("setsec").value=180;
  strr.once('value').then(function(dataSnapshot){
  console.log(dataSnapshot.val());
  document.getElementById("h3").innerHTML=dataSnapshot.val()});*/
  var ss2=firebase.database().ref("ssBlue/i");
  var ss1=firebase.database().ref("ssRed/i");
  ss2.once('value').then(function (dataSnapshot){
  console.log(dataSnapshot.val());
  document.getElementById("counter2").innerHTML ="Score:"+ dataSnapshot.val()});
  ss1.once('value').then(function (dataSnapshot1){
  console.log(dataSnapshot1.val());
  document.getElementById("counter").innerHTML ="Score:"+ dataSnapshot1.val()});
  setTimeout("window.onload()",1000);
  }
function round1()
{
  var firebaseRef=firebase.database().ref("PUCK");
  firebaseRef.child("ROUND3/Team1/Score").set('0')
  firebaseRef.child("ROUND3/Team1/Time").set('0')
  firebaseRef.child("ROUND3/Team2/Score").set('0')
  firebaseRef.child("ROUND3/Team2/Time").set('0')
  firebaseRef.child("ROUND3/Team3/Score").set('0')
  firebaseRef.child("ROUND3/Team3/Time").set('0')
  firebaseRef.child("ROUND3/Team4/Score").set('0')
  firebaseRef.child("ROUND3/Team4/Time").set('0')
  firebaseRef.child("ROUND3/Team5/Score").set('0')
  firebaseRef.child("ROUND3/Team5/Time").set('0')
  firebaseRef.child("ROUND3/Team6/Score").set('0')
  firebaseRef.child("ROUND3/Team6/Time").set('0')
  firebaseRef.child("ROUND3/Team7/Score").set('0')
  firebaseRef.child("ROUND3/Team7/Time").set('0')
  firebaseRef.child("ROUND3/Team8/Score").set('0')
  firebaseRef.child("ROUND3/Team8/Time").set('0')
  firebaseRef.child("ROUND3/Team9/Score").set('0')
  firebaseRef.child("ROUND3/Team9/Time").set('0')
  firebaseRef.child("ROUND3/Team10/Score").set('0')
  firebaseRef.child("ROUND3/Team10/Time").set('0')
  firebaseRef.child("ROUND3/Team11/Score").set('0')
  firebaseRef.child("ROUND3/Team11/Time").set('0')
  firebaseRef.child("ROUND3/Team12/Score").set('0')
  firebaseRef.child("ROUND3/Team12/Time").set('0')
  firebaseRef.child("ROUND3/Team13/Score").set('0')
  firebaseRef.child("ROUND3/Team13/Time").set('0')
  firebaseRef.child("ROUND3/Team14/Score").set('0')
  firebaseRef.child("ROUND3/Team14/Time").set('0')
  firebaseRef.child("ROUND3/Team15/Score").set('0')
  firebaseRef.child("ROUND3/Team15/Time").set('0')
  firebaseRef.child("ROUND3/Team16/Score").set('0')
  firebaseRef.child("ROUND3/Team16/Time").set('0')
  firebaseRef.child("ROUND3/Team17/Score").set('0')
  firebaseRef.child("ROUND3/Team17/Time").set('0')
  firebaseRef.child("ROUND3/Team18/Score").set('0')
  firebaseRef.child("ROUND3/Team18/Time").set('0')
  firebaseRef.child("ROUND3/Team19/Score").set('0')
  firebaseRef.child("ROUND3/Team19/Time").set('0')
  firebaseRef.child("ROUND3/Team20/Score").set('0')
  firebaseRef.child("ROUND3/Team20/Time").set('0')
  firebaseRef.child("ROUND3/Team21/Score").set('0')
  firebaseRef.child("ROUND3/Team21/Time").set('0')
  firebaseRef.child("ROUND3/Team22/Score").set('0')
  firebaseRef.child("ROUND3/Team22/Time").set('0')
  firebaseRef.child("ROUND3/Team23/Score").set('0')
  firebaseRef.child("ROUND3/Team23/Time").set('0')
  firebaseRef.child("ROUND3/Team24/Score").set('0')
  firebaseRef.child("ROUND3/Team24/Time").set('0')
  firebaseRef.child("ROUND3/Team25/Score").set('0')
  firebaseRef.child("ROUND3/Team25/Time").set('0')


  //firebaseRef.child("Beam Junior").set(' ')
}
function showData()
{

  var firebaseRef=firebase.database().ref("Beam Open/ROUND1").orderByChild("score");
  firebaseRef.once('value').then(function(dataSnapshot){
    dataSnapshot.forEach(function(childSnapshot){
      var childkey = childSnapshot.key;
      var childData = childSnapshot.val();
      console.log(childData);
    });

});
}

function insertData(team,score,time)
{
  var firebaseRef=firebase.database().ref("Beam Open/ROUND1");
  firebaseRef.push(
    {team:team,
      score:score,
      time:time
      //nowmin:nowmin,
      //nowsec:nowsec
    });
  console.log("Insert success")
  showData();
}
function getone()
{
   counter = counter + 1;
   document.getElementById("counter").innerHTML = "Score" +"<span>:</span>" +counter;
   return counter;
}
function lostone()
{
  counter = counter - 1;
   document.getElementById("counter").innerHTML = "Score" +"<span>:</span>" +counter;
   return counter;
}
function getone2()
{
   counter2 = counter2 + 1;
   document.getElementById("counter2").innerHTML = "Score" +"<span>:</span>" +counter2;
   return counter2;
}
function lostone2()
{
  counter2 = counter2 - 1;
   document.getElementById("counter2").innerHTML = "Score" +"<span>:</span>" +counter2;
   return counter2;
}
////////////////////////////////////////////////////////////////////////////////////////////






/*function startCount()
{
  startCountb();
  startCountr();
}*/

function startCountr()
{
  var strr=firebase.database().ref("SS/Time/TIMEredst");
  var i=firebase.database().ref('reset')
  var a = 0;

  strr.once('value').then(function(dataSnapshot){
    console.log(dataSnapshot.val());
    //document.getElementById("h3").innerHTML=dataSnapshot.val();
    a = dataSnapshot.val();
    if (a==1)
    {
      get = document.getElementById("setsec").value=180;
      display();

    }
    else {
      return startCountr();
    }
  })

}
function startCountb()
{
  var i=firebase.database().ref('reset')
  var strb=firebase.database().ref("SS/Time/TIMEbluest")
  var a=0;
  strb.once('value').then(function(dataSnapshot){
    console.log(dataSnapshot.val());
    a = dataSnapshot.val();
    //document.getElementById("h4").innerHTML=dataSnapshot.val();
    if (a==1)
    {
      get2 = document.getElementById("setsec").value=180;
      display2();
    }
    else {
      return startCountb();
    }
  })

}
function display() {
	nowmin = Math.floor(get/60)
	nowsec = get%60;
	if (get>=0)
	{
		document.getElementById("time").innerHTML = nowmin+"<span>:</span>"+nowsec;
  	document.getElementById("setsec").value = get;
		get = get - 1 ;
		setTimeout("display()",1000);
		/*if (get==0)
		{
			document.getElementById("container").innerHTML="<audio autoplay='autoplay'><source src='ding.mp3' type = 'audio/mpeg'></audio>";
		}*/
	}
}
function display2() {
	nowmin2 = Math.floor(get2/60)
	nowsec2 = get2%60;
  setTimeout(function () {    //  call a 3s setTimeout when the loop is called
    document.getElementById("time2").innerHTML = nowmin2+"<span>:</span>"+nowsec2;
          //  your code here
      get2--;                     //  increment the counter
      if (get2 >= 0) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another
      }                        //  ..  setTimeout()
   }, 3000
  	document.getElementById("setsec2").value = get2;

		/*if (get==0)
		{
			document.getElementById("container").innerHTML="<audio autoplay='autoplay'><source src='ding.mp3' type = 'audio/mpeg'></audio>";
		}*/
	}

function resetTime()
{
  get=0;
  counter = 0;
  get2=0;
  counter2 = 0;
  nowmin = 0;
  nowsec = 0;
  nowmin2 = 0;
  nowsec2 = 0;
  var i=firebase.database().ref('reset')
  var SCRblueOPEN=firebase.database().ref('ssBlue');
  var SCRredOPEN=firebase.database().ref('ssRed');
  var strb=firebase.database().ref("SS/Time/TIMEbluest");
  var strr=firebase.database().ref("SS/Time/TIMEredst");
  i.update({i:1});
  a = 1;
  b = 1;
  strr.once('value').then(function(dataSnapshot){
    console.log(dataSnapshot.val());

    if (dataSnapshot.val()==0 && a == 1)
    {
      i.update({i:0});
      a = 0;

    }
    else
    {
      return resetTime();
    }
  })
  SCRblueOPEN.update({i:0});
  SCRredOPEN.update({i:0});
  startCountb();
  startCountr();
  stopr();
  stopb();
  document.getElementById("setsec2").value=0;
  document.getElementById("time2").innerHTML = 3+"<span>:</span>"+00;
  document.getElementById("nowmin2").innerHTML = 0+"<span>:</span>"+0;
  document.getElementById("score2").innerHTML = score+"<span>:</span>"+0;
  document.getElementById("team2").value = "Team name" ;
  document.getElementById("score2").value = " ";
  document.getElementById("timett2").value = " ";
  document.getElementById("counter").innerHTML = "Score:0";
  document.getElementById("counter2").innerHTML = "Score:0";
  document.getElementById("setsec").value=0;
  document.getElementById("time").innerHTML = 3+"<span>:</span>"+00;
  document.getElementById("nowmin").innerHTML = 0+"<span>:</span>"+0;
  document.getElementById("score").innerHTML = score+"<span>:</span>"+0;
  document.getElementById("team").value = "Team name" ;
  document.getElementById("score").value = " ";
  document.getElementById("timett").value = " ";

}
/*function resetTime2()
{

  get2=0;
  counter2 = 0;
	document.getElementById("setsec2").value=0;
  document.getElementById("time2").innerHTML = 3+"<span>:</span>"+00;
  document.getElementById("nowmin2").innerHTML = 0+"<span>:</span>"+0;
  document.getElementById("score2").innerHTML = score+"<span>:</span>"+0;
  document.getElementById("team2").value = "Team name" ;
  document.getElementById("score2").value = " ";
  document.getElementById("timett2").value = " ";

}*/
function stopr()
{
  var r = 0;
  var stpr = firebase.database().ref("SS/Time/TIMEredfi")
  stpr.once('value').then(function(dataSnapshot){
    r = dataSnapshot.val();
    if (r==1){
      document.getElementById("setsec").value = get;
      document.getElementById("nowmin").innerHTML = (2-nowmin) +"<span>:</span>"+ (60-nowsec);
      get = 0;
    }
    else {
      return stopr();
    }

  })

}
function stopb()
{
  var b = 0;
  var stpb = firebase.database().ref("SS/Time/TIMEbluefi")
  stpb.once('value').then(function(dataSnapshot){
    b = dataSnapshot.val();
    if (b==1){
      document.getElementById("setsec2").value = get2;
      document.getElementById("nowmin2").innerHTML = (2-nowmin2) +"<span>:</span>"+ (60-nowsec2);
      get2 = 0;
    }
    else {
      return stopb();
    }

  })

}
/*function resetst()
{
  var strr=firebase.database().ref("SS/Time");
  var strb=firebase.database().ref("SS/Time");
  strr.update({TIMEredst:0});
  strb.update({TIMEbluest:0});

}*/
/*function convert() {
	var cmin = (document.getElementById("stmin").value)*60;
	var csec = parseInt(document.getElementById("stsec").value);
	document.getElementById("setsec").value = cmin+csec;

}*/
