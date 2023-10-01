<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.0" name="Door - Skull Gate" tilewidth="34" tileheight="52" tilecount="5" columns="5" objectalignment="bottom">
 <tileoffset x="0" y="9"/>
 <grid orientation="orthogonal" width="64" height="32"/>
 <properties>
  <property name="Solid" type="bool" value="true"/>
 </properties>
 <image source="skull_gate.png" width="170" height="52"/>
 <tile id="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="-9" y="38">
    <polygon points="-3,-2 6,-8 48,13 41,20"/>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="50"/>
   <frame tileid="1" duration="50"/>
   <frame tileid="2" duration="50"/>
   <frame tileid="1" duration="50"/>
  </animation>
 </tile>
</tileset>
