import React, { Component } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: block;
  background-color: #fafafa;

  width: 215px;
  top: 40%;
  left: 50%;
  height: fit-content;
  border: 2px solid black;
  position: absolute;
  transform: translate(-50%, -50%);
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5%;
`;

const Header = styled.h2`
  text-align: center;
  font-family: var(--headerFont);
  letter-spacing: 1px;
`;

const Form = styled.form``;

const Label = styled.label`
  display: block;
  margin: 10px 15px;
`;
const Input = styled.input`
  margin: auto;
`;

const Option = styled.option``;

const Select = styled.select``;

const Button = styled.button`
  display: block;
  margin: 10px auto;
  background-color: #008cba;
  border: 1px solid white;
  color: white;
  text-align: center;
  text-decoration: none;
  margin: 10px auto;
  width: 85px;
  padding: 5px;
  border-radius: 5px;
  outline: none;
`;

const CancelButton = styled.i`
  text-align: center;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 100%;
  cursor: pointer;
`;
class addProjectForm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    description: "",
    dueDate: "",
    priority: "",
  };

  inputHandler = (input) => {
    console.log(this.state);
    this.setState({
      [input.target.name]: input.target.value,
    });
  };

  render() {
    return (
      <FormContainer>
        <Form>
          <Header>Add Project</Header>
          <Label>
            <Input
              onChange={this.inputHandler}
              placeholder="Project Name"
              type="text"
              name="name"
            ></Input>
          </Label>
          <Label>
            <Input
              onChange={this.inputHandler}
              placeholder="Project Description"
              type="text"
              name="description"
            ></Input>
          </Label>
          <Label>
            <Input
              onChange={this.inputHandler}
              placeholder="Due Date"
              type="date"
              name="dueDate"
            ></Input>
          </Label>
          <Label>
            <Select onChange={this.inputHandler} name="priority" id="priority">
              <Option value="High">High</Option>
              <Option value="Medium">Medium</Option>
              <Option value="Low">Low</Option>
            </Select>
          </Label>
          <Button
            onClick={() => this.props.addProject(this.state)}
            type="button"
            value="Add Project"
          >
            Add
          </Button>
          <CancelButton
            onClick={"Close from handler"}
            className="far fa-times-circle"
          ></CancelButton>
        </Form>
      </FormContainer>
    );
  }
}

export default addProjectForm;
