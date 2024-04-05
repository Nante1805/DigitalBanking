import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    monthlySalary: '',
  });
  const [accountNumber, setAccountNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Enregistrer les données côté backend et générer un numéro de compte unique
    const generatedAccountNumber = generateAccountNumber(); // Function for generating a unique account number
    setAccountNumber(generatedAccountNumber);
    console.log('Données enregistrées:', formData);
    console.log('Numéro de compte unique généré:', generatedAccountNumber);
  };

  const generateAccountNumber = () => {
    // Logique pour générer un numéro de compte unique
    return 'ABC123'; // Exemple de numéro de compte généré
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1" align="center">
          Inscription
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Prénom"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Nom"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            type="date"
            label="Date de naissance"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Salaire mensuel net"
            name="monthlySalary"
            value={formData.monthlySalary}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSave}>
            Sauvegarder
          </Button>
        </Grid>
      </Grid>
      {accountNumber && (
        <Typography variant="body1" align="center" sx={{ mt: 2, color: 'green' }}>
          Votre numéro de compte unique est : {accountNumber}
        </Typography>
      )}
    </Container>
  );
};

export default RegistrationPage;
