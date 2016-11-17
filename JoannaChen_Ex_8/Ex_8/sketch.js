// With a partner, do the following:
// take a story from https://www.gutenberg.org/ebooks/search/?sort_order=downloads
// bring the text into P5 as a string
// Use at least 3 expressions to parse the string of text.
// use http://regexr.com/ as guide to formulate your expressions

//For homework finish the above individually to also include:

// visualize your data in some interesting way.
// extra points for movement, procedural aspects or interactivity 

var joinedText, rawText;
var beginNum, endNum;
var story;
var uberParsed;
var parsedArray;
var p, t, w;
var neverland = [];
var fairies = [];
var children = [];

function preload() {
  rawText = loadStrings("data/peterPan.txt");
}

function setup() {
  createCanvas(600, 600);
  background(255);
  
  joinedText = join(rawText, "");
  beginNum = joinedText.indexOf("All");
  //console.log(beginNum);
  endNum = joinedText.indexOf("THE END");
  //console.log(endNum);
  var endL = "THE END";
  story = joinedText.substring(beginNum, endNum + endL.length);
  //console.log(story);
  var parsed = story.replace(/,/gi, " ");
  var superParsed = parsed.replace(/[[abcdefghijklmnopqrstuvwxyz]]/g, " ");
  //console.log(superParsed);
  uberParsed = superParsed.replace(/;/gi, " ");
  console.log(uberParsed);
  parsedArray = splitTokens(superParsed, " ");
  
  p = find("Peter");
  t = find("Tinker");
  w = find("Wendy");
  //console.log(w);
  
  if (p > 0) { //peter pan!
    for (var i = 0; i <= p; i++) {
      //var pp = new Peter(random(0, width), random(0, 400));
      var pp = new Peter(createVector(random(0, width), random(0, 400)));
      neverland.push(pp);
    }
  }
  if (w > 0) {  //wendy darling!
    for (var s = 0; s <= w; s++) {
      var wd = new Wendy(random(0, width), random(300, 600));
      children.push(wd);
    }
  }
  if (t > 0) {  //tinkerbell!
    for (var d = 0; d <= t; d++) {
      //var tb = new Tinker(random(0, width), random(0, 200));
      var tb = new Tinker(createVector(random(0, width), random(0, 200)));
      fairies.push(tb);
    }
  }
}

function draw() {
  background(255);
  for (var s = 0; s < children.length; s++) {
    children[s].display();
  }
    for (var i = 0; i < neverland.length; i++) {
    neverland[i].update();
  }
  for (var d = 0; d < fairies.length; d++) {
    fairies[d].update();
  }
}

function find(character) {
  var total = 0;
  for (counter = 0; counter < parsedArray.length; counter++) {
    var character_loc = parsedArray[counter];
    if (character_loc == character) {
      total++;
    }
  }
  return total;
}