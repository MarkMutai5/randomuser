import { Card, Typography, CardContent, CardMedia} from '@mui/material'
import React from 'react'


function One({person}) {
    
  return (
    <>
             
                
        <Card style={{width: 220,
             padding: 10, 
             margin:15}}>
            <CardMedia 
                sx={{ maxWidth: 250 }}
                component = "img"
                image = {person.picture.large}
                alt = "pic"/>
            <CardContent>
                <Typography gutterBottom variant = "h5">
                    {person.name.first + ' ' + person.name.last}
                </Typography>
                <Typography gutterBottom variant = "body2">
                    {person.email}
                </Typography>
                <Typography gutterBottom variant = "body2">
                    {person.cell}
                </Typography>
            </CardContent>
        </Card>
    </>
  )
}

export default One