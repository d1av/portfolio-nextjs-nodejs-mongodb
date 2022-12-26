import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, Button, Typography } from '@mui/material'
import { initialStateValue, initialState, aboutState } from '../../container/fallbackObj';
import { editDataToken, findOneDataById } from '../../container/dataService'
import { toast } from 'react-toastify'
import './Edit.scss'

const Edit = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState(aboutState)
  const [value, setValue] = useState(initialStateValue)
  const { path, id } = useParams()
  const token = useSelector(state => state.auth.user.token)

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  useEffect(() => {
    //set visible camps by URL parameters
    if (path === 'about') {
      setForm({
        ...initialState,
        title: true,
        description: true,
        imgUrl: true,
        ButtonSelected: 'About',
        path: 'portfolio/en/about'
      })
    }
    if (path === 'skills') {
      setForm({
        ...initialState,
        name: true,
        bgColor: true,
        icon: true,
        ButtonSelected: 'Skills',
        path: 'portfolio/en/skills'
      })
    }
    if (path === 'work') {
      setForm({
        ...initialState,
        title: true,
        projectLink: true,
        codeLink: true,
        description: true,
        name: true,
        tags: true,
        imgUrl: true,
        ButtonSelected: 'Work',
        path: 'portfolio/en/work'
      })
    }
    if (path === 'testimonials') {
      setForm({
        ...initialState,
        name: true,
        company: true,
        feedback: true,
        imgUrl: true,
        ButtonSelected: 'Testimonials',
        path: 'portfolio/en/testimonials'
      })
    }
    if (path === 'experiences') {
      setForm({
        ...initialState,
        name: true,
        company: true,
        year: true,
        icon: true,
        bgColor: true,
        ButtonSelected: 'Experiences',
        path: 'portfolio/en/experiences'
      })
    }

    ///SELECT correct path to it's DATA
    const PATHS = {
      "about": 'portfolio/en/about',
      "skills": 'portfolio/en/skills',
      "work": 'portfolio/en/work',
      "experiences": 'portfolio/en/experiences',
      "testimonials": 'portfolio/en/testimonials',
    }
    // Fill values on the loaded TExtfields
    findOneDataById(`${PATHS[path]}`, id).then(data => setValue(data))
  }, [])



  const handleSubmit = (e) => {
    editDataToken(`${form.path}`, token, id, value)
      .then(data => {
        if (!data) {
          toast.error('Error occured')
        }

        toast.success("Successfully updated")
        navigate(`/${path}`)
      })
      .catch(err => toast.error(err.message))
    e.preventDefault()
  }

  return (
    <Box marginTop={10} marginLeft="210px">
      <div className="form-style-6">
        <Box alignItems="center" justifyContent="center" display="flex">
          <Typography variant="h2">{form.ButtonSelected}</Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          {form.name && <input onChange={handleChange} type="text" name="name" value={value.name} placeholder="Your Name" />}
          {form.email && <input onChange={handleChange} value={value.email} type="email" name="email" placeholder="Email Address" />}
          {form.title && <input onChange={handleChange} value={value.title} type="text" name="title" placeholder="Your Title" />}
          {form.description && <textarea onChange={handleChange} value={value.description} name="description" placeholder="Description" />}
          {form.imgUrl && <input onChange={handleChange} value={value.imgUrl} type="text" name="imgUrl" placeholder="Your image Link" />}
          {form.bgColor && <input onChange={handleChange} value={value.bgColor} type="text" name="bgColor" placeholder="Your HTML color tag eg(#fffff)" />}
          {form.icon && <input onChange={handleChange} value={value.icon} type="text" name="icon" placeholder="Your icon Link" />}
          {form.projectLink && <input onChange={handleChange} value={value.projectLink} type="text" name="projectLink" placeholder="Your Project Link" />}
          {form.codeLink && <input onChange={handleChange} value={value.codeLink} type="text" name="codeLink" placeholder="Your Code Link" />}
          {form.tags && <input onChange={handleChange} value={value.tags} type="text" name="tags" placeholder="Your Tags" />}
          {form.company && <input onChange={handleChange} value={value.company} type="text" name="company" placeholder="Your Company" />}
          {form.feedback && <textarea onChange={handleChange} value={value.feedback} name="feedback" placeholder="Your Feedback" />}
          {form.year && <input onChange={handleChange} value={value.year} type="text" name="year" placeholder="Year" />}
          {form.message && <input onChange={handleChange} value={value.message} type="text" name="year" placeholder="Message" />}
          {form.desc && <textarea onChange={handleChange} value={value.desc} name="desc" placeholder="Description" />}
          <Button sx={{ width: '100%' }} type="submit" variant="contained" size="large">
            SUBMIT
          </Button>
        </form>
      </div>
    </Box>
  )
}

export default Edit