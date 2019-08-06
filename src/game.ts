/// --- Spawner functions ---

function spawnModel(filename: string, x: number, y: number, z: number, scaleX: number = 1, scaleY: number = 1, scaleZ: number = 1) {

  const mod = new Entity();
  mod.addComponent(new GLTFShape("models/" + filename));
  mod.addComponent(new Transform({ position: new Vector3(x, y, z), scale: new Vector3(scaleX, scaleY, scaleZ) }));

  engine.addEntity(mod);
  return mod;
}

function spawnRock(x: number, y: number, z: number, scaleX: number = 1, scaleY: number = 1, scaleZ: number = 1, startVel:number = 40)
{
  const rock = spawnModel("rock1.gltf", x, y, z, scaleX, scaleY, scaleZ);
  return rock;
}

function spawnBall(x: number, y: number, z: number, mass:float = 1, bounce:float = 0.7) 
{
  const ball = new Entity();
  ball.addComponent(new Transform({ position: new Vector3(x, y, z), scale: new Vector3(0.2, 0.2, 0.2) }));
  ball.addComponent(new SphereShape());

  engine.addEntity(ball);
  return ball;
}

/// USE BASIC SHAPES AS A CONTROL

const ball1 = spawnBall(3, 0.1, 3);
ball1.addComponentOrReplace(
  new OnClick(e => {
    log("I am ball1");
  })
)
const ball2 = spawnBall(4, 0.1, 3);
ball2.addComponentOrReplace(
  new OnClick(e => {
    log("I am ball2");
  })
)

/// SAME MODEL, NOT RE-USING GLTF SHAPES

// rocks on the ground
let r1:Entity = spawnRock(3, 0.1, 6, 0.25, 0.25, 0.25, 50);
r1.addComponentOrReplace(
  new OnClick(e => {
    log("I am r1");
  })
)

let r2:Entity = spawnRock(4, 0.1, 6, 0.30, 0.30, 0.25, 50);
r2.addComponentOrReplace(
  new OnClick(e => {
    log("I am r2");
  })
)

/// SAME MODEL, RE-USING GLTF SHAPES

// brute force code, to see it in detail 
const coin1 = new Entity();
let coinShape:GLTFShape = new GLTFShape("models/" + "coin_model.glb");
coin1.addComponent(coinShape);
coin1.addComponent(new Transform({ position: new Vector3(3, 0.1, 9), scale: new Vector3(0.5, 0.5, 0.5) }));
engine.addEntity(coin1);

coin1.addComponentOrReplace(
    new OnClick(e => {
      log("I am coin1");
    })
  )


const coin2 = new Entity();
//let coinShape2:GLTFShape = new GLTFShape("models/" + "coin_model.glb");
coin2.addComponent(coinShape);
coin2.addComponent(new Transform({ position: new Vector3(4, 0.1, 9), scale: new Vector3(0.5, 0.5, 0.5) }));
engine.addEntity(coin2);

coin2.addComponentOrReplace(
  new OnClick(e => {
    log("I am coin2");
  })
)

/// EVERYBODY LOVES CARROTS

const carrot1 = spawnModel("carrot_model.glb", 3, 0.1, 12, 0.5, 0.5, 0.5);
carrot1.addComponent(
  new OnClick(e => {
    log("I am carrot1");
  })
)

const carrot2 = spawnModel("carrot_model.glb", 4, 0.1, 12, 0.5, 0.5, 0.5);
carrot2.addComponent(
  new OnClick(e => {
    log("I am carrot2");
  })
)