import React, { Component } from 'react';

class OfficeType extends Component {
    render() {
        return (
            <div className="container office-type">
                <div className="row">
                    <h3 className="text-center">PLANS</h3>
        
                    <div className="col-md-3 text-center">
                        <div className="thumbnail">
                            <img src={'images/Meeting-Rooms-380x398.jpg'} alt="Virtual Offices" />
                            <div className="caption">
                                <h5>VIRTUAL OFFICES</h5>
                                <p>
                                    Our virtual offices allow your business to get our location address, 
                                    phone services and also you become a member of our community with 
                                    benefits such as access to our meeting rooms.<br></br>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="thumbnail">
                            <img src={'images/custom-1-380x398.jpg'} alt="Customize Offices" />
                            <div className="caption">
                            <h5>CUSTOMIZED OFFICES</h5>
                            <p>
                                Our customized offices offer a great location for your 
                                business and you can customize your office to suit your 
                                preferences. Also you become a member of our community 
                                with benefits such as access to our meeting rooms.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="thumbnail">
                            <img src={'images/serviced-offices-380x398.jpg'} alt="Meeting Rooms" />
                            <div className="caption">
                                <h5>MEETING ROOMS</h5>
                                <p>
                                    Our meeting rooms offer a great location for your meeting with 
                                    your clients or business partners. We provide presentation 
                                    equipment and coffee. Also you become a member of our community 
                                    with benefits such as access to our meeting rooms.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className="thumbnail">
                            <img src={'images/Horizons-Offices-Ghana-1-380x398.jpg'} alt="Serviced Offices" />
                            <div className="caption">
                                <h5>SERVICED OFFICES</h5>
                                <p>
                                    Our serviced offices offer a great location for your business 
                                    and we provide services such as internet, utilities and offers 
                                    from our partners. Also you become a member of our community 
                                    with benefits such as access to our meeting rooms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OfficeType;
