const { ethers } = require('hardhat');

async function testEnrollmentContract() {
  try {
    const [owner, student1, student2] = await ethers.getSigners();

    //contract
    const CSEnrollment = await ethers.getContractFactory('CSEnrollment');
    const contract = await CSEnrollment.deploy();

    //register for course SUCCESSFUL
    console.log('Student attempting to add course (test 484 success)');
    await contract.connect(student1).register(15, 0, 484);
    console.log('Student registered successfully.');

    //Register for course UNSUCCESSFUL
    console.log('Student attempting to add course (test 431 fail)');
    try {
      await contract.connect(student2).register(25, 1, 431);
    } catch (error) {
      console.log('Student registration failed:', error.message);
    }

    //owner add course SUCCESSFUL
    console.log('Owner adding course (test 999 success)');
    await contract.connect(owner).add(999, 1);
    console.log('Course added successfully.');

    //owner add course UNSUCCESSFUL
    console.log('Owner adding course (test 484 fail');
    try {
      await contract.connect(owner).add(484, 0);
    } catch (error) {
      console.log('Adding course failed:', error.message);
    }

    //Getting the roster for a course that exists with ZERO students
    console.log('Getting roster for course 999 (Zero Students)');
    const roster999 = await contract.getRoster(999);
    console.log('Roster for course 999:', roster999);

    //Getting the roster for a course that exists with students
    console.log('Getting roster for course 484 (HAS students)');
    const roster484 = await contract.getRoster(484);
    console.log('Roster for course 484:', roster484);

    //Getting the roster for a course that does not exist
    console.log('Getting roster for course 12345 (DOES NOT EXIST)');
    const roster12345 = await contract.getRoster(12345);
    console.log('Roster for course 12345:', roster12345);
  } catch (error) {
    console.error('Error:', error);
  }
}

testEnrollmentContract();