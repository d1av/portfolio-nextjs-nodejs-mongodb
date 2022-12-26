import React, { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    IconButton,
    Box
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { deleteDataToken, requestData } from '../../container/dataService'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import "./About.scss";

const PATH = 'portfolio/en/about/';

export const About = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const token = useSelector(state => state.auth.user.token)

    useEffect(() => {
        requestData(PATH)
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        // pass id and path to <Edit /> component as in APP.jsx
        navigate(`../edit/about/${id}`)
    }
    const handleDelete = async (id) => {
        deleteDataToken(PATH, token, id)
            .then(data => {
                toast.success(data.message)
                console.log(data)
            })
            .then(() => {
                navigate(0)   // reload Page
            })
    }
    return (
        <div className='wrapper'>
            {""}
            {data.map((about, index) => (
                <Box key={index}>
                    <Card sx={{
                        margin: 4,
                        mt: 2,
                        padding: 2,
                        boxShadow: "5px 5px 10px #ccc",
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}>
                        <Box display="flex">
                            <IconButton
                                sx={{ marginLeft: "auto" }}
                                onClick={() => handleEdit(about._id)}
                            >
                                <EditIcon color="warning" />
                            </IconButton>
                            <IconButton
                                onClick={() => handleDelete(about._id)}
                            ><DeleteForeverIcon color="error" />
                            </IconButton>
                        </Box>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    {about.userName ? about.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={about.title}
                            subheader={new Date(about.updatedAt).toLocaleString('pt-BR')}
                        />
                        <CardContent>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: "tween" }}
                                className="app__profile-item"
                            >
                                <img src={about.imgUrl} alt={about.title} />
                                <h2 className="bold-text" style={{ marginTop: 20 }}>
                                    {about.title}
                                </h2>
                                <p className="p-text" style={{ marginTop: 10 }}>
                                    {about.description}
                                </p>
                            </motion.div>
                        </CardContent>
                    </Card>
                </Box>
            ))
            }
        </div>
    );
}

export default About