const companySchema = {
    companyName: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    companyAddress: {
        type: String,
        required: true,
        unique: true,
    },
    companyDesc: {
        type: String,
        required: true,
    },
    package: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    vacancy: {
        type: String,
        required: true,
    },
    eligibility: {
        type: String,
        required: true,
    },
    websiteLink: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
};

export default companySchema