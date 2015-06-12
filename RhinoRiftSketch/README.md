RhinoLucidDreaming:
=================

Video example: (https://www.youtube.com/watch?v=1wqPbEoHS_Y)

**Status**: Proof-of-concept (aka not-even-beta)

**Requirements**: Oculus Rift (tested on DK2 only) w/ SDK installed, Rhino/Grasshopper (with Lunchbox plugin), [MozVR](http://mozvr.com/downloads/), Desktop-as-Webcam driver (e.g.: [Manycam](https://manycam.com/))

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

This is heavily based off of brianpeiris's [RiftSketch](https://github.com/brianpeiris/RiftSketch). 

**Setup**: 
1. Install Manycam or similar software. Manycam allows the desktop to be captured and simulated as a webcam.
2. Setup/plugin Oculus.
3. Open Rhino/Grasshopper, 
2. Run Mongoose (included in the repo) to create a local webserver to access RhinoRiftSketch directory as a webserver. By default, the directory should be exposed at http://localhost:8080
3. Install/Launch MozVR instance, navigate to website.
4.  

