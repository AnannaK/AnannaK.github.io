
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBicFp50_BURL5jI_1RqYhnevRQZ8wwm2g",
    authDomain: "game-69bef.firebaseapp.com",
    databaseURL: "https://game-69bef.firebaseio.com",
    projectId: "game-69bef",
    storageBucket: "game-69bef.appspot.com",
    messagingSenderId: "896408651083",
    appId: "1:896408651083:web:c29772ab19f1b253"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
let database = firebase.database()
let scoreboard = { }
let user = document.getElementById("name")
let a
let b
let c
let d
let e
let f
let score
let time
let enemynumb
let allienumb
let level
let direction
let eradius
let visibility = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]


function setup() {
  createCanvas(windowWidth, windowHeight);
  s = width/1000
  a = 520
  b = 450
  c = [476,265,835]
  d = [880,174,935]
  e = [737]
  f = [885]
  direction_h = [1,1,1]
  direction_v = [1,1,1]
  enemynumb = 1
  allienumb = 3
  score = 0
  time = 60
  level = 1
  eradius = 45
  aradius = 40
}

function draw() {
  if (time > 0 && score >= 0) {
    
  background(240,128,128);
  textSize(40)
  fill(0,0,0)
  text('SCORE:'+score, 430, 60)
  text('TIME:'+time.toFixed(0), 450, 120)
  time = time-0.05


  
  
  if (score >= 20 && level == 1) {
    level = 2
    score = 0
    eradius = eradius + 5
    aradius = aradius - 20
    
    enemynumb = enemynumb + 3
    e.push.apply(e, [638,956,765])
    f.push.apply(f, [418,786,184])
    
    allienumb = allienumb + 5
    c.push.apply(c, [923,745,353,745,835])
    d.push.apply(d, [638,874,375,446,157])
    direction_h.push.apply(direction_h, [1,1,1,1,1]) 
    direction_v.push.apply(direction_v, [1,1,1,1,1]) 
  }
  if (score < 0 && level==2){
    text('GAME OVER',310,300)
    text('try again...',360,350)
    noLoop()
  }


  if (score >= 50 && level==2) {
    level = 3
    score = 0
    eradius = eradius - 15
    
    enemynumb = enemynumb + 5
    e.push.apply(e, [274,735,936,376,734])
    f.push.apply(f, [357,845,393,664,175])
    direction_h.push.apply(direction_h, [1,1,1,1,1]) 
    direction_v.push.apply(direction_v, [1,1,1,1,1])   
    
    allienumb = allienumb + 10
    c.push.apply(c, [344,473,825,855,734,835,337,375,926,773])
    d.push.apply(d, [473,687,674,438,677,458,844,751,937,763])
    direction_h.push.apply(direction_h, [1,1,1,1,1,1,1,1,1,1]) 
    direction_v.push.apply(direction_v, [1,1,1,1,1,1,1,1,1,1]) 
  }
  if (score < 0 && level==3){
    text('GAME OVER',310,300)
    text('try again...',360,350)
    noLoop()
  } 

  
  if (score >= 100 && level==3) {
    level = 4
    score = 0
    eradius = eradius - 10
    
    enemynumb = enemynumb + 10
    e.push.apply(e, [274,735,936,376,734,111,234,456,678,987])
    f.push.apply(f, [357,845,393,664,175,123,345,567,789,654])
    direction_h.push.apply(direction_h, [1,1,1,1,1,1,1,1,1,1]) 
    direction_v.push.apply(direction_v, [1,1,1,1,1,1,1,1,1,1]) 
    
    allienumb = allienumb + 15
    c.push.apply(c, [273,836,926,538,835,265,945,639,264,935,453,956,375,925])
    d.push.apply(d, [936,467,788,466,567,344,565,591,876,375,453,647,533,645])
    direction_h.push.apply(direction_h, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]) 
    direction_v.push.apply(direction_v, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
  }
  if (score <= 0 && level==4){
    text('GAME OVER',310,300)
    text('try again...',360,350)
    noLoop()
  }  
   if (score >= 150 && time >= 0 && level==4){
    fill(141,193,101  )
    text('WINNER!!!',310,300)
    noLoop()
  }  
  
  
  
  
  fill(0, 0, 0)
  circle(a*s,b,30*s) 
  if (keyIsDown(LEFT_ARROW)) {
    a = a - 10
  }
  if (keyIsDown(RIGHT_ARROW)) {
    a = a + 10
  }
  if (keyIsDown(UP_ARROW)) {
    b = b - 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    b = b + 10
  }  
  if ( a > width) {
	a = 0
  }
  if ( b > height) {
	b = 0
  }
  
  for (j=0; j<allienumb; j=j+1) {
    
    fill(255, 160, 122)
    if (visibility[j] == true) {
      circle(c[j]*s,d[j],aradius*s)
    }
    c[j] = c[j]+5*direction_h[j]
    d[j] = d[j]+5*direction_v[j]
    if ( c[j] > width) {
	  c[j] = 0
    }
    if ( d[j] > height) {
	  d[j] = 0
    }
    if (dist( c[j], d[j], a, b) < aradius + 40) {
      visibility[j] = false
	  score = score + 1
    }
  }
    
  for (i=0; i<enemynumb; i=i+1) {
    
    fill(144, 12, 63 )
    circle(e[i],f[i],eradius*s)
    e[i] = e[i]+5
    f[i] = f[i]+5
    if ( e[i] > width) {
	  e[i] = 0
    }
    if ( f[i] > height) {
	  f[i] = 0
    }
    
    if (dist( e[i], f[i], a, b) < eradius + 40) {
	  score = score - 1
    }   
  }
  
  
}  
  
  else {
    user.innerHTML = "Name? <input id='who'><button onclick='restart()'>Restart</button> <button onclick='generate_alltime_leaderboard()'>All-time leaderboard</button>"
    fill(199,0,57 )
    text('GAME OVER',310, 300)
    textSize(30)
    text('try again...',400,340)
    noLoop()

  }
}

	function restart() { 
      let who = document.getElementById("who")
      name = who.value
	  database.ref(name).set(level)
	  if (name != "") { 
        scoreboard[name] = level
		}
      alert("Scoreboard:" + JSON.stringify(scoreboard,null,1)) 
        level = 1
        score = 0
        time = 60
        a = 520
        b = 450
        c = [330,137,835]
        d = [880,775,935]
        e = [737]
        f = [885]
        direction_h = [1,1,1]
        direction_v = [1,1,1]
        enemynumb = 1
        allienumb = 3
        eradius = 45
        aradius = 40
		loop()
		user.innerHTML = ""
        generate_leaderboard()
      }

    function generate_leaderboard() {
      scores = Object.values(scoreboard)
      names = Object.keys(scoreboard)
  
      if (scores.length >= 3) {
        let leaderboard = { }
        for (i=0; i<3; i=i+1) {
          max = Math.max(...scores)
          index = scores.indexOf(max)
          leaderboard[names[index]] = max
          names.splice(index,1)
          scores.splice(index,1)
        }
        alert("Leaderboard:" + JSON.stringify(leaderboard,null,1))
      }
    }

	function generate_alltime_leaderboard() {
		let alltime_leaderboard = { }
		database.ref().orderByValue().limitToLast(5).on("value", function(snapshot) {
			snapshot.forEach(function(data) {
			alltime_leaderboard[data.key] = data.val()
			});
	    	});
		if (Object.values(alltime_leaderboard).length > 0) {
		  alert("All-time leaderboard:" + JSON.stringify(alltime_leaderboard,null,1))
	    	}
	}

	generate_alltime_leaderboard()
