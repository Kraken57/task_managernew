import OpenIcon from "@mui/icons-material/Launch";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";



const BoardCard = () => {
  return (
    <Grid item xs={3}>
              <Stack 
              p={2} 
              bgcolor="background.paper" 
              borderLeft="5px solid" 
              borderColor="white"
              >
                <Stack 
                direction='row' 
                justifyContent= 'space-between' 
                alignItems='center'
                >
                    <Box width="50%">
                    <Typography textOverflow={"ellipsis"} overflow="hidden" whiteSpace={"nowrap"} fontWeight={400} variant='h6'>
                        Board nameBoard nameBoard nameBoard name
                    </Typography>
                    </Box>

                    <IconButton size ="small">
                        <OpenIcon />
                    </IconButton>

                </Stack>
                <Typography variant='caption'>Created at: 21/10/2023</Typography>
              </Stack> 
            </Grid>
  );
};

export default BoardCard;