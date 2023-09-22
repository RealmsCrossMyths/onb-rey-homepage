<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.0" name="Nature - Tree" tilewidth="44" tileheight="61" tilecount="4" columns="4" objectalignment="bottomleft">
 <tileoffset x="11" y="-6"/>
 <grid orientation="isometric" width="64" height="32"/>
 <properties>
  <property name="Solid" type="bool" value="true"/>
 </properties>
 <image source="tree.png" width="176" height="61"/>
 <tile id="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="11" width="32" height="32">
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
