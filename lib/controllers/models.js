var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    sessions: [Schema.Types.ObjectId],
    age:{type:Number, min:18},
    online: Boolean
});

var sessionSchema = new Schema({
    sessionName: String,
    creator: Schema.Types.ObjectId,
    mods: [Schema.Types.ObjectId],
    questions: [String],
    applicants: [String],
    interviewers: [String],
    startDate: {type: Date, default: Date.now},
    endDate: {type:Date, default: Date.now},
    interviews: [Schema.Types.ObjectId]
});

var interviewSchema = new Schema({
    interviewer:[String],
    applicant: String,
    questions:[String],
    startDate: {type: Date, default: Date.now},
    endDate: {type:Date, default: Date.now},
    startTime:{type:Date, default: Date.now},
    endTime:{type:Date, default: Date.now},
    score:[Number],
    averageScore:Number
})

exports.User = mongoose.model('User', userSchema);
exports.Session = mongoose.model('Session', sessionSchema);
exports.Interview = mongoose.model('Interview', interviewSchema);