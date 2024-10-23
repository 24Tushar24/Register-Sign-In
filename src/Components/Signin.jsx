import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validating the form data
        if (!formData.email || !formData.password) {
            setErrors({
                email: !formData.email ? 'Email is required' : '',
                password: !formData.password ? 'Password is required' : '',
            });
            return;
        }

        handleSignIn();
    };

    const handleSignIn = async () => {
        const credentials = {
            email: formData.email,
            password: formData.password,
        };

        try {
            const response = await axios.post('http://localhost:3000/api/signin', credentials);

            setSnackbarMessage("Sign-in successful!");
            setOpenSnackbar(true);

            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);

        } catch (error) {
            console.error(error);
            setSnackbarMessage("Failed to sign in!");
            setOpenSnackbar(true);
        }
    };

    return (
        <Box
            sx={{
                backgroundColor: "#e0f7fa",
                minHeight: "100vh",
                paddingY: 5,
            }}
        >
            <Typography variant="h4" align="center" gutterBottom color="#00796b">
                Sign In
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    maxWidth: "400px",
                    margin: "auto",
                    padding: "30px",
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                {/* Email Field */}
                <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email}
                    type="email"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#bdbdbd",
                            },
                            "&:hover fieldset": {
                                borderColor: "#00796b",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#00796b",
                            },
                        },
                    }}
                />

                {/* Password Field */}
                <TextField
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password}
                    type="password"
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#bdbdbd",
                            },
                            "&:hover fieldset": {
                                borderColor: "#00796b",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#00796b",
                            },
                        },
                    }}
                />

                {/* Submit Button */}
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Sign In
                </Button>
            </Box>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity="success">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SignIn;
