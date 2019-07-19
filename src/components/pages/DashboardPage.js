// import React from 'react';
// import { MDBRow } from 'mdbreact';

// const DashboardPage =  () => {
//   return (
//     <React.Fragment>
      
//     </React.Fragment>
//   )
// }

// export default DashboardPage;

    import React, { Component } from "react";
    import Form from 'react-bootstrap/Form';
    import Button from 'react-bootstrap/Button';
    import Bootstrap from "react-bootstrap";
    import Snackbar from '@material-ui/core/Snackbar';
    import "./Login.css";

    export default class DashboardPage extends Component {
      constructor(props) {
        super(props);
        this.state = {
          open: false,
          vertical: 'center',
          horizontal: 'center',
        }
        
      }


      handleClose = (e) => {
        this.setState({open: false });
      }
      

      handleSubmit = event => {
        event.preventDefault();
        this.setState({ open: true});
      }

      render() {
        var open = this.state.open;
        var vertical = this.state.vertical;
        var horizontal = this.state.horizontal;
        return (
          <div className="DashboardPage">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="email" bsSize="large">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group controlId="password" bsSize="large">
              <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Password"
                  type="password"
                />
              </Form.Group>
              <Button
                block
                bsSize="large"
                type="submit"
              >
                Login
              </Button>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}
                open={open}
                onClose={this.handleClose}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Login Successful</span>}
              />
            </Form>
          </div>
        );
      }
    }