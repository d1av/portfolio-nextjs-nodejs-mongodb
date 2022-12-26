import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Drawer,
  List,
  Divider,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { mainListItems, secondaryListItems } from '../components/ListItems';
import { logoutRender, reset } from '../features/auth/authSlice'

const Header = () => {
  const [value, setValue] = useState(0)
  const dispatch = useDispatch()

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const logoutHandler = () => {
    localStorage.removeItem('userId')
    localStorage.removeItem('user')
    dispatch(logoutRender()).then(dispatch(reset())).then(navigate('/')).then(navigate('/login'))
  }

  return (
    <AppBar sx={{
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(98,98,255,1) 0%, rgba(0,212,255,1) 100%)',
    }}>
      <Toolbar>
        {isLoggedIn && <Box display="flex" marginLeft="auto">
          <Tabs
            textColor="inherit"
            value={value} onChange={(e, val) => setValue(val)}>
            <Tab LinkComponent={Link} to="/" label="Add new" />
          </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && <> <Button
            LinkComponent={Link} to="/login"
            variant='contained'
            sx={{ margin: 1, borderRadius: 10 }}
            color='warning'>Login
          </Button>
            {/* <Button
              LinkComponent={Link} to="/register"
              variant='contained'
              sx={{ margin: 1, borderRadius: 10 }}
              color='warning'>Signup
            </Button> */}
          </>}
          {isLoggedIn && <Button
            onClick={logoutHandler}
            LinkComponent={Link} to="/"
            variant='contained'
            sx={{ margin: 1, borderRadius: 10 }}
            color='warning'>Logout
          </Button>}
        </Box>
      </Toolbar>
      <Drawer variant="permanent">
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <Typography variant='h4'>Dashboard</Typography>
        </Toolbar>
        <Divider />
        <List component="nav">
          {mainListItems}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems}
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Header