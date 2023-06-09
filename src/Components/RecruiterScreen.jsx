import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { candidateDetailsAction } from '../Actions/actions';

export default function RecruiterScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [errors, setErrors] = useState({
  //   nameErr: '',
  //   qualiErr: '',
  //   gradeErr: '',
  //   designErr: '',
  //   ctcErr: '',
  //   dateErr: '',
  //   emailErr: '',
  //   resumeErr: '',
  // });
  const [candNameError, setCandNameError] = useState();
  const [designError, setDesignError] = useState();
  const [ctcError, setCtcError] = useState();
  const [emailerrorMsg, setEmailerrormsg] = useState();
  const [dateError, setDateError] = useState();
  const [resumeError, setResmeError] = useState();
  const [qualiError, setQualiError] = useState();
  const [gradeError, setGradeError] = useState();
  const [candidateDetails, setCandidateDetails] = useState({
    candidateName: '',
    qualification: '',
    grade: '',
    designation: '',
    ctc: '',
    joiningdate: '',
    email: '',
    resume: '',
  });
  const state = useSelector((state) => state.reducers);
  const handleCandFields = (e) => {
    setCandidateDetails({
      ...candidateDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleCandDetails = () => {
    dispatch(candidateDetailsAction(candidateDetails));
    navigate('/executiveScreen');
  };
  const handleInputOnBlur = () => {
    if (!new RegExp(/^[a-zA-Z]{1,10}$/g).test(candidateDetails.candidateName)) {
      setCandNameError('Please enter valid Candidate Name');
    } else {
      setCandNameError();
    }
    if (!new RegExp(/^[a-zA-Z]{1,10}$/g).test(candidateDetails.designation)) {
      setDesignError('Please enter valid Designation');
    } else {
      setDesignError();
    }
    if (!new RegExp(/^[0-9]{1,10}$/).test(candidateDetails.ctc)) {
      setCtcError('Please enter valid CTC');
    } else {
      setCtcError('');
    }
    if (!new RegExp(/^[a-zA-Z]{1,10}$/g).test(candidateDetails.qualification)) {
      setQualiError('Please enter valid Qualification');
    } else {
      setQualiError();
    }
    if (!new RegExp(/^[a-zA-Z]{1}$/g).test(candidateDetails.grade)) {
      setGradeError('Please enter valid Grade');
    } else {
      setGradeError();
    }
    if (
      new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        candidateDetails.email
      )
    ) {
      setEmailerrormsg();
    } else {
      setEmailerrormsg('Please Enter Valid Email');
    }
    if (candidateDetails.joiningdate.length > 0) {
      setDateError();
    } else {
      setDateError('Please Enter Valid Date');
    }
    if (candidateDetails.resume.length > 0) {
      setResmeError();
    } else {
      setResmeError('Please Upload Resume');
    }
  };
  return (
    <div>
      <div>
        <h3 style={{ textDecoration: 'underline' }}>Candidate Details</h3>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="candidateName">Candidate Name : </label>
          <input
            type="text"
            name="candidateName"
            value={candidateDetails.candidateName}
            onChange={handleCandFields}
            onBlur={handleInputOnBlur}
          />
          <p style={{ color: 'red' }}>{candNameError}</p>
        </div>
        {state.dropdownRoll === 'Fresher' ? (
          <div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="qualification">Higher Qualification : </label>
              <input
                required
                type="text"
                name="qualification"
                value={candidateDetails.qualification}
                onChange={handleCandFields}
                onBlur={handleInputOnBlur}
              />

              <p style={{ color: 'red' }}>{qualiError}</p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="grade">Grade : </label>
              <input
                type="text"
                name="grade"
                value={candidateDetails.grade}
                onChange={handleCandFields}
                onBlur={handleInputOnBlur}
              />
              <p style={{ color: 'red' }}>{gradeError}</p>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="designation">Designation : </label>
              <input
                type="text"
                name="designation"
                value={candidateDetails.designation}
                onChange={handleCandFields}
                onBlur={handleInputOnBlur}
              />
              <p style={{ color: 'red' }}>{designError}</p>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="ctc">CTC : </label>
              <input
                type="text"
                name="ctc"
                value={candidateDetails.ctc}
                onChange={handleCandFields}
                onBlur={handleInputOnBlur}
              />
              <p style={{ color: 'red' }}>{ctcError}</p>
            </div>
          </div>
        )}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="joiningdate">Joining Date : </label>
          <input
            type="date"
            name="joiningdate"
            value={candidateDetails.joiningdate}
            onChange={handleCandFields}
            onBlur={handleInputOnBlur}
          />
          <p style={{ color: 'red' }}>{dateError}</p>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            value={candidateDetails.email}
            onChange={handleCandFields}
            onBlur={handleInputOnBlur}
          />
          <p style={{ color: 'red' }}>{emailerrorMsg}</p>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="resume">Resume : </label>
          <input
            type="file"
            name="resume"
            value={candidateDetails.resume}
            onChange={handleCandFields}
            onBlur={handleInputOnBlur}
          />
          <p style={{ color: 'red' }}>{resumeError}</p>
        </div>
      </div>
      <button onClick={handleCandDetails}>Send to HR Executive</button>
    </div>
  );
}
