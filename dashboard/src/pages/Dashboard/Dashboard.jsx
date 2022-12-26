import { Box, Button, Typography } from '@mui/material'
import './Dashboard.scss'
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import { initialStateValue, initialState, aboutState } from '../../container/fallbackObj';
import { createDataToken } from '../../container/dataService'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [form, setForm] = useState(aboutState)
  const [value, setValue] = useState(initialStateValue)
  const token = useSelector(state => state.auth.user.token)

  const handleSubmit = (e) => {
    createDataToken(form.path, token, value)
      .then(data => {
        setForm((prevState) => ({
          ...prevState,
        }))
        toast.success(`${form.ButtonSelected} was sucessfully created!`)
        console.log(data)
      })
      .catch(err => toast.error(JSON.stringify(err.message)))
    e.preventDefault()
  }

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <Box marginTop={10} marginLeft="210px">
      <div className="form-style-6">
        <h1>
          <Box>
            <Button
              onClick={() => {
                setForm({
                  ...initialState,
                  title: true,
                  description: true,
                  imgUrl: true,
                  ButtonSelected: 'About',
                  path: 'portfolio/en/about'
                })
                setValue(initialStateValue)
              }}
              name="About"
              sx={{ margin: '10px' }}
              color="warning"
              variant="contained"
              startIcon={<SendIcon />}>
              About
            </Button>
            <Button
              onClick={() => {
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
                setValue(initialStateValue)
              }}
              name="Work"
              sx={{ margin: '10px' }}
              color="primary"
              variant="contained"
              endIcon={<SendIcon />}>
              Work
            </Button>
            <Button
              onClick={() => {
                setForm({
                  ...initialState,
                  name: true,
                  bgColor: true,
                  icon: true,
                  ButtonSelected: 'Skills',
                  path: 'portfolio/en/skills'
                })
                setValue(initialStateValue)
              }}
              name="Skills"
              sx={{ margin: '10px' }}
              color="success"
              variant="contained"
              endIcon={<SendIcon />}>
              Skills
            </Button>
            <Button
              onClick={() => {
                setForm({
                  ...initialState,
                  name: true,
                  company: true,
                  feedback: true,
                  imgUrl: true,
                  ButtonSelected: 'Testimonials',
                  path: 'portfolio/en/testimonials'
                })
                setValue(initialStateValue)
              }}
              name="Testimonials"
              sx={{ margin: '10px' }}
              color="error"
              variant="contained"
              endIcon={<SendIcon />}>
              Testimonials
            </Button>
            <Button
              onClick={() => {
                setForm({
                  ...initialState,
                  name: true,
                  company: true,
                  year: true,
                  icon: true,
                  bgColor: true,
                  desc:true,
                  ButtonSelected: 'Experiences',
                  path: 'portfolio/en/experiences'
                })
                setValue(initialStateValue)
              }}
              name="Experiences"
              sx={{ margin: '10px' }}
              color="warning"
              variant="contained"
              endIcon={<SendIcon />}>
              Experiences
            </Button>
          </Box>
        </h1>
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

export default Dashboard