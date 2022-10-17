import React from 'react';

import line from "../assets/images/hr-line.png";
import '../App.css';
import './Contacts.css';


class Contacts extends React.Component {
    render() {
        return (
            <div data-aos="fade-up" id="contacts">
                <div>
                    <div
                        className="text-white md:text-2xl tracking-widest text-10 md:pt-10 text-center title">CONTACTS
                    </div>
                    <div className="flex justify-center">
                        <img src={line} alt="hr-line" className="w-[90%] md:w-1/3 my-4"/>
                    </div>
                </div>
                <div className={'flex justify-center items-center flex-col md:flex-row md:mt-8 mb-32'}>
                    <div className={'w-1/2 flex items-center justify-end mr-20'}>
                        <div className={'text-white flex flex-col justify-center items-center'}>
                            <div className={'mb-12 text-lg'}>Ready to answer all your questions:</div>
                            <div className={'flex justify-start flex-col'}>
                                <div className={'flex mb-4'}>
                                    <img src="images/icon-message.png" alt='icon-message' className={'w-[24px] mr-2'}/>
                                    netday@sdu.edu.kz
                                </div>
                                <div className={'flex'}>
                                    <img src="images/icon-telega.png" alt='icon-message' className={'w-[20px] mr-2'}/>
                                    @sdunetday
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'w-1/2 flex items-center mt-20 justify-center md:justify-start'}>
                        <iframe
                            width={300} height={300}
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11632.333264440063!2d76.6690542!3d43.2077418!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b7d14aec270c056!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQodGD0LvQtdC50LzQsNC9INCU0LXQvNC40YDQtdC70Y8!5e0!3m2!1sru!2skz!4v1665748884123!5m2!1sru!2skz"></iframe>
                    </div>
                </div>
                <div className={'end-word my-14'}>2022 NETWORKING DAY</div>
            </div>
        )
    }
}

export default Contacts;