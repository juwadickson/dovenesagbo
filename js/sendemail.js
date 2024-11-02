function sendEmail(courseName) {
    const subject = encodeURIComponent(courseName);
    const body = encodeURIComponent(`I would like to enroll in the course: ${courseName}.`);
    window.location.href = `mailto:sydoveacademy@gmail.com?subject=${subject}&body=${body}`;
}
