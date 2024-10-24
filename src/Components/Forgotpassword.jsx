import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const navigate = useNavigate();

    const sendCode = async (e) => {
        e.preventDefault();

        if (!email) {
            setSnackbarMessage('Please enter your email');
            setOpenSnackbar(true);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/sendresetcode', { email });
            setSnackbarMessage(response.data.message);
            setOpenSnackbar(true);
            setTimeout(() => {
                navigate('/resetpassword'); 
            }, 2000);
        } catch (error) {
            setSnackbarMessage(error.response?.data?.message || 'Error occurred');
            setOpenSnackbar(true);
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: "#e0f7fa",
                minHeight: "100vh",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '400px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="h5" align="center" gutterBottom color="#00796b">
                    Forgot Password
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
                    The code will be sent to your Email.
                </Typography>

                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    type="email"
                />

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={sendCode}
                    sx={{ marginTop: '16px' }}
                >
                    Send Code
                </Button>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={4000}
                    onClose={() => setOpenSnackbar(false)}
                >
                    <Alert onClose={() => setOpenSnackbar(false)} severity="success">
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    );
};

export default ForgotPassword;
