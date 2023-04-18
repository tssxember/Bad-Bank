import React, {createContext} from 'react';

export const UserContext = createContext(null);

export function Card(props){
  function classes(){
      const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-black';
      return 'card mb-3' + bg + txt;
  }
  return(
      <div className={classes()} style={{maxWidth: " 18rem"}}>
          <div className="card-header">{props.header}</div>
          <div className="card-body">
              {props.title && (<h5 className="vard-title">{props.title}</h5>)}
              {props.text && (<p className="card-text">{props.text}</p>)}
              {props.body}
              {props.status &&(<div id='createStatus'>{props.status}</div>)}
          </div>
      </div>
  );   
  }