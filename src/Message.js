import React from 'react';

class Message extends React.Component {
    render() {
        return(
            <div class="message" id="message">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <h2 data-aos="fade-left" data-aos-duration="2000">Message</h2>
                            <hr data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000"/>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col-sm-8 offset-sm-2">
                            <form>
                                <div class="form-group" data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="1000">
                                <label for="name" class="font-weight-bold">Name</label>
                                <input type="text" id="name" class="form-control" placeholder="Your name"/>
                                </div>
            
                                <div class="form-group" data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="1500">
                                <label for="email" class="font-weight-bold">Email</label>
                                <input type="email" id="email" class="form-control" placeholder="Your email"/>
                                </div>
            
                                <div class="form-group" data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="2000">
                                <label for="message" class="font-weight-bold">Message</label>
                                <textarea class="form-control" id="message" placeholder="Your message/question" rows="10"></textarea>
                                </div>
            
                                <button class="btn btn-primary float-right" type="submit" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="2500">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;