import React from 'react'

import {Grid,Card} from '@mui/material'

const CharacterGrid = ({characterList}) => {
  return (
    <Grid container>
        {
            characterList.map((character)=> (
                <Grid item>
                    <Card>
                        Chutiya hai vroo?
                    </Card>
                </Grid>
            ))
        }
    </Grid>
  )
}

export default CharacterGrid