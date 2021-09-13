import React from 'react';
import  ReactDOM  from 'react-dom';

const Info = (props) => (

<div>
    <h1>Info</h1>
    <p1>The info is : {props.info}</p1>

</div>

);

const withAdminWanring = (WrappedComponent) =>{

return (props) =>(
<div>
    {props.isAdmin && <p1>This is private info please dont share</p1>}
    <WrappedComponent{...props}/>
    </div>

);



};

const requireAuthentication = (WrappedComponent) =>{

   return (props) =>(
    <div>
         { props.isAuthenticated ? (<WrappedComponent{...props}/>) : (<p1>Please login to view</p1>)}
    </div>
);};

//const requireAuthentication = (WrappedComponent) => {
//    return (props) => (
 //     <div>
 //       {props.isAuthenticated ? (
 //         <WrappedComponent {...props} />
 //       ) : (
  //          <p>Please login to view the info</p>
  //        )}
  //    </div>
 //   );
 // };

const AdminInfo = withAdminWanring(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the authenticated details"/>,document.getElementById('app'));