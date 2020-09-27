import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row" country>
				<div className="col-md-4 call-out text-center">
					<h5>VISIT US IN KENYA</h5>
					<h6>Nairobi, Kenya</h6>
					<p>
						Belgravia Centre, 14 Riverside,<br></br> 4th floor, Off Riverside Drive <br></br>
						Hanover Centre, 14 Riverside Drive,<br></br> 6th floor, Off Riverside Drive
					</p>
				</div>

				<div className="col-md-4 call-out text-center">
					<h5>VISIT US IN GHANA</h5>
					<h6>Accra, Ghana</h6>
					<p>
						One Airport Square, Airport City<br></br>
						8th Floor
					</p>
				</div>

				<div className="col-md-4 call-out text-center">
					<h5>VISIT US IN NIGERIA</h5>
					<h6>Lagos, Nigeria</h6>
					<p>
						Sterling Bank Building
					</p>
				</div>
            </div>
        </div>
    );
}

export default Footer;
