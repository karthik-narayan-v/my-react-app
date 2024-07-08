import React, { useEffect, useState } from 'react';
import { getAllObjects } from '../api/ObjectApiUtils';
import { Chip, Stack } from '@mui/material';
export const Home = ()=> {
    const [objects,setObjects]=useState<any>();
    useEffect(()=>{
        setObjects(getAllObjects());
    },[])
    return (
    <Stack direction="row" spacing={1}>
        {objects?.forEach((element:any) => {
            <Chip label={element.name}  />
        })}
      </Stack>
    );
} 