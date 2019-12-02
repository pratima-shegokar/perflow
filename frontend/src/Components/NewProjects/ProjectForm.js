import React from "react";



    myChangeHandler = (event) => {
        let nam = event.target.name;        //To access the fields in the event handler.
        let val = event.target.value;
        this.setState({[nam]: val});        //To update the state.
    }

    // To clear the state and set it back to its initial values.
    handleClearForm = () => {
        this.state = {
              id: "",
              projectName: "",
              duration: "",
              budget: "",
              expectedFirstPayment: "",
              expectedLastPayment: "",
              peakInterval: "",
              discountRate: ""
        }
    }
   handleFormSubmit(e) {

    function ProjectForm(onSubmit) {
        const [body, setBody] = React.useState({
            id: "",
            projectName: "",
            duration: "",
            budget: "",
            expectedFirstPayment: "",
            expectedLastPayment: "",
            peakInterval: "",
            discountRate: ""
        });
        const handleSubmit = () => {
             // Invoke the passed in event callback
              onSubmit({body: body});

              // Clear the input field
              setBody("");
         };
    }*/

    return (
          <div className = "container">
              <h1>New Project Information</h1>

                    <div className="form-row">
                         <div class="form-group col-md-6">
                              <label for="inputId">Project ID</label>
                              <input type="text" name="id" onChange={this.myChangeHandler}>
                        </div>
                        <div class="form-group col-md-6">
                               <label for="projectName">Project name</label>
                               <input type="text" name='projectName' onChange={this.myChangeHandler}>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="inputDuration">Duration</label>
                        <input type="text" name='duration' onChange={this.myChangeHandler} placeholder="Enter the duration of the project">
                    </div>

                    <div class="form-group">
                        <label for="inputBudget">Budget</label>
                        <input type="text" name='duration' onChange={this.myChangeHandler} placeholder="Enter the budget of the project">
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                              <label for="expectedFirstPayment">Expected first payment</label>
                              <input type="text" name="expectedFirstPayment" onChange={this.myChangeHandler} placeholder="Enter the expected first payment">
                        </div>
                        <div class="form-group col-md-6">
                               <label for="expectedLastPayment">Expected last payment</label>
                               <input type="text" name='expectedLastPayment' onChange={this.myChangeHandler} placeholder="Enter the expected last payment">
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="peakInterval">Peak interval</label>
                        <input type="text" name='peakInterval' onChange={this.myChangeHandler} placeholder="Enter the peak interval of the project">
                    </div>

                    <div class="form-group">
                        <label for="discountRate">Budget</label>
                        <input type="text" name='discountRate' onChange={this.myChangeHandler} placeholder="Enter the discount rate of the project cost">
                    </div>

            <br/>
            <br/>
            <Button
                 action = {this.handleFormSubmit}
                 type = {'primary'}
                 title = {'Submit'}
                 style={buttonStyle}
            /> { /*Submit */ }

            <Button
                  action = {this.handleClearForm}
                  type = {'secondary'}
                  title = {'Clear'}
                  style={buttonStyle}
            /> {/* Clear the form */}

    );
}

export default PostForm;