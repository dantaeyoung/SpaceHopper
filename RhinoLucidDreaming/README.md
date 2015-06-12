RhinoLucidDreaming:
=================

*This is VERY heavily based off of brianpeiris's [RiftSketch](https://github.com/brianpeiris/RiftSketch)*. 


Description & Instructions:
--------------------------

![screenshot](http://i.imgur.com/fatWKOd.png)

Video example: (https://www.youtube.com/watch?v=1wqPbEoHS_Y)

**Status**: Proof-of-concept (aka not-even-beta)

**Requirements**: Windows (tested on Windows 7 so far), Oculus Rift (tested on DK2 only) w/ SDK installed, Rhino 5/Grasshopper (with Lunchbox plugin), [MozVR](http://mozvr.com/downloads/), Desktop-as-Webcam driver (e.g.: [Manycam](https://manycam.com/))

**Description 1**: 

0. You sit at your desk, in front of a computer.
1. You put on your Oculus Rift. 
2. Your eyes adjust: you are sitting at a desk, in front of a computer. 
3. That computer is running Rhino. In that Rhino window, you see a 3d model of a person sitting at a desk, in front of a computer -- that person is you.
4. Any actions you take in Rhino then appear in 'your world'; placing a cube in front of the person in the 3d model subsequently places a cube in front of you. Placing a dome above the 3d-model-you places a dome above you. 
5. On your right, on the desk, is a small model of a miniature person sitting at a miniature desk, in front of a miniature computer.
6. Objects you model in Rhino also appear in that small model. Leaning over the table, you can peer into corners and scrutinize the details of that model.
7. If you wish, you can also crane your neck to your upper left, and realize that there is also a larger version of you, sitting at a desk, in front of a computer.

**Description 2**: 
RhinoLucidDreaming uses the Oculus and a workflow to simulate the creation of an immersive Rhino modeling environment in which 3d modeling will modify the space around you.

**Setup**: 

1. Install Manycam or similar software. Manycam allows the desktop to be captured and simulated as a webcam. Set up your desktop as a webcam in the [Manycam settings](https://manycam.com/user_guide/#Desktop).
2. Setup/plugin Oculus.
3. Open Rhino/Grasshopper, and open `RhinoRiftSketch - LucidDreaming.3dm` and `RhinoRiftSketch - LucidDreaming.ghx` in the `rhinograsshopper/` directory. In Grasshopper, enable the '[Remote Control Panel](http://www.grasshopper3d.com/video/remote-control-panel)' in the 'View' menu.
4. Run Mongoose (included in the repo) to create a local webserver to access RhinoRiftSketch directory as a webserver. By default, the directory should be exposed at http://localhost:8080
5. Install/Launch MozVR instance, navigate to website. MozVR should ask you for permission to view your webcam. Say 'yes', and make sure to direct it to use the Manycam webcam instance. Type `Alt-V` to enter into fullscreen.
6. In the Oculus, you should now see a working 3d environment, with head-tracking and rotation handled by MozVR. A window with your desktop should be floating in front of you. Make Rhino full screen in that desktop.
7. In Rhino, minimize Grasshopper and arrange the Remote Control Panel so that the "SaveOBJ" button is visible.
8. Start modeling in Rhino, in the Oculus/VR world. To update the VR world, click the 'SaveOBJ' button. You'll then have to move your mouse over to the WebVR window, click to change focus, then type `ALT-R`, which will trigger an OBJ refresh in the THREE.js environment.

To-do:
------

- Use Websockets to make clicking 'SaveOBJ' in Grasshopper automatically trigger an OBJ reload.
- Better yet, stream the OBJ data, or a diff of the OBJ to the THREE.js/WebVR environment
- Instead of using the Manycam desktop-as-webcam hack, find a better way to automatically grab the desktop, or bundle it in a nicer way
- Add a second screen for a webcam that shows the keyboard and your hands, like [this video by brianpeiris](https://www.youtube.com/watch?v=SKPYx4CEIlM)
- Include support for OBJ materials - THREE.js [example here](http://threejs.org/examples/webgl_loader_obj_mtl.html).
- Include support for lighting
- Better yet, grab some existing THREE.js/Oculus-integrated 3d rendering platform, since all the THREE.js website is doing is displaying a 3d model (and a webcam screen)
