const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "recruitment_database"
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

app.post('/addJobPosition', (req, res) => {
    const { entityId, jobTitle, jobDescription, location, requiredSkills, jobType } = req.body;
    const sql = 'INSERT INTO job_positions (entity_id, job_title, job_description, location, required_skills, job_type) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [entityId, jobTitle, jobDescription, location, requiredSkills, jobType], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Job Position Added!' });
    });
});

app.post('/addApplicant', (req, res) => {
    const { applicantName, applicantEmail, applicantPhone, applicantResume } = req.body;
    const sql = 'INSERT INTO applicants (name, email, phone, resume) VALUES (?, ?, ?, ?)';
    db.query(sql, [applicantName, applicantEmail, applicantPhone, applicantResume], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Applicant Added!' });
    });
});

app.post('/scheduleInterview', (req, res) => {
    const { applicantId, jobId, interviewDate, interviewTime, status } = req.body;
    const sql = 'INSERT INTO interviews (applicant_id, job_id, interview_date, interview_time, status) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [applicantId, jobId, interviewDate, interviewTime, status], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Interview Scheduled!' });
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
