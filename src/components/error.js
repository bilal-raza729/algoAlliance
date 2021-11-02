import {useLocation} from 'react-router-dom';
const Error = () =>{
    let location = useLocation();

    return (
      <div style={{marginLeft: "400px", marginTop:"200px"}}>
        <h3 >
          No match for <code>{location.pathname}</code>
          <br/>
          
        </h3>
        <h6>Please Check Url
        </h6>
      </div>
    );
}
export default Error;
