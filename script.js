
function preload() {
    windowWidth =600
    windowHeight = 600
  w = windowWidth
  h =  windowHeight
  WeIsDone = loadImage("DONE.png")
  score = 0
  Cal = false
  correct = loadSound("correct.mp3");
  wrong = loadSound("wrong.mp3")
  character_placement = windowWidth / 2- windowWidth / 16
  character_y = windowHeight - windowHeight/16
}
var struggles = []
function setup() {
  createCanvas(windowWidth, windowHeight);
  class button {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.character = ""
      this.height = h / 20
      this.width = w / 5.5
      this.beep = false
    }
    decide() {
      if (!(this.character.length >= 2)) {
        if (this.y === 1 * windowHeight / 15 + windowHeight / 10) {
          this.character = this.character + "k"
        } else if (this.y === 2 * windowHeight / 15 + windowHeight / 10) {
          this.character = this.character + "s"
        } else if (this.y === 3 * windowHeight / 15 + windowHeight / 10) {
          this.character = this.character + "t"
        } else if (this.y === 4 * windowHeight / 15 + windowHeight / 10) {
          this.character = this.character + "n"
        } else if (this.y === 5 * windowHeight / 15 + windowHeight / 10) {
          this.character = this.character + "h"
        } else if (this.y === 6 * windowHeight / 15 + windowHeight / 10) {
          this.character = this.character + "m"
        } else if (this.y === 7 * windowHeight / 15 + windowHeight / 10) {
          this.character = this.character + "y"
        } else if (this.y === 8 * windowHeight / 15 + windowHeight / 10) {
          this.character = this.character + "r"
        } else if (this.y === 9 * windowHeight / 15 + windowHeight / 10) {
          this.character = this.character + "w"
        } else if (this.y === 10 * windowHeight / 15 + windowHeight / 10) {
          this.character = "nm"
        }
        if (this.x === 0 * windowWidth / 5 + windowWidth / 100) {
          this.character = this.character + "a"
        } else if (this.x === 1 * windowWidth / 5 + windowWidth / 100) {
          this.character = this.character + "i"
        } else if (this.x === 2 * windowWidth / 5 + windowWidth / 100) {
          this.character = this.character + "u"
        } else if (this.x === 3 * windowWidth / 5 + windowWidth / 100) {
          this.character = this.character + "e"
        } else if (this.x === 4 * windowWidth / 5 + windowWidth / 100) {
          this.character = this.character + "o"
        }
        if (this.character === "si") {
          this.character = "shi"
        } else if (this.character === "ti") {
          this.character = "chi"
        } else if (this.character === "tu") {
          this.character = "tsu"
        } else if (this.character === "yi") {
          this.character = ""
        } else if (this.character === "ye") {
          this.character = ""
        } else if (this.character === "wi") {
          this.character = ""
        } else if (this.character === "wu") {
          this.character = ""
        } else if (this.character === "we") {
          this.character = ""
        } else if (this.character === "hu") {
          this.character = "fu"
        } else if (this.character === "aa") {
          this.character = "a"
        } else if (this.character === "ii") {
          this.character = "i"
        } else if (this.character === "uu") {
          this.character = "u"
        } else if (this.character === "ee") {
          this.character = "e"
        } else if (this.character === "oo") {
          this.character = "o"
        } else if (this.character === "nma") {
          this.character = "n"
        }
      }
    }
    do() {
      fill(255, 255, 255);
      rect(this.x, this.y, this.width, this.height);
      textSize(20)
      if (this.beep === false) {
        fill(0, 0, 0)
        text(this.character, this.width / 2 + this.x, this.height / 2 + this.y);
      } else {
        fill(0, 0, 0)
        text("✓", this.width / 2 + this.x, this.height / 2 + this.y);
      }
      //✓
      if (mouseX > this.x && mouseX < this.width + this.x && mouseY > this.y && mouseY < this.y + this.height && rehehehe()){
        if(curCharacter == this.character){
            this.beep = true;
            characters.splice(randomNumber, 1);
            correct.play();
            randomNumber = Math.floor(Math.random() * characters.length);
            curCharacter = characters[randomNumber];
        }else{
            mistakes++;//THIS IS THE MISTAKES
            struggles.push(this.character)
            wrong.play()
            console.log(curCharacter);
        }
      }
    }
  }
  for (let r = 0; r < 10; r++) {
    for (let i = 0; i < 5; i++) {
      buttons.push(new button(i * windowWidth / 5 + windowWidth / 100, r * windowHeight / 15 + windowHeight / 10));
      randomNumber = Math.floor(Math.random() * characters.length);
      curCharacter = characters[randomNumber]
    }
  }
  buttons.push(new button(0 * windowWidth / 5 + windowWidth / 100, 10 * windowHeight / 15 + windowHeight / 10));
}
var prevPressed = true;
var curPressed = false
function rehehehe(){
    prevPressed = curPressed;
    curPressed = mouseIsPressed;
    if(curPressed === false && prevPressed === true){
        return true;
    }else{
        return false;
    }
}
var buttons = []
var characters = ["a", "i", "u", "e", "o", "ka", "ki", "ku", "ke", "ko", "sa", "shi", "su", "se", "so", "ta", "chi", "tsu", "te", "to", "na", "ni", "nu", "ne", "no", "ha", "hi", "fu", "he", "ho", "ma", "mi", "mu", "me", "mo", "ya", "yu", "yo", "ra", "ri", "ru", "re", "ro", "wa", "wo", "n"]
var randomNumber = Math.floor(Math.random() * characters.length);
var curCharacter = characters[randomNumber]
function draw() {
  background(WeIsDone);
  if (characters.length === 0) {
    if(Cal === false){
      score = Date.now() - start;
      Cal = true;
    }
    stroke(255,255,255)
    strokeWeight(10)
    for(let i = 0; i < struggles.length; i++){
      if (struggles[i] === "a") {
        struggles.splice(i, 1, "あ");
      } else if (struggles[i] === "i") {
        struggles.splice(i, 1, "い");
      } else if (struggles[i] === "u") {
        struggles.splice(i, 1, "う");
      } else if (struggles[i] === "e") {
        struggles.splice(i, 1, "え");
      } else if (struggles[i] === "o") {
        struggles.splice(i, 1, "お");
      } else if (struggles[i] === "ka") {
        struggles.splice(i, 1, "か");
      } else if (struggles[i] === "ki") {
        struggles.splice(i, 1, "き");
      } else if (struggles[i] === "ku") {
        struggles.splice(i, 1, "く");
      } else if (struggles[i] === "ke") {
        struggles.splice(i, 1, "け");
      } else if (struggles[i] === "ko") {
        struggles.splice(i, 1, "こ");
      } else if (struggles[i] === "sa") {
        struggles.splice(i, 1, "さ");
      } else if (struggles[i] === "shi") {
        struggles.splice(i, 1, "し");
      } else if (struggles[i] === "su") {
        struggles.splice(i, 1, "す");
      } else if (struggles[i] === "se") {
        struggles.splice(i, 1, "せ");
      } else if (struggles[i] === "so") {
        struggles.splice(i, 1, "そ");
      } else if (struggles[i] === "ta") {
        struggles.splice(i, 1, "た");
      } else if (struggles[i] === "chi") {
        struggles.splice(i, 1, "ち");
      } else if (struggles[i] === "tsu") {
        struggles.splice(i, 1, "つ");
      } else if (struggles[i] === "te") {
        struggles.splice(i, 1, "て");
      } else if (struggles[i] === "to") {
        struggles.splice(i, 1, "と");
      } else if (struggles[i] === "na") {
        struggles.splice(i, 1, "な");
      } else if (struggles[i] === "ni") {
        struggles.splice(i, 1, "に");
      } else if (struggles[i] === "nu") {
        struggles.splice(i, 1, "ぬ");
      } else if (struggles[i] === "ne") {
        struggles.splice(i, 1, "ね");
      } else if (struggles[i] === "no") {
        struggles.splice(i, 1, "の");
      } else if (struggles[i] === "ha") {
        struggles.splice(i, 1, "は");
      } else if (struggles[i] === "hi") {
        struggles.splice(i, 1, "ひ");
      } else if (struggles[i] === "fu") {
        struggles.splice(i, 1, "ふ");
      } else if (struggles[i] === "he") {
        struggles.splice(i, 1, "へ");
      } else if (struggles[i] === "ho") {
        struggles.splice(i, 1, "ほ");
      } else if (struggles[i] === "ma") {
        struggles.splice(i, 1, "ま");
      } else if (struggles[i] === "mi") {
        struggles.splice(i, 1, "み");
      } else if (struggles[i] === "mu") {
        struggles.splice(i, 1, "む");
      } else if (struggles[i] === "me") {
        struggles.splice(i, 1, "め");
      } else if (struggles[i] === "mo") {
        struggles.splice(i, 1, "も");
      } else if (struggles[i] === "ya") {
        struggles.splice(i, 1, "や");
      } else if (struggles[i] === "yu") {
        struggles.splice(i, 1, "ゆ");
      } else if (struggles[i] === "yo") {
        struggles.splice(i, 1, "よ");
      } else if (struggles[i] === "ra") {
        struggles.splice(i, 1, "ら");
      } else if (struggles[i] === "ri") {
        struggles.splice(i, 1, "り");
      } else if (struggles[i] === "ru") {
        struggles.splice(i, 1, "る");
      } else if (struggles[i] === "re") {
        struggles.splice(i, 1, "れ");
      } else if (struggles[i] === "ro") {
        struggles.splice(i, 1, "ろ");
      } else if (struggles[i] === "wa") {
        struggles.splice(i, 1, "わ");
      } else if (struggles[i] === "wo") {
        struggles.splice(i, 1, "を");
      } else if (struggles[i] === "n") {
        struggles.splice(i, 1, "ん");
      }
    }
   struggles = struggles.filter((item,index) => struggles.indexOf(item) === index);
    textWrap(CHAR);
    textSize(100)
    textWrap(CHAR);
    textSize(50);
    text(minutes+"m"+seconds+"s", 0, windowHeight/8,600);
    textWrap(CHAR);
    text("# of mistakes "+mistakes, 0, windowHeight/8+100,600);
    textSize(25)
    textWrap(CHAR);
    if(struggles.length >= 1){
    text("characters you stuggle with; "+ struggles,0, windowHeight/8 + 200,600);
    }else{
        text("characters you stuggle with; NONE!!!",0, windowHeight/8 + 200,600);
    }
    textWrap(CHAR);
  } else {
    fill(255, 255, 255);
    [...buttons].forEach(object => object.decide());
    [...buttons].forEach(object => object.do());
    fill(255, 255, 255)
    rect(windowWidth / 4, windowHeight - windowHeight / 5, windowWidth / 2, windowHeight / 5);
    fill(0, 0, 0)
    textSize(100)
    if (curCharacter === "a") {
      text("あ", character_placement,  character_y);
    } else if (curCharacter === "i") {
      text("い", character_placement,  character_y);
    } else if (curCharacter === "u") {
      text("う", character_placement,  character_y);
    } else if (curCharacter === "e") {
      text("え", character_placement,  character_y);
    } else if (curCharacter === "o") {
      text("お", character_placement,  character_y);
    } else if (curCharacter === "ka") {
      text("か", character_placement,  character_y);
    } else if (curCharacter === "ki") {
      text("き", character_placement,  character_y);
    } else if (curCharacter === "ku") {
      text("く", character_placement,  character_y);
    } else if (curCharacter === "ke") {
      text("け", character_placement,  character_y);
    } else if (curCharacter === "ko") {
      text("こ", character_placement,  character_y);
    } else if (curCharacter === "sa") {
      text("さ", character_placement,  character_y);
    } else if (curCharacter === "shi") {
      text("し", character_placement,  character_y);
    } else if (curCharacter === "su") {
      text("す", character_placement,  character_y);
    } else if (curCharacter === "se") {
      text("せ", character_placement,  character_y);
    } else if (curCharacter === "so") {
      text("そ", character_placement,  character_y);
    } else if (curCharacter === "ta") {
      text("た", character_placement,  character_y);
    } else if (curCharacter === "chi") {
      text("ち", character_placement,  character_y);
    } else if (curCharacter === "tsu") {
      text("つ", character_placement,  character_y);
    } else if (curCharacter === "te") {
      text("て", character_placement,  character_y);
    } else if (curCharacter === "to") {
      text("と", character_placement,  character_y);
    } else if (curCharacter === "na") {
      text("な", character_placement,  character_y);
    } else if (curCharacter === "ni") {
      text("に", character_placement,  character_y);
    } else if (curCharacter === "nu") {
      text("ぬ", character_placement,  character_y);
    } else if (curCharacter === "ne") {
      text("ね", character_placement,  character_y);
    } else if (curCharacter === "no") {
      text("の", character_placement,  character_y);
    } else if (curCharacter === "ha") {
      text("は", character_placement,  character_y);
    } else if (curCharacter === "hi") {
      text("ひ", character_placement,  character_y);
    } else if (curCharacter === "fu") {
      text("ふ", character_placement,  character_y);
    } else if (curCharacter === "he") {
      text("へ", character_placement,  character_y);
    } else if (curCharacter === "ho") {
      text("ほ", character_placement,  character_y);
    } else if (curCharacter === "ma") {
      text("ま", character_placement,  character_y);
    } else if (curCharacter === "mi") {
      text("み", character_placement,  character_y);
    } else if (curCharacter === "mu") {
      text("む", character_placement,  character_y);
    } else if (curCharacter === "me") {
      text("め", character_placement,  character_y);
    } else if (curCharacter === "mo") {
      text("も", character_placement,  character_y);
    } else if (curCharacter === "ya") {
      text("や", character_placement,  character_y);
    } else if (curCharacter === "yu") {
      text("ゆ", character_placement,  character_y);
    } else if (curCharacter === "yo") {
      text("よ", character_placement,  character_y);
    } else if (curCharacter === "ra") {
      text("ら", character_placement,  character_y);
    } else if (curCharacter === "ri") {
      text("り", character_placement,  character_y);
    } else if (curCharacter === "ru") {
      text("る", character_placement,  character_y);
    } else if (curCharacter === "re") {
      text("れ", character_placement,  character_y);
    } else if (curCharacter === "ro") {
      text("ろ", character_placement,  character_y);
    } else if (curCharacter === "wa") {
      text("わ", character_placement,  character_y);
    } else if (curCharacter === "wo") {
      text("を", character_placement,  character_y);
    } else if (curCharacter === "n") {
      text("ん", character_placement,  character_y);
    }
  }
  if(score > 1000){
    score = score -1000;
    seconds ++;
  }
  if(seconds >= 60){
    seconds -= 60;
    minutes++;
  }
}