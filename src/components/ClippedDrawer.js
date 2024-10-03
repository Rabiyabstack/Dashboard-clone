import React, { useState } from 'react';
import { Box, Toolbar, Avatar, Typography, AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider, Tabs, Tab, TextField, Button } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import ErrorIcon from '@mui/icons-material/Error';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventIcon from '@mui/icons-material/Event';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import MailIcon from '@mui/icons-material/Mail';

export default function ClippedDrawer() {
  const icons = [
    <ErrorIcon />,
    <PeopleIcon />,
    <AdminPanelSettingsIcon />,
    <EventAvailableIcon />,
    <EventIcon />,
  ];

  const drawerWidth = 240;

  const rows = [
    { id: 1, firstName: 'Rabiya', lastName: 'Nadeem', email: 'rabiya.nadeem@bkstack.com', age: 22, type: 'App User', lastActive: '12/01/23 @ 12:30pm PT', flaggedItems: 1, status: 'Active' },
    { id: 2, firstName: 'Shifa', lastName: 'Fatima', email: 'shifa@example.com', age: 22, type: 'Verified Business User', lastActive: '12/02/23 @ 12:30pm PT', flaggedItems: 3, status: 'Banned' },
    { id: 3, firstName: 'Amina', lastName: 'Hafeez', email: 'amina@example.com', age: 24, type: 'App User', lastActive: '12/03/23 @ 12:30pm PT', flaggedItems: 2, status: 'Suspended' },
    { id: 4, firstName: 'FirstNAme4', lastName: 'LastName4', email: 'user4@example.com', age: 22, type: 'App User', lastActive: '12/01/23 @ 12:30pm PT', flaggedItems: 1, status: 'Banned' },
    { id: 5, firstName: 'FirstNAme5', lastName: 'LastName5', email: 'user5@example.com', age: 22, type: 'Verified Business User', lastActive: '12/01/23 @ 12:30pm PT', flaggedItems: 1, status: 'Active' },
    { id: 6, firstName: 'FirstNAme6', lastName: 'LastName6', email: 'user6@example.com', age: 22, type: 'App User', lastActive: '12/01/23 @ 12:30pm PT', flaggedItems: 1, status: 'Banned' },
    { id: 7, firstName: 'FirstNAme7', lastName: 'LastName7', email: 'user7@example.com', age: 22, type: 'Verified Business User', lastActive: '12/01/23 @ 12:30pm PT', flaggedItems: 1, status: 'Suspended' },
    { id: 8, firstName: 'FirstNAme8', lastName: 'LastName8', email: 'user8@example.com', age: 22, type: 'App User', lastActive: '12/01/23 @ 12:30pm PT', flaggedItems: 1, status: 'Active' },
    { id: 9, firstName: 'FirstNAme9', lastName: 'LastName9', email: 'user9@example.com', age: 22, type: 'App User', lastActive: '12/01/23 @ 12:30pm PT', flaggedItems: 1, status: 'Suspended' },
      ];

  const columns = [
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
    { field: 'type', headerName: 'Type', width: 200 },
    { field: 'lastActive', headerName: 'Last Active', width: 250 },
    { field: 'flaggedItems', headerName: 'Number of Flagged Items', width: 180 },
  ];

  const [tabIndex, setTabIndex] = useState(0);
  const [filterText, setFilterText] = useState('');

 
  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };


  const filteredRows = rows.filter((row) => {
    const statusFilters = ['Active', 'Suspended', 'Banned'];
    return row.status === statusFilters[tabIndex] && row.firstName.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UON Dashboard
          </Typography>
          <Avatar>A</Avatar>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Flagged Items 100+', 'Users', 'Admin Users', 'Dating Events', 'Events'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icons[index]}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['System Settings', 'System Messages'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{index % 2 === 0 ? <SettingsSuggestIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginTop: '35px', }}
      >
       
        <Typography component="div" sx={{ width: '100%' }}>
          <h3 style={{ backgroundColor: 'lightblue', padding: '10px', width: '100%' }}>UON Users</h3>
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 ,marginTop:"10px"}}>
          <TextField
            placeholder="Search by first name..."
            variant="outlined"
            size="small"
            onChange={(e) => setFilterText(e.target.value)}
            value={filterText}
          />
          <Button variant="contained" color="primary">Filter</Button>
        </Box>

        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Active" />
          <Tab label="Suspended" />
          <Tab label="Banned" />
        </Tabs>

  
       

      
        <Box sx={{ height: 580, width: '100%' }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 25]}
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}  
          />
        </Box>
      </Box>
    </Box>
  );
}
