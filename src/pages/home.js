import React from "react";
import Form from "react-bootstrap/Form";
import "./../App.css";

const Home = () => (
  <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>

    <Form.Control size="lg" type="text" placeholder="Large text" />
    <br />
    <Form.Control type="text" placeholder="Normal text" />
    <br />
    <Form.Control size="sm" type="text" placeholder="Small text" />
  </div>
);

export default Home;
