import React from 'react';
import line from '../assets/images/hr-line.png'

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
            <div style={{backgroundColor: "#1E1E1E"}} className="flex flex-col justify-center">
                <div>
                    <div className="text-white md:text-2xl text-10 pt-10 pb-5 font-bold text-center tracking-widest">
                        REGISTRATION FORM
                    </div>
                    <div className="flex justify-center">
                        <img src={line} alt="hr-line" className="w-1/5"/>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col md:justify-around justify-center items-center mx-auto my-14">
                    <div>
                        <div className="text-white md:text-4xl mb-10 text-xl font-semibold text-[#38D9BA]">
                            <p>TEST YOURSEL !</p>
                            <p>MULTIPLY KNOWLEDGE !</p>
                            <p>TRY YOUR LUCK !</p>
                        </div>
                    </div>
                    <div className="outline-2 outline-[#38D9BA] outline px-10 py-14 md:w-1/2 text-center">
                        <form onSubmit={this.handleSubmit} className="flex flex-col">
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
                            <input className="outline-2 rounded-2xl mt-4" type="submit" value="Submit"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;