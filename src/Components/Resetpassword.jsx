import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [formData, setFormData] = useState({ token: '', newPassword: '' });
    const [message, setMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate=useNavigate();

    const Change = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const Submit = async (e) => {
        e.preventDefault();

        const resetData = {
            token: formData.token, 
            newPassword: formData.newPassword,
        };

        try {
            const response = await axios.post('http://localhost:3000/api/resetpassword', resetData);
            setMessage(response.data.message);
            setOpenSnackbar(true);
            setTimeout(() => {
                navigate('/signin')
            }, 2000)
        } catch (error) {
            setMessage(error.response?.data?.message || 'Error occurred');
            setOpenSnackbar(true);
        }
    };

    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: '2rem' }}>
            <Typography variant="h5" textAlign="center">Reset Password</Typography>
            <form onSubmit={Submit}>
                <TextField
                    label="Reset Code"
                    name="token"
                    fullWidth
                    value={formData.token}
                    onChange={Change}
                    margin="normal"
                    required
                />
                <TextField
                    label="New Password"
                    name="newPassword"
                    type="password"
                    fullWidth
                    value={formData.newPassword}
                    onChange={Change}
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Reset Password
                </Button>
            </form>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="info">
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default ResetPassword;
