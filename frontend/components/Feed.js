import React from 'react'
import { Box, Stack } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Router , {useRouter}  from 'next/router';

const Feed = () => {
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
        <Card sx={{ maxWidth: "100%", backgroundColor: "#181818", color: "white" }}>
            <CardActionArea>
                <CardContent onClick = {() => {console.log("clicked")}}>
                    <Typography gutterBottom variant="h5" component="div">
                        Google L3 SDE interview experience (offcampus)
                    </Typography>
                    <Typography variant="body2">
                        Author : Prathamesh | Company : Google | Date : 22 Dec 2022
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
                <CardContent onClick={() => Router.push('/login')}>
                    <Typography gutterBottom variant="h5" component="div">
                        Google L3 SDE interview experience (offcampus)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Author : Prathamesh     Company : Google     Date : 22 Dec 2022
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea>
                <CardContent onClick = {console.log("clicked")}>
                    <Typography gutterBottom variant="h5" component="div">
                        Google L3 SDE interview experience (offcampus)
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Author : Prathamesh     Company : Google     Date : 22 Dec 2022
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        
    </Box>
  )
}

export default Feed