import { Grid } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import One from './One'

function Main() {

    const [persons, setPerson] = useState([ ])
    const url = 'https://randomuser.me/api/?results=12'

    useEffect(() => {
      getRandomPerson()
    }, [url])
    

    const getRandomPerson = () => {
        axios.get(url)
        .then((response) => {
            console.log(response)
            setPerson(response.data.results)
           
        })
    }

  return (
    <>
        
        <button onClick={getRandomPerson}>RANDOM USERS</button>
        <Grid container justifyContent = 'center' spacing = {4}>
            {persons.map((person) => (
                <Grid item key = {person.id.value} xs = {12} sm = {6} md = {4} lg={3}>
                    <One person = {person} />
                </Grid>
            ))}
        </Grid>
    </>
  )
}

export default Main