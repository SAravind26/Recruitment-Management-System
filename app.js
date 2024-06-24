document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://localhost:3000/addJobPosition', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => alert('Job Position Added!'))
      .catch(error => console.error('Error:', error));
});

document.getElementById('applicantForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://localhost:3000/addApplicant', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
      .then(data => alert('Applicant Added!'))
      .catch(error => console.error('Error:', error));
});

document.getElementById('interviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://localhost:3000/scheduleInterview', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        console.log('Response:', response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Interview Scheduled!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to schedule interview. Please try again.');
    });
    
});
