import React from 'react';
import { Grid, Typography,Card,CardContent, TextField, Button, Select, MenuItem } from '@mui/material';

const CategorizationPage = () => {
  const categories = ['Loisirs', 'Alimentation', 'Transport', 'Autre'];

  const handleCategorize = () => {
    // Logique pour catégoriser l'opération bancaire
  };

  return (
    <Grid container spacing={2} style={{ backgroundColor: '#f5f5f5', marginTop:"1px" }}>
      <Grid item xs={12}>
        <Card raised style={{ backgroundColor: '#fff', padding: 'auto',height:'70px' }}>
          <CardContent>
            <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '10px' }}>
              Catégorisation des opérations bancaires
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label="Description de l'opération" />
      </Grid>
      <Grid item xs={12}>
        <Select fullWidth label="Catégorie" defaultValue="">
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth multiline rows={4} label="Commentaire" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleCategorize}>
          Catégoriser
        </Button>
      </Grid>
    </Grid>
  );
};

export default CategorizationPage;
