import React from "react";
import styled from "styled-components";

const NameInput = styled.input`
  margin: auto;
  display: block;
`;

const Label = styled.label``;

const Form = styled.form``;

const FormContainer = styled.div`
  display: ${(props) => (props.display ? "grid" : "none")};
`;

const AddButton = styled.button``;

const CancelButton = styled.button``;

class AddTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      completed: "",
      displayForm: false,
    };
  }

  render() {
    return (
      <FormContainer display={this.state.displayForm}>
        <Form>
          <Input placeholder="Task Name" type="text" />
          <Label>Complete ?</Label>
          <Input type="radio" name="Yes" value="Yes" />
          <Input type="radio" name="No" value="No" />
        </Form>
      </FormContainer>
    );
  }
}
