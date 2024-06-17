import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';import { Icon, IconButton } from '@mui/material';
import { Button } from 'react-bootstrap';
function AboutMe() {
  return (
    <div className="aboutme">
      <div id="aboutme-text">
        <h2>About me</h2>
      </div>
      <div id="down-btn">
        <Button style={{background:'transparent', border:'transparent'}}>
          <KeyboardDoubleArrowDownIcon 
          style={{backgroundColor:'transparent',color:'white'}} >
          </KeyboardDoubleArrowDownIcon>
        </Button>
      </div>

      <div className='aboutme-desc-conatiner'>
        <div id='education'>
          <h1>Educational Background</h1>
        </div>

        <div id='skills'>
          <h1>Skills</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
