<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.0" name="Nature - Rainbow Cybernet Pine" tilewidth="64" tileheight="67" tilecount="4" columns="4" objectalignment="bottom">
 <tileoffset x="0" y="16"/>
 <grid orientation="orthogonal" width="64" height="32"/>
 <properties>
  <property name="Solid" type="bool" value="true"/>
 </properties>
 <image source="cybow_pine.png" width="256" height="67"/>
 <tile id="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="12" y="40" width="40" height="21">
    <ellipse/>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="200"/>
   <frame tileid="1" duration="200"/>
   <frame tileid="2" duration="200"/>
   <frame tileid="3" duration="200"/>
   <frame tileid="2" duration="200"/>
   <frame tileid="1" duration="200"/>
  </animation>
 </tile>
</tileset>
