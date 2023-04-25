import React from 'react';
import { useSelector } from 'react-redux';

export default function ExecutiveScreen() {
  const expcandicateDetails = [
    {
      name: 'Rajitha',
      designation: ' UI Developer',
      ctc: 18000,
      joiningDate: '20 - 1 - 2021',
      emailid: 'rajitha@gmail.com',
      resume: 'resume',
    },
    {
      name: 'Chowdary',
      designation: ' Tester',
      ctc: 15000,
      joiningDate: '14 - 6 - 2021',
      emailid: 'chowdary@gmail.com',
      resume: 'resume',
    },
    {
      name: 'kilaru',
      designation: 'Business Analyst',
      ctc: 12000,
      joiningDate: '17 - 8 - 2020',
      emailid: 'kilaru@gmail.com',
      resume: 'resume',
    },
    {
      name: 'mercy',
      designation: ' UI Developer',
      ctc: 22000,
      joiningDate: ' 9 - 11 - 2018',
      emailid: 'mercy@gmail.com',
      resume: 'resume',
    },
  ];
  const frecandicateDetails = [
    {
      name: 'Jungkook',
      higherQualification: 'Mtech',
      grade: 'A',
      joiningDate: '20 - 1 - 2019',
      emailid: 'jungkook@gmail.com',
      resume: 'resume',
    },
    {
      name: 'TZV',
      higherQualification: 'Btech',
      grade: 'A',
      joiningDate: '19 - 9 - 2018',
      emailid: 'tzv@gmail.com',
      resume: 'resume',
    },
    {
      name: 'Jimin',
      higherQualification: 'MCA',
      grade: 'A',
      joiningDate: '17 - 8 - 2020',
      emailid: 'jimin@gmail.com',
      resume: 'resume',
    },
    {
      name: 'Ram Monster',
      higherQualification: 'Degree',
      grade: 'A',
      joiningDate: ' 9 - 9 - 2017',
      emailid: 'rammonster@gmail.com',
      resume: 'resume',
    },
  ];
  const state = useSelector((state) => state.reducers);
  // const candidatesInfo = state.candidatesData;
  console.log('6::Details', state);
  return (
    <div>
      <p>welcome to candidate details screen</p>
      <div style={{ marginLeft: '16rem' }}>
        {state.dropdownRoll === 'Experienced' ? (
          <table>
            <tr>
              <th>Name</th>
              <th>Designation</th>
              <th>CTC</th>
              <th>Joining Date</th>
              <th>Email Id</th>
              <th>Resume</th>
              <th>Status</th>
            </tr>
            {/* <tr>
              <td>{candidatesInfo?.candidateName}</td>
              <td>{candidatesInfo?.designation}</td>
              <td>{candidatesInfo?.ctc}</td>
              <td>{candidatesInfo?.joiningdate}</td>
              <td>{candidatesInfo?.email}</td>
              <td>{candidatesInfo?.resume}</td>
            </tr> */}
            {expcandicateDetails.map((details) => (
              <tr>
                <td>{details.name}</td>
                <td>{details.designation}</td>
                <td>{details.ctc}</td>
                <td>{details.joiningDate}</td>
                <td>{details.emailid}</td>
                <td>{details.resume}</td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <p>Send Confirmation Email</p>
                    <p>on hold</p>
                    <select>
                      <option>Rejected in round 1</option>
                      <option>Rejected in round 2</option>
                      <option>Rejected in round 3</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <table>
            <tr>
              <th>Name</th>
              <th>Higher Qualification</th>
              <th>Grade</th>
              <th>Joining Date</th>
              <th>Email Id</th>
              <th>Resume</th>
            </tr>
            {/* <tr>
              <td>{candidatesInfo.candidateName}</td>
              <td>{candidatesInfo.qualification}</td>
              <td>{candidatesInfo.grade}</td>
              <td>{candidatesInfo.joiningdate}</td>
              <td>{candidatesInfo.email}</td>
              <td>{candidatesInfo.resume}</td>
            </tr> */}
            {frecandicateDetails.map((details) => (
              <tr>
                <td>{details.name}</td>
                <td>{details.higherQualification}</td>
                <td>{details.grade}</td>
                <td>{details.joiningDate}</td>
                <td>{details.emailid}</td>
                <td>{details.resume}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
    </div>
  );
}
