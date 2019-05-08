import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import discussion from '../../images/discussion.png'

const styles = {
  div: {
    position: 'static',
    height: '100%',
    width: '100%',
    marginTop: '10px'
  },
  image: {
    position: 'relative',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%'
  }
};

export default function Banner() {
  return (
    <div>
      <div style={styles.div}>
        <CardMedia style={styles.image} image={discussion} component='img' />
      </div>

    </div>
  )
}
