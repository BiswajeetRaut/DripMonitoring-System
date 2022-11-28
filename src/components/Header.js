// // import { Avatar } from '@material-ui/core';
// // import { Avatar } from '@mui/material';
// import React from 'react'
// import './Header.css';
// import { Avatar } from "@material-ui/core"
// import AccessTimeIcon from "@material-ui/icons/AccessTime"
// import SearchIcon from "@material-ui/icons/Search"
// import HelpOutlineIcon from "@material-ui/icons/HelpOutline"
// import { useStateValue } from '../StateProvider';
// import { actionTypes } from '../reducer';
// import db from '../firebase';
// const Header = () => {
  
//   const [{user}]= useStateValue();
//   const [state,dispatch]=useStateValue();
//   const signOut =()=>{
//     console.log(user.displayName);
//     dispatch({
//       type:actionTypes.SET_USER,
//       user: null,
//     });
//   }
//   const disp =()=>{
//     var x=document.getElementById('signOut');
//     console.log(x.style.display);
//     if(x.style.display=="none" || x.style.display==" ")
//     {
//       x.style.display="block";
//     }
//     else{
//       x.style.display="none";
//     }
//   }
//   const search=()=>{

//   }
//   return (
//     <div className='header'>
//       <div className="header_left">
//           <Avatar className="header_avatar" 
//           alt={user?.displayName} 
//           src={user?.photoURL}
//           onClick={disp}
//           ></Avatar>
//           <div id="signOut" onClick={signOut}>
//             Sign Out
//           </div>
//           <AccessTimeIcon></AccessTimeIcon>
//       </div>
//       <div className="header_search">
//         <SearchIcon></SearchIcon>
//         <input placeholder='Search V-academics ChatAPP' onChange={search}/>
//       </div>
//       <div className="header_right">
//         <HelpOutlineIcon></HelpOutlineIcon>

//       </div>
//     </div>
//   )
// }

// export default Header
