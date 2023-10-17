<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.0" name="Stairs - Gobby Sampler" tilewidth="64" tileheight="57" tilecount="6" columns="3" objectalignment="bottom">
 <tileoffset x="0" y="9"/>
 <image source="gobby-sampler2.png" width="192" height="114"/>
 <tile id="0" type="Stairs">
  <properties>
   <property name="Direction" value="Up Left"/>
  </properties>
 </tile>
 <tile id="1" type="Stairs">
  <properties>
   <property name="Direction" value="Up Left"/>
  </properties>
 </tile>
 <tile id="2">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="16" width="58" height="35"/>
  </objectgroup>
 </tile>
 <tile id="3" type="Stairs">
  <properties>
   <property name="Direction" value="Down Left"/>
  </properties>
 <tile id="4" type="Stairs"/>
</tileset>
