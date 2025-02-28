import React from 'react';
import map from '../../assets/map.png';
import './Callback.css';
const Callback = () => {
  return (
    <section
          className="callback-section">
          <div className="callback-content d-flex justify-content-between align-items-center">
            <div className="left-side">
              <img 
                src={map} 
                className="callback-image"
              />
            </div>
            <div className="right-side">
            <div className="form-container fade-in-right">
            <h2 className="form-heading">
               Request a Call Back 
            </h2>
            <form action="https://api.web3forms.com/submit" method="POST">
            
              {/* Inline sections */}
              <div className="form-row mb-3">
                <div className="form-group">
                <input type="hidden" name="access_key" value="e521102f-db58-4a15-b462-bf2957d73f93"/>
                  <input
                    type="text"
                    name='firstname'
                    className="form-control"
                    placeholder="Fast Name *"
                  required/>
                </div>
                <div className="form-group">
                <input
                    type="text"
                    name='lastname'
                    className="form-control"
                    placeholder="Last Name *"
                  required/>
                </div>
              </div>
              {/* Inline sections */}
              <div className="form-row mb-3">
                <div className="form-group">
                  <input
                    type="number"
                    maxLength={10}
                    name='phone'
                    className="form-control"
                    placeholder="Your Number * "
                  required/>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name='companyName'
                    className="form-control"
                    placeholder="Company Name* "
                  required/>
                </div>
              </div>
              {/* Textarea */}
              <div className="form-group mb-3">
                <textarea
                name='message'
                  className="form-control"
                  rows="4"
                  placeholder="Additional  Message * "
                required></textarea>
              </div>
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
              SEND NOW
              </button>
            </form>
          </div>
            </div>
          </div>
        </section>
  );
};

export default Callback;
