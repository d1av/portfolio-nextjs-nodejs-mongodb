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
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { fallback, requestData, deleteDataToken } from '../../container/dataService';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import "./Work.scss";

const PATH = 'portfolio/en/work/'

export const Work = () => {
    const [data, setData] = useState(fallback)
    const token = useSelector(state => state.auth.user.token)
    useEffect(() => {
        requestData(PATH)
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();
    const handleEdit = (id) => {
        // pass id and path to <Edit /> component as in APP.jsx
        navigate(`../edit/work/${id}`)
    }
    const handleDelete = async (id) => {
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
            {data.map((work, index) => (
                <Box key={index}>
                    <Card sx={{
                        width: "auto",
                        maxWidth: '430px',
                        margin: 2,
                        padding: 2,
                        boxShadow: "5px 5px 10px #ccc",
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}>
                        <Box display="flex">
                            <IconButton
                                sx={{ marginLeft: "auto" }}
                                onClick={() => handleEdit(work._id)}
                            >
                                <EditIcon color="warning" />
                            </IconButton>
                            <IconButton
                                onClick={() => handleDelete(work._id)}
                            ><DeleteForeverIcon color="error" />
                            </IconButton>
                        </Box>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                                    {work.userName ? work.userName.charAt(0) : ""}
                                </Avatar>
                            }
                            title={work.title}
                            subheader={new Date(work.updatedAt).toLocaleString('pt-BR')}
                        />
                        <CardContent>
                            <div className="app__work-item app__flex" key={work._id}>
                                <div className="app__work-img app__flex">
                                    <img src={work.imgUrl} alt={work.name} />

                                    <motion.div
                                        whileHover={{ opacity: [0, 1] }}
                                        transition={{
                                            duration: 0.25,
                                            ease: "easeInOut",
                                            staggerChildren: 0.5,
                                        }}
                                        className="app__work-hover app__flex"
                                    >
                                        <a href={work.projectLink} target="_blank" rel="noreferrer">
                                            <motion.div
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{ scale: [1, 0.9] }}
                                                transition={{ duration: 0.25 }}
                                                className="app__flex"
                                            >
                                                <AiFillEye />
                                            </motion.div>
                                        </a>
                                        <a href={work.codeLink} target="_blank" rel="noreferrer">
                                            <motion.div
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{ scale: [1, 0.9] }}
                                                transition={{ duration: 0.25 }}
                                                className="app__flex"
                                            >
                                                <AiFillGithub />
                                            </motion.div>
                                        </a>
                                    </motion.div>
                                </div>

                                <div className="app__work-content app__flex">
                                    <h4 className="bold-text">{work.title}</h4>
                                    <p className="p-text" style={{ marginTop: 10 }}>
                                        {work.description}
                                    </p>

                                    <div className="app__work-tag app__flex">
                                        <p className="p-text">{work.tags[0]}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Box>
            ))
            }
        </div>
    );
}

export default Work