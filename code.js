var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var cuchau=createSprite(100,130,20,20);
cuchau.shapeColor="green";
var mcqueen=createSprite(215,130,20,20);
mcqueen.shapeColor="orange";
var lightning=createSprite(165,250,20,20);
lightning.shapeColor="purple";
var matter=createSprite(270,250,20,20);
matter.shapeColor="brown";
var jackson=createSprite(190,120,420,3);
jackson.shapeColor="skyblue";
var storm=createSprite(190,260,420,3);
storm.shapeColor="skyblue";
var dinoco=createSprite(20,190,18,18);
dinoco.shapeColor="black";
cuchau.velocityY=8;
mcqueen.velocityY=8;
lightning.velocityY=-8;
matter.velocityY=-8;

function draw() {
background("pink"); 
fill("blue");
rect(0,120,52,140);
fill("red");
rect(345,120,52,140);
if(keyDown("left")){
dinoco.x=dinoco.x-5;
}
if(keyDown("right")){
dinoco.x=dinoco.x+5; 
}
cuchau.bounceOff(storm);
cuchau.bounceOff(jackson);
mcqueen.bounceOff(jackson);
mcqueen.bounceOff(storm);
matter.bounceOff(jackson);
matter.bounceOff(storm);
lightning.bounceOff(jackson);
lightning.bounceOff(storm);

if (dinoco. isTouching(mcqueen)
|| dinoco. isTouching(cuchau)
|| dinoco. isTouching(matter)
|| dinoco. isTouching(lightning)){
dinoco.x=20;
dinoco.y=190;
}
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
