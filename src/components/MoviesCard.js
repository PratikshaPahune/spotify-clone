import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FaSpotify } from 'react-icons/fa';
import { Grid } from '@mui/material';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



function MoviesCard() {
    const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [song, setSong] = React.useState();

  const movie = {
    name: "Barfi!",
    actors: " Ranbir Kapoor, Priyanka Chopra, and Ileana D'Cruz ",
    descp :"The film marks Pritam's third collaboration with Basu after Gangster (2006) and Life in a... Metro (2007). The album was under-development, when the film was in post-production stage and was completed only by early-August 2012.",
    songs: [

        {name: "Main Kya Karoon",singers:"Nikhil Paul George", link: "https://raag.fm/files/mp3/128/Hindi/3129488/Main%20Kya%20Karoon%20-%20(Raag.Fm).mp3"},
        {name: "Aashiyan",singers:"Nikhil Paul George", link: "https://raag.fm/files/mp3/128/Hindi/1062298/Aashiyan%20-%20(Raag.Fm).mp3"},
        {name: "Kyon",singers:"Sunidhi Chauhan, Papon", link: "https://raag.fm/files/mp3/128/Hindi/1062298/Kyon%20-%20(Raag.Fm).mp3"},
        {name: "Ala Barfi",singers:"Mohit Chauhan", link: "https://raag.fm/files/mp3/128/Hindi/3129488/Ala%20Barfi%20-%20(Raag.Fm).mp3"},
        {name: "Saawali Si Raat",singers:"Arijit Singh", link: "https://raag.fm/files/mp3/128/Hindi/3129488/Saawali%20Si%20Raat%20-%20(Raag.Fm).mp3"},
        {name: "Phir Le Aya Dil",singers:"Rekha Bhardwaj", link: "https://raag.fm/files/mp3/128/Hindi/3129488/Phir%20Le%20Aya%20Dil%20-%20(Raag.Fm).mp3"}
    ]
  }

  return (
   <>
  
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <h2><FaSpotify /></h2> 
          <Typography variant="h6" noWrap component="div">
          
            <h3>SPOTIFY</h3> 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
          
          <Grid container spacing={2}>
            <Grid item md={4}>
            <img
            srcSet={`https://mir-s3-cdn-cf.behance.net/project_modules/1400/4638eb98043521.5ed3715a7f9be.jpg`}
            src={`https://mir-s3-cdn-cf.behance.net/project_modules/1400/4638eb98043521.5ed3715a7f9be.jpg`}
            loading="lazy"
            width={250}
            height={250}
          />
            </Grid>
            <Grid item md={8}>
                        <Typography gutterBottom variant="h5" component="div">
                        {movie.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {movie.actors} 
                        </Typography>
                        <Typography variant="body3" color="text.secondary">
                        {movie.descp} 
                        </Typography>
                        
                        
            </Grid>
            </Grid>

            <Grid container spacing={2}>
         <Grid item>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    movie.songs.map((val, index)=>{
                        return <ListItem>
                        <ListItemAvatar>
                        <Avatar onClick={()=>{
                            console.log("clicked", val.link);
                            setSong(val.link);
                        }}>
                            <PlayCircleIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={val.name} secondary={val.singers} />
                    </ListItem>
                    })
                }
                </List>
            </Grid>
        </Grid>

        <AudioPlayer
                autoPlay
                src={song}
                onPlay={e => console.log("onPlay")}
                
            />
      </Main>
    </Box>

   </>
  )
}

export default MoviesCard