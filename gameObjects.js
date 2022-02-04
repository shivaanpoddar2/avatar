AFRAME.registerComponent("wire-fence", {
  init: function () {
    //starting x position
    posX = -20;
    //starting z-position
    posZ = 85;

    for (var i = 0; i < 10; i++) {
      //create wire-fence entity
      var wireFence1 = document.createElement("a-entity");
      var wireFence2 = document.createElement("a-entity");
      var wireFence3 = document.createElement("a-entity");
      var wireFence4 = document.createElement("a-entity");


      //set x, y and z position
      posX = posX + 5;
      posY = posY - 1;
      posZ = posZ - 10;

      //scale 
      var scale = { x: 50, y: 50, z: 50 };

      //set the id
      wireFence1.setAttribute("id", "wireFence1" + i);
      wireFence2.setAttribute("id", "wireFence2" + i);
      wireFence3.setAttribute("id", "wireFence3" + i);
      wireFence4.setAttribute("id", "wireFence4" + i);

      //set the position
      wireFence1.setAttribute("position", { x: posX, y: posY, z: -35 });
      wireFence2.setAttribute("position", { x: posX, y: posY, z: 85 });
      wireFence3.setAttribute("position", { x: -30, y: posY, z: posZ });
      wireFence4.setAttribute("position", { x: 50, y: posY, z: posZ });

      //set the scale
      wireFence1.setAttribute("scale", scale);
      wireFence2.setAttribute("scale", scale);
      wireFence3.setAttribute("scale", scale);
      wireFence4.setAttribute("scale", scale);

      //set the model
      wireFence1.setAttribute(
        "gltf-model",
        "./assets/flying_bird/scene.gltf"
      );

      wireFence2.setAttribute(
        "gltf-model",
        "./assets/flying_bird/scene.gltf"
      );

      wireFence3.setAttribute(
        "gltf-model",
        "./assets/flying_bird/scene.gltf"
      );

      wireFence4.setAttribute(
        "gltf-model",
        "./assets/flying_bird/scene.gltf"
      );

      //set the rotation
      wireFence3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      wireFence4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      //set the physics body
      wireFence1.setAttribute("static-body", {});
      wireFence2.setAttribute("static-body", {});
      wireFence3.setAttribute("static-body", {});
      wireFence4.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(wireFence1);
      sceneEl.appendChild(wireFence2);
      sceneEl.appendChild(wireFence3);
      sceneEl.appendChild(wireFence4);

    }
  },
});


