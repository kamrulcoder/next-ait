import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ]
  ,

  results: [
    {
      roll: 107 ,
      name: "Bulbul  hasan",      
      father: "Rohim Mia",
      mother: "Sheuly Begum",
      course: 'Computer Office Application',      
      session: "January-June 2012",
      result : "A+",
      certificate_issue_date:"07.07.2012",
      mobile:"01723568547",
    }
  ],
  courses:[
    { name: "Basic Computer Application"},
    { name:"Diploma in Computer Application"  },
    {name:"Diploma in Computer Science"},
    {name:"Diploma in Graphic Design"},
    {name:"Computer Office Application"},
    {name:"Industrial Training"},
    {name:"Certificate in Auto CAD"},
    {name:"Certificate in Computer Maintenance & Troubleshooting troubleshooting"},
    {name:"Certificate in Networking & Security"},
    {name:"Certificate in Graphic Design"},
    {name:"Basic Computer Office Application"},
    {name:"Diploma in Computer Office Application"},
    {name:"Web Development"}
  ],
  sessions:[
    { name: "January-June 2012"},
    { name:"July-December 2012 "},
    { name:"January-June 2013 "},
    { name:"July-December 2013"},
    { name:"January-June 2014"},
    { name:"July-December 2014"},
    { name:"July-December 2015"},
    { name:"July-December 2016 "},
    { name:"July-December 2017"},
    { name:"January-June 2018"},
    { name:"July-December 2018"},
    { name:"October-December 2018"},
    { name:"January-June 2019"},
    { name:"January-June 2021"},
    { name:"July-December 2019"},
  ]


};
export default data;