//import ka matlab lana hota hay ,matlab kahe say lana
//export ka matlab hay is page say kahe export karna
import React from 'react';
import ReactDOM from 'react-dom';
//yaha ham css ki file import kar rhy hay folder src may hi hay 
//tou hamy ek jana hay yani is folder say nikalna hay tou ek ./ use hoga
//forward tu ham normally acces karny kay lia use karty hay jesy ham folder wagera
//ko jab link may day rhy hoo tab bhi use karty hay forward slash ammomman
//dot yaha ham nay isi lia dia hay kio kay hamy is file say bahir jana hay
//matlab hamary data is file say dot ki maadad say bahir nikalay ga phir forward
//slash app.css kay andar enter hoga ham nay dot isi lia dia hay kio kay is file say bahir nikalna hay
//forward slash tab use karty hay jab kisi folder kay andar ghussana hoo aur dot tab jab khud
//ki file say bahir nikalna hoo 
//like
import "./App.css"; 
//yah ek variable hay props
function Hi(props) {


  return <div class="hllo">
   {/* //yah procedure hay image ka
   //process.env means environment hay kn sa environmnt public folder ka
   //phir .kar kay public folder ka url day gay 
   //sath may plus phir image ka folder us may pic dal di
   //images basically public kay folder may hi rakty hay
   //src may tu javascript or css ki files hoti hay
   //or yah braces may hay kio kay javascript ka code hay process.env */}
   <img src={process.env.PUBLIC_URL+"images/guns.jpg"} width="120px" height="140px"></img>

  </div>



}

ReactDOM.render(<div><Hi /></div>, document.querySelector('#root'));
