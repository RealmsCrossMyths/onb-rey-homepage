<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.8" tiledversion="1.8.0" name="Warp Decor - Home" tilewidth="64" tileheight="32" tilecount="5" columns="5" objectalignment="bottom">
 <tileoffset x="0" y="-16"/>
 <grid orientation="isometric" width="64" height="32"/>
 <image source="home.png" width="320" height="32"/>
 <tile id="0" type="Home Warp">
  <objectgroup draworder="index" id="2">
   <object id="1" x="11" y="11" width="9" height="9"/>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="50"/>
   <frame tileid="1" duration="50"/>
   <frame tileid="2" duration="50"/>
   <frame tileid="3" duration="50"/>
   <frame tileid="4" duration="50"/>
   <frame tileid="3" duration="50"/>
   <frame tileid="2" duration="50"/>
   <frame tileid="1" duration="50"/>
  </animation>
 </tile>
</tileset>
