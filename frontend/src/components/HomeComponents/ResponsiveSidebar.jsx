// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './HomeSidebar.scss';

// import { ListItem } from '@material-ui/core';
// import { AccountBalanceWallet, Dashboard } from '@material-ui/icons';
// import ForumIcon from '@material-ui/icons/Forum';
// import ImportExportIcon from '@material-ui/icons/ImportExport';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// const Sidebar = () => {
//   const [selectedIndex, setSelectedIndex] = useState(1);

//   const handleListItemClick = (event, index) => setSelectedIndex(index);

//   return (
//     <>
//       <div className='sidebar'>
//         <div className='sidebar-logo'>
//           <i className='fas fa-file-code'></i>
//           <h3 style={{ color: '#001E6C' }}>
//             Fortech
//             <span style={{ color: 'red', fontSize: 28 }}>.</span>
//           </h3>
//         </div>
//         <div className='sidebar-container'>
//           <Link to='/'>
//             <ListItem
//               className='sidebar-item-0'
//               selected={selectedIndex === 0}
//               onClick={(event) => handleListItemClick(event, 0)}
//             >
//               <Dashboard />
//               Dashboard
//             </ListItem>
//           </Link>
//           <Link to='/'>
//             <ListItem
//               className='sidebar-item-1'
//               selected={selectedIndex === 1}
//               onClick={(event) => handleListItemClick(event, 1)}
//             >
//               <AccountBalanceWallet />
//               Wallet
//             </ListItem>
//           </Link>{' '}
//           <Link to='/'>
//             <ListItem
//               className='sidebar-item-2'
//               selected={selectedIndex === 2}
//               onClick={(event) => handleListItemClick(event, 2)}
//             >
//               <ForumIcon />
//               Messages
//             </ListItem>{' '}
//           </Link>{' '}
//           <Link to='/'>
//             <ListItem
//               className='sidebar-item-3'
//               selected={selectedIndex === 3}
//               onClick={(event) => handleListItemClick(event, 3)}
//             >
//               <ImportExportIcon />
//               Trade
//             </ListItem>
//           </Link>{' '}
//           <Link to='/'>
//             <ListItem
//               className='sidebar-item-4'
//               selected={selectedIndex === 4}
//               onClick={(event) => handleListItemClick(event, 4)}
//             >
//               <AccountCircleIcon /> Account Setting
//             </ListItem>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
