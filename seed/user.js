const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const generateUsers = (num, role) => {
    const user = [];

    let profile = {};
    if (role === 'jobApplicant') {
        profile = {
            name: faker.internet.displayName(),
            skills: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
            qualifications: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
            workExperience: [
                {
                    position: faker.person.jobTitle(),
                    company: faker.company.name(),
                    startDate: faker.date.past(),
                    endDate: faker.date.past()
                },
                {
                    position: faker.person.jobTitle(),
                    company: faker.company.name(),
                    startDate: faker.date.past(),
                    endDate: faker.date.past()
                }
            ]
        }
    } else if (role === 'employer') {
        profile = {
            companyName: faker.company.name(),
            industry: faker.company.buzzPhrase()
        }
    }

    for (let i = 0; i < num; i++) {
        user.push({
            email: faker.internet.email().toLowerCase(),
            password: bcrypt.hashSync('1234', salt),
            role: role,
            image: faker.image.avatarGitHub(),
            profile: profile

        });
    }

    return user;
};

module.exports = { generateUsers };