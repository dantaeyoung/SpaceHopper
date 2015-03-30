# SpaceHopper
Rhino/Grasshopper fun that deals with physical/virtual space

**RazerHydraObjectManipulation.gh**:

**Requirements**: Razer Hydra, the [Hydra-OSC](https://github.com/MrMormon/hydra-osc) executable, Rhino/Grasshopper (with gHowl, Human, Starling plugins)

**Description**: This component lets you select objects (Breps, Meshes, Points, Surfaces) with your mouse; once selected, you can use the left controller (and the 'bumper' button on the controller) of the Razer Hydra to move and place it elsewhere in Rhino space.

If nothing is selected, then by default the bumper button will place points in Rhino space. These points will turn into a solid volume (via a 3d convex hull algorithm). Holding the 'trigger' button while pressing the button will place points that will turn into a negative volume, cutting out portions of the volume.

NOTE: This component has some very helpful quaternion-to-rotation-matrix code that will be helpful when converting Razer Hydra / Oculus Rift rotation data in an accurate way.




