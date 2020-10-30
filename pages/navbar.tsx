import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    }
  })
)

export default function ButtonAppBar(): React.ReactElement {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} position="static" color="transparent">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} aria-label="menu" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Home
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
