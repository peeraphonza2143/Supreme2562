var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var a1 = 0;
var b2 = 0;
var c3 = 0;
var d4 = 0;
var e5 = 0;
var f6 = 0;
var g7 = 0;
var h8 = 0;
var t1 ;
var t2 ;
var t3 ;
var t4 ;
var t5 ;
var t6 ;
var t7 ;
var t8 ;
window.onload=function ()
{
    showData()
  }
  function showData()
{

 //Round 1


  var Score1=firebase.database().ref("Beam Open/ROUND8/Team1/Score");
  var Score2=firebase.database().ref("Beam Open/ROUND8/Team1/Score");

  var Score3=firebase.database().ref("Beam Open/ROUND8/Team2/Score");
  var Score4=firebase.database().ref("Beam Open/ROUND8/Team2/Time");

  var Score5=firebase.database().ref("Beam Open/ROUND8/Team3/Score");
  var Score6=firebase.database().ref("Beam Open/ROUND8/Team3/Time");

  var Score7=firebase.database().ref("Beam Open/ROUND8/Team4/Score");
  var Score8=firebase.database().ref("Beam Open/ROUND8/Team4/Time");
  var Team1=firebase.database().ref("Beam Open/ROUND8");
  var Team2=firebase.database().ref("Beam Open/ROUND8");
  var Team3=firebase.database().ref("Beam Open/ROUND8");
  var Team4=firebase.database().ref("Beam Open/ROUND8");

//Round 1-score
      Score1.once('value').then(function(dataSnapshot1){
      Score2.once('value').then(function(dataSnapshot2){
      Score3.once('value').then(function(dataSnapshot3){
      Score4.once('value').then(function(dataSnapshot4){
      Score5.once('value').then(function(dataSnapshot5){
      Score6.once('value').then(function(dataSnapshot6){
      Score7.once('value').then(function(dataSnapshot7){
      Score8.once('value').then(function(dataSnapshot8){
      Team1.once('value').then(function(dataSnapshot17){
      Team2.once('value').then(function(dataSnapshot18){
      Team3.once('value').then(function(dataSnapshot19){
      Team4.once('value').then(function(dataSnapshot20){
      a = dataSnapshot1.val();
      a2 = dataSnapshot2.val();
      b = dataSnapshot3.val();
      b2 = dataSnapshot4.val();
      c =  dataSnapshot5.val();
      c2 =  dataSnapshot6.val();
      d =   dataSnapshot7.val();
      d2 =  dataSnapshot8.val();
      t1 =  dataSnapshot17.val();
      t2 =  dataSnapshot18.val();
      t3 =   dataSnapshot19.val();
      t4 =  dataSnapshot20.val();
          if (a>b && a>c && a>d ) {
            if (a>b && b>c && b>d ){
              if (a>c && b>c && c>d ){
                if (a>d && b>d && c>d )
            document.getElementById("Name1").innerHTML = t1;
            document.getElementById("Team1").innerHTML = a;
            document.getElementById("Time1").innerHTML = a2;
            document.getElementById("Name1").innerHTML = t2;
            document.getElementById("Team1").innerHTML = b;
            document.getElementById("Time1").innerHTML = b2;
            document.getElementById("Name1").innerHTML = t3;
            document.getElementById("Team1").innerHTML = c;
            document.getElementById("Time1").innerHTML = c2;
            document.getElementById("Name1").innerHTML = t4;
            document.getElementById("Team1").innerHTML = d;
            document.getElementById("Time1").innerHTML = d2;
            }
          }
        }
        if (a>b && a>c && a>d ) {
          if (a>b && b>c && b>d ){
            if (a>d && b>d && d>c ){
              if (a>d && b>d && d>c ){
          document.getElementById("Name1").innerHTML = t1;
          document.getElementById("Team1").innerHTML = a;
          document.getElementById("Time1").innerHTML = a2;
          document.getElementById("Name1").innerHTML = t2;
          document.getElementById("Team1").innerHTML = b;
          document.getElementById("Time1").innerHTML = b2;
          document.getElementById("Name1").innerHTML = t4;
          document.getElementById("Team1").innerHTML = d;
          document.getElementById("Time1").innerHTML = d2;
          document.getElementById("Name1").innerHTML = t3;
          document.getElementById("Team1").innerHTML = c;
          document.getElementById("Time1").innerHTML = c2;
          }
        }
      }
    }
      if (a>b && a>c && a>d ) {
        if (a>c && c>b && c>d ){
          if (a>d && c>d && b>d ){
           if (a>d && c>d && b>d ){}
        document.getElementById("Name1").innerHTML = t1;
        document.getElementById("Team1").innerHTML = a;
        document.getElementById("Time1").innerHTML = a2;
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;
        document.getElementById("Name1").innerHTML = t2;
        document.getElementById("Team1").innerHTML = b;
        document.getElementById("Time1").innerHTML = b2;

        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
        }
      }
    }
  }if (a>b && a>c && a>d ) {
      if (a>c && c>b && c>d ){
        if (a>d && c>d && d>b ){
          if (a>d && c>d && d>b ){
      document.getElementById("Name1").innerHTML = t1;
      document.getElementById("Team1").innerHTML = a;
      document.getElementById("Time1").innerHTML = a2;
      document.getElementById("Name1").innerHTML = t3;
      document.getElementById("Team1").innerHTML = c;
      document.getElementById("Time1").innerHTML = c2;
      document.getElementById("Name1").innerHTML = t4;
      document.getElementById("Team1").innerHTML = d;
      document.getElementById("Time1").innerHTML = d2;
      document.getElementById("Name1").innerHTML = t2;
      document.getElementById("Team1").innerHTML = b;
      document.getElementById("Time1").innerHTML = b2;


      }
    }
  }
}
if (a>b && a>c && a>d ) {
    if (a>d && d>b && d>c ){
      if (a>c && d>c && b>c ){
        if (a>d && d>c && b>c ){
    document.getElementById("Name1").innerHTML = t1;
    document.getElementById("Team1").innerHTML = a;
    document.getElementById("Time1").innerHTML = a2;
    document.getElementById("Name1").innerHTML = t4;
    document.getElementById("Team1").innerHTML = d;
    document.getElementById("Time1").innerHTML = d2;
    document.getElementById("Name1").innerHTML = t2;
    document.getElementById("Team1").innerHTML = b;
    document.getElementById("Time1").innerHTML = b2;
    document.getElementById("Name1").innerHTML = t3;
    document.getElementById("Team1").innerHTML = c;
    document.getElementById("Time1").innerHTML = c2;

    }
  }
}
}
if (a>b && a>c && a>d ) {
  if (a>d && d>c && d>b ){
    if (a>c && d>c && c>b ){
      if (a>c && d>c && c>b ){
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;
  document.getElementById("Name1").innerHTML = t4;
  document.getElementById("Team1").innerHTML = d;
  document.getElementById("Time1").innerHTML = d2;
  document.getElementById("Name1").innerHTML = t3;
  document.getElementById("Team1").innerHTML = c;
  document.getElementById("Time1").innerHTML = c2;
  document.getElementById("Name1").innerHTML = t2;
  document.getElementById("Team1").innerHTML = b;
  document.getElementById("Time1").innerHTML = b2;

}
  }
}
}
if (b>a && b>c && b>d ) {
  if (b>c && a>c && c>d ){
    if (a>c && a>d && c>d ){
      if (a>d && b>d && c>d ){
        document.getElementById("Name1").innerHTML = t2;
        document.getElementById("Team1").innerHTML = b;
        document.getElementById("Time1").innerHTML = b2;
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;

  document.getElementById("Name1").innerHTML = t3;
  document.getElementById("Team1").innerHTML = c;
  document.getElementById("Time1").innerHTML = c2;
  document.getElementById("Name1").innerHTML = t4;
  document.getElementById("Team1").innerHTML = d;
  document.getElementById("Time1").innerHTML = d2;
  }
}
}
}
if (b>a && b>c && b>d ) {
  if (b>a && a>c && a>d ){
    if (b>d && a>d && d>c ){
      if (a>c && b>c && d>c ){
  document.getElementById("Name1").innerHTML = t2;
  document.getElementById("Team1").innerHTML = b;
  document.getElementById("Time1").innerHTML = b2;
  document.getElementById("Name1").innerHTML = t3;
  document.getElementById("Team1").innerHTML = c;
  document.getElementById("Time1").innerHTML = c2;
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;
  document.getElementById("Name1").innerHTML = t4;
  document.getElementById("Team1").innerHTML = d;
  document.getElementById("Time1").innerHTML = d2;
  }
}
}
}
if (b>a && b>c && b>d ) {
  if (b>c && c>a && c>d ){
    if (b>a && c>a && a>d ){
      if (b>d && b>d && c>d ){

  document.getElementById("Name1").innerHTML = t2;
  document.getElementById("Team1").innerHTML = b;
  document.getElementById("Time1").innerHTML = b2;
  document.getElementById("Name1").innerHTML = t3;
  document.getElementById("Team1").innerHTML = c;
  document.getElementById("Time1").innerHTML = c2;
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;
  document.getElementById("Name1").innerHTML = t4;
  document.getElementById("Team1").innerHTML = d;
  document.getElementById("Time1").innerHTML = d2;
  }
}
}
}
if (b>a && b>c && b>d ) {
  if (b>c && c>d && c>a ){
    if (b>d && c>d && d>a ){
      if (b>a && c>a && d>a ){

  document.getElementById("Name1").innerHTML = t2;
  document.getElementById("Team1").innerHTML = b;
  document.getElementById("Time1").innerHTML = b2;
  document.getElementById("Name1").innerHTML = t3;
  document.getElementById("Team1").innerHTML = c;
  document.getElementById("Time1").innerHTML = c2;
  document.getElementById("Name1").innerHTML = t4;
  document.getElementById("Team1").innerHTML = d;
  document.getElementById("Time1").innerHTML = d2;
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;
  }
}
}
}
////////////////////////////////////////////////////////////////////////////
if (b>a && b>c && b>d ) {
  if (b>d && d>c && d>a ){
    if (b>a && d>a && a>c ){
      if (b>c && d>c && a>c ){
        document.getElementById("Name1").innerHTML = t2;
        document.getElementById("Team1").innerHTML = b;
        document.getElementById("Time1").innerHTML = b2;
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;

  document.getElementById("Name1").innerHTML = t3;
  document.getElementById("Team1").innerHTML = c;
  document.getElementById("Time1").innerHTML = c2;

  }
}
}
}
if (b>a && b>c && b>d ) {
  if (b>d && d>c && d>a ){
    if (b>a && d>a && c>a ){
      if (b>c && d>c && c>a ){
        document.getElementById("Name1").innerHTML = t2;
        document.getElementById("Team1").innerHTML = b;
        document.getElementById("Time1").innerHTML = b2;
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;



  }
}
}
}
if (c>b && c>a && c>d ) {
  if (c>a && a>b && a>d ){
    if (c>b && a>b && b>d ){
      if (c>d && a>d && b>d ){
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;
        document.getElementById("Name1").innerHTML = t1;
        document.getElementById("Team1").innerHTML = a;
        document.getElementById("Time1").innerHTML = a2;
        document.getElementById("Name1").innerHTML = t2;
        document.getElementById("Team1").innerHTML = b;
        document.getElementById("Time1").innerHTML = b2;
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
  }
}
}
}
if (c>b && c>a && c>d ) {
  if (c>a && a>b && a>d ){
    if (c>d && a>d && d>b ){
      if (c>b && a>b && d>b ){
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;
  document.getElementById("Name1").innerHTML = t4;
  document.getElementById("Team1").innerHTML = d;
  document.getElementById("Time1").innerHTML = d2;
  document.getElementById("Name1").innerHTML = t2;
  document.getElementById("Team1").innerHTML = b;
  document.getElementById("Time1").innerHTML = b2;


  }
}
}
}
if (c>b && c>a && c>d ) {
  if (c>b && b>a && b>d ){
    if (c>a && b>a && a>d ){
      if (c>d && b>d && a>d ){
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;

  document.getElementById("Name1").innerHTML = t2;
  document.getElementById("Team1").innerHTML = b;
  document.getElementById("Time1").innerHTML = b2;
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;
  document.getElementById("Name1").innerHTML = t4;
  document.getElementById("Team1").innerHTML = d;
  document.getElementById("Time1").innerHTML = d2;
  }
}
}
}
if (c>b && c>a && c>d ) {
  if (c>b && b>d && b>a ){
    if (c>d && b>d && d>a ){
      if (c>a && b>a && c>a ){
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;

      document.getElementById("Name1").innerHTML = t2;
      document.getElementById("Team1").innerHTML = b;
      document.getElementById("Time1").innerHTML = b2;
      document.getElementById("Name1").innerHTML = t4;
      document.getElementById("Team1").innerHTML = d;
      document.getElementById("Time1").innerHTML = d2;
      document.getElementById("Name1").innerHTML = t1;
      document.getElementById("Team1").innerHTML = a;
      document.getElementById("Time1").innerHTML = a2;

  }
}
}
}
if (c>b && c>a && c>d ) {
  if (c>d && d>a && d>b ){
    if (c>a && d>a && a>b ){
      if (c>b && d>b && a>b ){
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
        document.getElementById("Name1").innerHTML = t1;
        document.getElementById("Team1").innerHTML = a;
        document.getElementById("Time1").innerHTML = a2;
      document.getElementById("Name1").innerHTML = t2;
      document.getElementById("Team1").innerHTML = b;
      document.getElementById("Time1").innerHTML = b2;


  }
}
}
}
if (c>b && c>a && c>d ) {
  if (c>d && d>b && d>a ){
    if (c>b && a>b && b>a ){
      if (c>a && d>a && b>a ){
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
      document.getElementById("Name1").innerHTML = t2;
      document.getElementById("Team1").innerHTML = b;
      document.getElementById("Time1").innerHTML = b2;
      document.getElementById("Name1").innerHTML = t1;
      document.getElementById("Team1").innerHTML = a;
      document.getElementById("Time1").innerHTML = a2;
  }
}
}
}
if (d>b && d>a && d>c ) {
  if (d>a && a>b && a>c ){
    if (d>b && a>b && b>c ){
      if (d>c && a>c && b>c ){
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
  document.getElementById("Name1").innerHTML = t1;
  document.getElementById("Team1").innerHTML = a;
  document.getElementById("Time1").innerHTML = a2;
  document.getElementById("Name1").innerHTML = t2;
  document.getElementById("Team1").innerHTML = b;
  document.getElementById("Time1").innerHTML = b2;
  document.getElementById("Name1").innerHTML = t3;
  document.getElementById("Team1").innerHTML = c;
  document.getElementById("Time1").innerHTML = c2;

  }
}
}
}
if (d>b && d>a && d>c ) {
  if (d>a && a>c && a>b ){
    if (d>c && a>c && c>b ){
      if (d>b && a>b && c>b ){
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
      document.getElementById("Name1").innerHTML = t1;
      document.getElementById("Team1").innerHTML = a;
      document.getElementById("Time1").innerHTML = a2;
      document.getElementById("Name1").innerHTML = t3;
      document.getElementById("Team1").innerHTML = c;
      document.getElementById("Time1").innerHTML = c2;
      document.getElementById("Name1").innerHTML = t2;
      document.getElementById("Team1").innerHTML = b;
      document.getElementById("Time1").innerHTML = b2;

  }
}
}
}
if (d>b && d>a && d>c ) {
  if (d>b && b>a && b>c ){
    if (d>a && b>a && d>c ){
      if (a>d && b>d && c>d ){
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
        document.getElementById("Name1").innerHTML = t2;
        document.getElementById("Team1").innerHTML = b;
        document.getElementById("Time1").innerHTML = b2;
      document.getElementById("Name1").innerHTML = t1;
      document.getElementById("Team1").innerHTML = a;
      document.getElementById("Time1").innerHTML = a2;
      document.getElementById("Name1").innerHTML = t3;
      document.getElementById("Team1").innerHTML = c;
      document.getElementById("Time1").innerHTML = c2;

  }
}
}
}
if (d>b && d>a && d>c ) {
  if (a>b && b>c && b>d ){
    if (a>c && b>c && d>c ){
      if (a>d && b>d && c>d ){
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
        document.getElementById("Name1").innerHTML = t2;
        document.getElementById("Team1").innerHTML = b;
        document.getElementById("Time1").innerHTML = b2;
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;
      document.getElementById("Name1").innerHTML = t1;
      document.getElementById("Team1").innerHTML = a;
      document.getElementById("Time1").innerHTML = a2;

  }
}
}
}
if (d>b && d>a && d>c ) {
  if (a>b && b>c && b>d ){
    if (a>c && b>c && d>c ){
      if (a>d && b>d && c>d ){
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;
        document.getElementById("Name1").innerHTML = t1;
        document.getElementById("Team1").innerHTML = a;
        document.getElementById("Time1").innerHTML = a2;
        document.getElementById("Name1").innerHTML = t2;
        document.getElementById("Team1").innerHTML = b;
        document.getElementById("Time1").innerHTML = b2;


  }
}
}
}
if (d>b && d>a && d>c ) {
  if (a>b && b>c && b>d ){
    if (a>c && b>c && d>c ){
      if (a>d && b>d && c>d ){
        document.getElementById("Name1").innerHTML = t4;
        document.getElementById("Team1").innerHTML = d;
        document.getElementById("Time1").innerHTML = d2;
        document.getElementById("Name1").innerHTML = t3;
        document.getElementById("Team1").innerHTML = c;
        document.getElementById("Time1").innerHTML = c2;
        document.getElementById("Name1").innerHTML = t2;
        document.getElementById("Team1").innerHTML = b;
        document.getElementById("Time1").innerHTML = b2;
        document.getElementById("Name1").innerHTML = t1;
        document.getElementById("Team1").innerHTML = a;
        document.getElementById("Time1").innerHTML = a2;
      }

}
}
}
});
});
});
});
});
});
});
});

}
