import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Grid2,
  Button,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import React from 'react';
import { PhotoCamera } from '@mui/icons-material';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Component_1: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera sx={{ marginRight: '20px' }} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ backgroundColor: '#fff', padding: '64px 0 48px' }}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" display="block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere natus error, adipisci
              velit optio sequi asperiores illum! Tenetur deserunt mollitia illo maiores! Minima
              perspiciatis quos esse alias fugit dolor rerum!
            </Typography>
            <Box sx={{ marginTop: '40px' }}>
              <Grid2 container spacing={2} justifyContent="center">
                <Grid2>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid2>
                <Grid2>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid2>
              </Grid2>
            </Box>
          </Container>
        </Box>
        <Container maxWidth="md" sx={{ padding: '20px' }}>
          <Grid2 container spacing={4}>
            {cards.map((card) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={card}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    sx={{ paddingTop: '56.25%' }}
                    image="https://picsum.photos/600/400"
                    title="image title"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>This is a media card.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </main>
      <Box component="footer" sx={{ backgroundColor: '#fff', padding: '50px 0' }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </>
  );
};

export default Component_1;
