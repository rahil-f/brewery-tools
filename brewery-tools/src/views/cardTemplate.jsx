import * as React from 'react';
import './ct.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TauxAlc from './calcul/tauxAlcool';
import CorrectionTemperatureDensite from './calcul/correctionTemperatureDensite';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const map = new Map();
map.set("TauxAlc", TauxAlc);
map.set("CorrectionTemperatureDensite", CorrectionTemperatureDensite);

export default function RecipeReviewCard(props) {
  const Component = map.get(props.info.compoName);
  const [expanded, setExpanded] = React.useState(false);
  const hrefName = "#"+props.info.id
  console.log(hrefName)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <a href={hrefName}></a>
      <Card id={props.info.id} sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', margin: '10px'}}>
        <CardHeader
          title={props.info.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {props.info.intro}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="afficher calcul"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {Component && <Component />}
            </Typography>

          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
}