import React from 'react';
import Header from './Header';

// Our Alert function accepts on argument of `props`.
// This will be an object containing all of the props or properties that were passed to this component from the parent.
// We can expect to see "message" and "type" properties inside our "props" object.
function Alert(props) {
  console.log(props);
  const it = "that"

  return (
    <div className={`alert alert-${props.type || 'success'}`} role="alert">
      <Header title="Welcome" subtitle="Its good to have you" size={"large"}/>
      <section>
        <p>loreem</p>
      </section>
      <Header title="Projects" subtitle="See all of my completed works" size={"small"} it={it}/>
      <section></section>
      <div></div>
      {props.message}
    </div>
  );
}

export default Alert;
