# rocktest-dcl
Simple scene to show a possible issue with SDK 6.3.0.

Build the scene using decentraland 3.2.5 and decentraland-ecs 6.3.0.

Open the console. When you click on either ball (using a basic SphereShape) its OnClick method logs a unique message.

When you click on any of the other GLTFShape objects, only the first instance of each model logs a message. The 2nd, 3rd, or Nth time the same GLTF model is instantiated, its OnClick (and other components) don't seem to work.

When this scene is built using decentraland-ecs 6.2.3 it all works, though.
