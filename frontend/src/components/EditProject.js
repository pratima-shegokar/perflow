import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
        proj:[{'Name': "ProjectName", 'Value':"Silver Tower"},
        {'Name': "Budget", 'Value':10000},
        {'Name': "Duration", 'Value':24 },
        {'Name': "Expected First Payment", 'Value':593472873},
        {'Name': "Expected last Payment", 'Value':13435488},
        {'Name': "Peak Interval", 'Value':12},]
    }

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
            [name]: value
          })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
      }

      render() {

        let pageTitle;
        if(this.state.id) {
          pageTitle = <h2>Edit Product</h2>
        } else {
          pageTitle = <h2>Add Product</h2>
        }
    
        return(
          <div>
            {pageTitle}
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="productName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="productName"
                      value={this.state.productName}
                      onChange={this.handleChange}
                      placeholder="Product Name"/>
                  </Form.Group>
                  <Form.Group controlId="sku">
                    <Form.Label>SKU</Form.Label>
                    <Form.Control
                      type="text"
                      name="sku"
                      value={this.state.sku}
                      onChange={this.handleChange}
                      placeholder="SKU" />
                  </Form.Group>
                  <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      value={this.state.price}
                      onChange={this.handleChange}
                      placeholder="Price" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="hidden" name="id" value={this.state.id} />
                    <Button variant="success" type="submit">Save</Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        )
      }
    }
    
    export default EditProject;

