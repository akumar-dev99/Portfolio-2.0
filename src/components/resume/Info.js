import React, { Component } from 'react'

export class Info extends Component {
    render() {
        return (
            <div>
                <div className="card card-profile">
                    <div className="card-content resume-info" >
                        <div style={{ justifyContent: 'start', display: 'block'}}>

                            <h6>Website:</h6>
                            <strong>https://amitkumarwebsite.netlify.app/</strong>
                            <hr style={{ borderTop: '1px solid 	#A9A9A9', width: '80%' }} />
                            <h6>Traits:</h6>
                            <strong>Leadership<br/></strong>
                            <strong>Teamwork<br/></strong>
                            <strong>Visionary<br/></strong>
                            <hr style={{ borderTop: '1px solid 	#A9A9A9', width: '80%' }} />
                            <h6>Languages:</h6>
                            <strong>Hindi (Native/Mother tongue)<br/></strong>
                            <strong>English (Advanced/2nd Language)<br/></strong>
                            <strong>French (Beginner)<br/></strong>
                            <hr style={{ borderTop: '1px solid 	#A9A9A9', width: '80%' }} />
                            <h6>Certification:</h6>
                            <strong>IB Diploma With Honors<br/></strong>
                            <strong>Mastery in Python<br/></strong>
                            <strong>Stock Market Exchange<br/></strong>
                            <hr style={{ borderTop: '1px solid 	#A9A9A9', width: '80%' }} />
                            <h6>Honor-Awards:</h6>
                            <strong>Most Commited and Dedicated <br/> Executive Committee Member</strong>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info
