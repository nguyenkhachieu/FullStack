import React, {useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import * as loginAction from '../../actions/loginAction';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { isObjectEmpty } from '../../ultil/objectUtil';
import { withRouter } from "react-router-dom";

const SignUp = (props) => {
  const [inputs,setInputs] = useState({});

  const onSignin = (e) => {
    e.preventDefault();
    console.log('inputs', isObjectEmpty(inputs))
    if (isObjectEmpty(inputs) || !inputs.email || !inputs.password) {
      return;
    }
    console.log('inputs', inputs)
    props.actions.signUp(inputs);
  }
  return (
    <Form style={{
      margin: '20px'
    }}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Name</Label>
            <Input
              type="text"
              name="name"
              id="exampleName"
              placeholder="with a placeholder"
              onChange={({target}) => 
                setInputs(state => ({...state,name:target.value})
              )}
              value={inputs.name}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              onChange={({target}) => 
                setInputs(state => ({...state,email:target.value})
              )}
              value={inputs.email}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="text"
              name="username"
              id="exampleEmail"
              placeholder="with a placeholder"
              onChange={({target}) => 
                setInputs(state => ({...state,username:target.value})
              )}
              value={inputs.username}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
              onChange={({target}) => 
                setInputs(state => ({...state,password:target.value})
              )}
              value={inputs.password}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmpassword"
              id="examplePassword"
              placeholder="confirmpassword placeholder"
              onChange={({target}) => 
                setInputs(state => ({...state,confirmpassword:target.value})
              )}
              value={inputs.confirmpassword}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={5}><Button onClick={onSignin}>Sign up</Button></Col>
      </Row>
    </Form>
  )
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(Object.assign({}, loginAction), dispatch)};
}

const mapStateToProps = (state) => {
  console.log('state', state)
  // return {
  //   item: state.item
  // }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));