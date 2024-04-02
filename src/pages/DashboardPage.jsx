import React from 'react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const DashboardPage = () => {
  const data = [
    { name: 'Jan', dépenses: 500, rentrées: 800 },
    { name: 'Fév', dépenses: 600, rentrées: 900 },
    { name: 'Mar', dépenses: 700, rentrées: 1000 },
    { name: 'Avr', dépenses: 550, rentrées: 850 },
    { name: 'Mai', dépenses: 400, rentrées: 950 },
    { name: 'Juin', dépenses: 300, rentrées: 850 },
  ];

  const categoriesData = [
    { name: 'Loisirs', value: 400 },
    { name: 'Alimentation', value: 300 },
    { name: 'Transport', value: 300 },
    { name: 'Autre', value: 200 },
  ];

  const COLORS = ['#00C49F', '#FFBB28', '#A0CED9', '#FF8042']; // Adjusted color palette

  return (
    <Grid container spacing={1} style={{ backgroundColor: '#f5f5f5', marginTop:"2px" }}>
      <Grid item xs={12}>
        <Card raised style={{ backgroundColor: '#fff', padding: '2px' }}>
          <CardContent>
            <Typography variant="h4" style={{ textAlign: 'center', marginBottom: 'auto' }}>
              Dashboard
            </Typography>
            {/* Add a subtitle or short description here */}
            <Typography variant="body1" color="textSecondary">
              {/* Briefly explain the purpose of the dashboard */}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item container xs={6} spacing={2}>
        <Grid item xs={12}>
          <Card raised style={{ backgroundColor: '#fff', padding: '15px' }}>
            <CardContent>
              <Typography variant="h6">Somme des montants par catégorie</Typography>
              <PieChart width={300} height={300}>
                <Pie
                  data={categoriesData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#e0e0e0"
                >
                  {categoriesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid item container xs={6} spacing={2}>
        <Grid item xs={12}>
          <Card raised style={{ backgroundColor: '#fff', padding: '15px' }}>
            <CardContent>
              <Typography variant="h6">Dépenses et rentrées d'argent par mois</Typography>
              <BarChart width={500} height={300} data={data}>
                <XAxis dataKey="name" tick={{ stroke: '#ccc' }} />
                <YAxis tick={{ stroke: '#ccc' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="dépenses" stackId="a" fill={COLORS[0]} />
                <Bar dataKey="rentrées" stackId="a" fill={COLORS[1]} />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
