<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.0" name="Nature - Cybernet Pine" tilewidth="42" tileheight="61" tilecount="4" columns="4" objectalignment="bottom">
 <tileoffset x="0" y="11"/>
 <grid orientation="orthogonal" width="64" height="32"/>
 <properties>
  <property name="Solid" type="bool" value="true"/>
 </properties>
 <image source="cyber_pine.png" width="168" height="61"/>
 <tile id="0">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="39" width="42" height="22">
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
