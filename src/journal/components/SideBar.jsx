import { TurnedInNot} from '@mui/icons-material';
import {Box, Drawer,ListItemIcon ,Toolbar, Typography, Divider,List,ListItemButton,ListItem,Grid,ListItemText} from '@mui/material';

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
      >
      <Drawer
          variant='permanent'
          open
          sx={{
            display: {sx: 'block'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
          }}
        >
          <Toolbar>
            <Typography variant='h6' noWrap component='div'>
              Nahuel De La Cruz
            </Typography>
          </Toolbar>
          <Divider/>
          <List>
            {
              ['Enero','Febrero','Marzo','Abril'].map(text=>(
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot/>
                    </ListItemIcon>
                    <Grid container>
                      <ListItemText primary={text}/>
                      <ListItemText secondary={'Experio iasudhfa df abdfybadsyuf'}/>
                    </Grid>
                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>
      </Drawer>
    </Box>
  )
}