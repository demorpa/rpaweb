    import React, { Component } from "react";
    import Form from 'react-bootstrap/Form';

    export default class WelcomePage extends Component {
      
      render() {
        return (
          <div className="WelcomePage">
            <Form>
              <Form.Label>Welcome, abcxyz</Form.Label>
            </Form>
          </div>
        );
      }
    }