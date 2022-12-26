import React, { useState, useEffect } from 'react';
import {
    Card,
    CardHeader,
    Avatar,
    CardContent,
    IconButton,
    Box
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { requestDataToken, fallback, deleteDataToken } from '../../container/dataService';
import { motion } from "framer-motion";
import { toast } from 'react-toastify'
import "./Form.scss";

const PATH = 'portfolio/contact/';

export const Form = () => {
    const [data, setData] = useState(fallback)
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.user.token)
    useEffect(() => {
        requestDataToken(PATH, token)
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])
    /*  const handleEdit = (id) => {
         // pass id and path to <Edit /> component as in APP.jsx
         navigate(`../edit/form/${id}`)
     } */
    const handleDelete = (id) => {
        deleteDataToken(PATH, token, id)
            .then(data => {
                toast.success(data.message)
            })
            .then(() => navigate(0))
            .catch(err => toast.error(err.message))
    }
    return (
        <div className='wrapper'>
            {""}
            {data.map((form, index) => (
                <Box key={index}>
                    <Card sx={{
                        minWidth: "500px",
                        margin: 2,
                        padding: 2,
                        boxShadow: "5px 5px 10px #ccc",
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}>
                        <Box display="flex">
                            <IconButton
                                onClick={() => { handleDelete(form._id) }}
                            ><DeleteForeverIcon color="error" />
                            </IconButton>
                        </Box>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    {form.userName ? form.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={form.email}
                            subheader={new Date(form.updatedAt).toLocaleString('pt-BR')}
                        />
                        <CardContent>
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.5, type: "tween" }}
                            >
                                <h2 className="bold-text" style={{ marginTop: 20 }}>
                                    {form.name}
                                </h2>
                                <p className="p-text" style={{ marginTop: 10 }}>
                                    {form.message}
                                </p>
                                <hr />
                                <br />
                                <p className="p-text" style={{ marginTop: 10 }}>
                                    From:{form.where}
                                </p>

                            </motion.div>
                        </CardContent>
                    </Card>
                </Box >
            ))
            }
        </div >
    );
}

export default Form