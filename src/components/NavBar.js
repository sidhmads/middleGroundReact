import React from 'react'
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../images/main.jpeg'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: '80px',
    width: '78px',
    justifyContent: 'center'
  },
  span: {
    topPadding: '5px',
    margin: '1%'
  }
};

export default function NavBar() {
  return (
    <div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardMedia style={styles.media} image={logo} component='img' />
      </div>
      <div style={{paddingTop:'1%'}}>
        <Button style={styles.span}>Discussion</Button>
        <Button style={styles.span}>Create Initiatives V1</Button>
        <Button style={styles.span}>Create Initiatives V2</Button>
        <Button style={styles.span}>Donate</Button>
        <Button style={styles.span}>About</Button>
      </div>

    </div>
  )
}
