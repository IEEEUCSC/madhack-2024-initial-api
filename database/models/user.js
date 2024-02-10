const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['jobApplicant', 'employer'], required: true, default: 'jobApplicant' },
        image: { type: String, required: false },
        profile: {
            // User 1 - Job Applicant
            name: String,
            skills: [String],
            qualifications: [String],
            workExperience: [{ position: String, company: String, startDate: Date, endDate: Date }],

            // User 2 - Employer
            companyName: String,
            industry: String,
            // Other employer-specific details
        },
        // Add more fields as needed for user preferences, notifications, etc.
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
