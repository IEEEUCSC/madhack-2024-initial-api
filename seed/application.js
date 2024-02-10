const { faker } = require('@faker-js/faker');

// const applicationSchema = new Schema(
//     {
//         job: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
//         applicant: { type: Schema.Types.ObjectId, ref: 'User', required: true },
//         resume: { type: String, required: true },
//         status: { type: String, enum: ['pending', 'accepted', 'rejected'], required: true, default: 'pending' }
//     },
//     { timestamps: true }
// );

const generateApplications = (jobs, applicant) => {
    const applications = [];

    for (let i = 0; i < jobs.length; i++) {
        applications.push({
            job: jobs[i],
            applicant: applicant,
            // file path or URL to the resume
            resume: faker.internet.url(),
            status: 'pending'
        });
    }

    return applications;
}

module.exports = { generateApplications };