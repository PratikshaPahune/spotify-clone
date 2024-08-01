
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


function Songs() {
  
  const [info,setInfo ]=React.useState([{
    tittle:"Kaakan",
    actors:" Jitendra Joshi And Urmila Kanitkar ",
    img:"https://m.media-amazon.com/images/M/MV5BYWQ0NjQ5ODctYmMzZi00ZDgyLTg0M2YtNzkzODFlNDM3OTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    song:"https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmNBRM?si=82b1f24558264ffe"
 },
 {
  tittle:"Natsamrat",
  actors:"Nana Patekar",
  img:"https://m.media-amazon.com/images/S/pv-target-images/154804f3dfa6e2f85433b4e0dd807818a21d1cf58e3b9cac4b279a8f1c585559.jpg",
  song:""
 },
 {
  tittle:"Duniyadari",
  actors:"Swapnil Joshi",
  img:"https://upload.wikimedia.org/wikipedia/en/8/87/Duniyadari_poster.jpg",
  song:"",

 },
 {
  tittle:"Gold",
  actors:"Akshay Kumar",
  img:"https://i.ytimg.com/vi/gpWrT-LdMfs/maxresdefault.jpg",
  song:""
 },
 {
  tittle:"Classmates",
  actors:"Ankush Choudhary, Sai Tamhankar",
  img:"https://m.media-amazon.com/images/M/MV5BMWJmNGQwNGMtMDkxNC00ZTI3LWFmNTItNjMyMDIxNGZlYTYxXkEyXkFqcGdeQXVyMTgwMjgwMjM@._V1_.j",
  song:""
 },
 {
  tittle:"Rockstar",
  actors:" Ranbir Kapoor and Nargis Fakhri ",
  img:"https://assets-in.bmscdn.com/discovery-catalog/events/et00006184-weffarlgnx-landscape.jpg",
  song:""
 },
 {
  tittle:"Gadar 2",
  actors:"Sunny Deol",
  img:"https://media5.bollywoodhungama.in/wp-content/uploads/2021/10/Gadar-2-1-306x393.jpg",
  song:""
 },
 {
  tittle:"Tanhaji – The Unsung Warrior",
  actors:"Ajay Devgn ",
  img:"https://stat4.bollywoodhungama.in/wp-content/uploads/2020/01/Tanhaji-%E2%80%93-The-Unsung-Warrior-Review-IMG-306x393.jpg",
  song:""
 },
 
 {
  tittle:"PK",
  actors:" Aamir Khan and Anushka Sharma",
  img:"https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/89649841-306x393.jpg",
  song:""
 },
 
 {
  tittle:"Dangal",
  actors:"Aamir Khan",
  img:"https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/Dangal-1-306x393.jpg",
  song:""
 },
 
 {
  tittle:"3 Idiots",
  actors:" Aamir Khan, R. Madhavan and Sharman Joshi ",
  img:"https://stat4.bollywoodhungama.in/wp-content/uploads/2016/05/439543855-306x393.jpg",
  song:""
 },
 
 {
  tittle:"Fighter",
  actors:"Hrithik Roshan",
  img:"https://stat5.bollywoodhungama.in/wp-content/uploads/2021/01/Fighter-rev-306x393.jpg",
  song:""
 },
 
 {
  tittle:"Mission Mangal",
  actors:"Akshay Kumar and Vidya Balan",
  img:"https://stat5.bollywoodhungama.in/wp-content/uploads/2019/08/Mission-Mangal-Review-IMG-306x393.jpg",
  song:""
 },
 
 
])

  return (
    <>
    
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            {info.map((val,index)=>{
               return <Grid item sx={6} md={3}>         
        <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={val["img"]}
       
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {val["tittle"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {val["actors"]}
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link to={`/movies/${val["tittle"]}`}>View</Link>
      
        </Button>
        <Button size="small" color="primary">
        <Link to={`/movies/${val["actors"]}`}>View</Link>
      
        </Button>
      </CardActions>
    </Card>
    
    </Grid>   
        
            })}

</Grid> 

      
      
    </>
  )
}

export default Songs