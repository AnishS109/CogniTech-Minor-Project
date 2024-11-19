import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const AdminRegistration = () => {
  const theme = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    email: '',
    username: '',
    password: '',
    type: 'admin'
  });

  const [error, setError] = useState(''); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone_number, email, username, password } = formData;

    if (!name || !email || !phone_number || !username || !password) {
      setError('All fields are required.');
      return;
    }

    setError('');
    
    try {
      const response = await fetch("http://localhost:5000/api/registration/registration-details", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully', result);

        navigate("/login");
      } else {
        setError('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error in submitting the form:', error);
      setError('Error in submitting the form. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        px: 2,
        bgcolor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 600,
          padding: 4,
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '1.5rem', sm: '2rem' },
            color: '#333',
            marginBottom: '24px',
          }}
        >
          ADMIN REGISTRATION
        </Typography>

        {error && (
          <Typography
            color="error"
            variant="body2"
            align="center"
            sx={{
              marginBottom: '16px',
              fontSize: '0.9rem',
              fontWeight: '600',
              backgroundColor: '#ffebee',
              padding: '8px',
              borderRadius: '5px',
            }}
          >
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            name="name"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f7f7f7',
              },
            }}
          />
          
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            value={formData.phone_number}
            onChange={handleChange}
            margin="normal"
            required
            name="phone_number"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f7f7f7',
              },
            }}
          />
          
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            name="email"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f7f7f7',
              },
            }}
          />
          
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            value={formData.username}
            onChange={handleChange}
            margin="normal"
            required
            name="username"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f7f7f7',
              },
            }}
          />
          
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            name="password"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: '#f7f7f7',
              },
            }}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              mt: 3,
              py: 1.5,
              fontSize: '1.1rem',
              borderRadius: '8px',
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AdminRegistration;