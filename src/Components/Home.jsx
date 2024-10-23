import React, { useState } from "react";
import {
    TextField,
    Box,
    Button,
    FormControl,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    FormLabel,
    FormGroup,
    Typography,
    Snackbar,
    Alert,
    IconButton
} from "@mui/material";
import { Link } from '@mui/material';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from '@mui/icons-material';




const Home = () => {
    // State for storing form inputs
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        dob: null,
        gender: "",
        hobbies: [],
        address: "",
        city: "",
        pincode: "",
    });

    // For Errors
    const [errors, setErrors] = useState({});

    // State for our Snackbar
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const navigate = useNavigate();

    // Yaha hum the input changes lenge text field ke
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //For the Password Visibility

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Handling the checkbox changes for hobbies
    const handleHobbyChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prev) => {
            const newHobbies = checked
                ? [...prev.hobbies, value]
                : prev.hobbies.filter((hobby) => hobby !== value);
            return { ...prev, hobbies: newHobbies };
        });
    };

    const passwordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const confirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };


    // Form Validations
    const validate = () => {
        let tempErrors = {};
        if (!formData.firstname) {
            tempErrors.firstname = "First Name is required";
        } else if (!/^[A-Za-z]+$/.test(formData.firstname)) {
            tempErrors.firstname = "Only letters are allowed";
        }

        if (!formData.lastname) {
            tempErrors.lastname = "Last Name is required";
        } else if (!/^[A-Za-z]+$/.test(formData.lastname)) {
            tempErrors.lastname = "Only letters are allowed";
        }

        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            tempErrors.email = "Enter a valid email";
        }

        if (!formData.password) {
            tempErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }

        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Passwords do not match";
        }

        if (!formData.age) {
            tempErrors.age = "Age is required";
        } else if (isNaN(formData.age) || Number(formData.age) <= 0) {
            tempErrors.age = "Enter a valid age";
        }

        if (!formData.dob) {
            tempErrors.dob = "Date of Birth is required";
        }

        if (!formData.gender) {
            tempErrors.gender = "Gender is required";
        }

        if (formData.hobbies.length === 0) {
            tempErrors.hobbies = "Select at least one hobby";
        }

        if (!formData.address) {
            tempErrors.address = "Address is required";
        }

        if (!formData.city) {
            tempErrors.city = "City is required";
        }

        if (!formData.pincode) {
            tempErrors.pincode = "Pincode is required";
        } else if (!/^\d{5,6}$/.test(formData.pincode)) {
            tempErrors.pincode = "Enter a valid pincode";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            const newEntry = {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                password: formData.password,
                age: formData.age,
                dob: formData.dob ? formData.dob.format("YYYY-MM-DD") : "",
                gender: formData.gender,
                hobbies: formData.hobbies,
                address: formData.address,
                city: formData.city,
                pincode: formData.pincode,
            };

            console.log("Payload:", newEntry); // Log the payload to check correctness

            try {
                const url = 'http://localhost:3000/api/register';
                const response = await axios.post(url, newEntry);

                if (response.status === 201) {
                    setSnackbarMessage("Entry added successfully!");
                    setOpenSnackbar(true);

                    setTimeout(() => {
                        navigate('/signin');
                        setFormData({
                            firstname: "",
                            lastname: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                            age: "",
                            dob: null,
                            gender: "",
                            hobbies: [],
                            address: "",
                            city: "",
                            pincode: "",
                        });

                        setErrors({});
                    }, 2000);
                } else {
                    setSnackbarMessage('Failed to register user. Please try again.');
                    setOpenSnackbar(true);
                }
            } catch (error) {
                console.error('Error while registering the user:', error.response ? error.response.data : error.message);
                setSnackbarMessage("Failed to register!");
                setOpenSnackbar(true);
            }
        }
    };




    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                sx={{
                    backgroundColor: "#e0f7fa",
                    minHeight: "100vh",
                    paddingY: 5,
                }}
            >
                <Typography variant="h4" align="center" gutterBottom color="#00796b">
                    Register Here!
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        maxWidth: "500px",
                        margin: "auto",
                        padding: "30px",
                        backgroundColor: "#ffffff",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* First Name */}
                    <TextField
                        label="First Name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        error={!!errors.firstname}
                        helperText={errors.firstname}
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

                    {/* Last Name */}
                    <TextField
                        label="Last Name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        error={!!errors.lastname}
                        helperText={errors.lastname}
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
                    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
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
                            type={showPassword ? "text" : "password"}
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
                        <IconButton
                            onClick={passwordVisibility}
                            sx={{
                                position: 'absolute',
                                right: 10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </div>
                    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                        {/* Confirm Password */}
                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                            type={showConfirmPassword ? "text" : "password"}
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

                        {/* Eye Icon (placed absolutely) */}
                        <IconButton
                            onClick={passwordVisibility}
                            sx={{
                                position: 'absolute',
                                right: 10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}
                        >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </div>

                    {/* Age */}
                    <TextField
                        label="Age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        error={!!errors.age}
                        helperText={errors.age}
                        type="number"
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

                    {/* Date of Birth */}
                    <FormControl fullWidth margin="normal">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date of Birth"
                                value={formData.dob}
                                onChange={(newValue) => setFormData({
                                    ...formData, dob: newValue
                                })}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        error={!!errors.dob}
                                        helperText={errors.dob}
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
                                )}
                            />
                        </LocalizationProvider>
                    </FormControl>
                    {/* Gender */}
                    <FormControl component="fieldset" error={!!errors.gender} margin="normal">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            row
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        {errors.gender && <Typography color="error">{errors.gender}</Typography>}
                    </FormControl>

                    {/* Hobbies */}
                    <FormLabel component="legend">Hobbies</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="Walking"
                                    checked={formData.hobbies.includes("Walking")}
                                    onChange={handleHobbyChange}
                                />
                            }
                            label="Walking"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="Traveling"
                                    checked={formData.hobbies.includes("Traveling")}
                                    onChange={handleHobbyChange}
                                />
                            }
                            label="Traveling"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="Reading"
                                    checked={formData.hobbies.includes("Reading")}
                                    onChange={handleHobbyChange}
                                />
                            }
                            label="Reading"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    value="Cricket"
                                    checked={formData.hobbies.includes("Cricket")}
                                    onChange={handleHobbyChange}
                                />
                            }
                            label="Cricket"
                        />
                    </FormGroup>
                    {errors.hobbies && <Typography color="error">{errors.hobbies}</Typography>}

                    {/* Address */}
                    <TextField
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        error={!!errors.address}
                        helperText={errors.address}
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

                    {/* City */}
                    <TextField
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        error={!!errors.city}
                        helperText={errors.city}
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

                    {/* Pincode */}
                    <TextField
                        label="Pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        error={!!errors.pincode}
                        helperText={errors.pincode}
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
                        Submit
                    </Button>
                    <Typography align="center" marginTop={2}>
                        Already have an account?{' '}
                        <Link
                            href="/signin"
                            variant="body2"
                            color="#00796b"
                        >
                            Sign In
                        </Link>
                    </Typography>
                </Box>

                {/* Snackbar for the success messages */}
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
        </LocalizationProvider>
    );
};

export default Home;
