// TODO
import React from "react";

export default props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>Email</label>
      <input
        name="email"
        value={props.values.email}
        onChange={props.onChange}
        placeholder="emailadress"
      />
      <label>Password</label>
      <input
        name="password"
        value={props.values.password}
        type="password"
        onChange={props.onChange}
        placeholder="password"
      />
      <button type="submit">Log In </button>
    </form>
  );
};
