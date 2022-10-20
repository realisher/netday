import React from 'react';
import line from '../assets/images/hr-line.png';
import './RegistrationForm.css';


const countries = [
    { value: 'kz', label: 'Kazakhstan' },
    { value: 'uz', label: 'Uzbekistan' },
    { value: 'knr', label: 'China' },
];

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            surname: '',
            email: '',
            phoneNumber: '',
            country: '',
            university: '',
            major: '',
            course: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state.userName, this.state.surname, this.state.course, this.state.country);
        event.preventDefault();
    }

    render() {
        return (
            <div id="registration" className="flex-center flex-column">
                <div>
                    <div className="title">
                        REGISTRATION FORM
                    </div>
                    <div className="flex-center">
                        <img src={line} alt="hr-line" className="underline"/>
                    </div>
                </div>

                <div className="main-div my-20px">
                    <div>
                        <div className="sub-title">
                            <p>TEST YOURSEL !</p>
                            <p className='my-2'>MULTIPLY KNOWLEDGE !</p>
                            <p>TRY YOUR LUCK !</p>
                        </div>
                    </div>
                    <div className="form-border">
                        <form onSubmit={this.handleSubmit} className="flex-column">
                            <input type="text" name="userName" placeholder="Name" onChange={this.handleInputChange} />
                            <input type="text" name="surname" placeholder="Surname" onChange={this.handleInputChange}/>
                            <input type="text" name="email" placeholder="Email" onChange={this.handleInputChange}/>
                            <input type="text" name="phoneNumber" placeholder="Phone number" onChange={this.handleInputChange}/>
                            <select name="country" value={this.state.value} onChange={this.handleInputChange}>
                                {countries.map(({value, label}, index) => <option value={value}>{label}</option>)}
                            </select>
                            <input type="text" name="university" placeholder="University" onChange={this.handleInputChange}/>
                            <input type="text" name="major" placeholder="Major" onChange={this.handleInputChange}/>
                            <input type="text" name="course" placeholder="Course" onChange={this.handleInputChange}/>
                            <input className="form-button" type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;