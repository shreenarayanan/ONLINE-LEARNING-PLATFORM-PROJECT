document.addEventListener('DOMContentLoaded', function() {
  const enrollButtons = document.querySelectorAll('.enroll-btn');
  const enrolledCoursesSection = document.getElementById('enrolled-courses');

  enrollButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the course details from the data attribute
      const courseName = button.dataset.course;

      // Check if the course is already enrolled
      if (isCourseEnrolled(courseName)) {
        alert('You have already enrolled in this course.');
        return;
      }

      // Create a new enrolled course element
      const enrolledCourseElement = document.createElement('div');
      enrolledCourseElement.classList.add('enrolled-course');

      const courseHeading = document.createElement('h3');
      courseHeading.textContent = courseName;

      const courseDescription = document.createElement('p');
      courseDescription.textContent = `Description of ${courseName}...`;

      enrolledCourseElement.appendChild(courseHeading);
      enrolledCourseElement.appendChild(courseDescription);

      // Add the enrolled course to the enrolled courses section
      enrolledCoursesSection.appendChild(enrolledCourseElement);
    });
  });

  function isCourseEnrolled(courseName) {
    const enrolledCourses = document.querySelectorAll('.enrolled-course h3');
    for (const enrolledCourse of enrolledCourses) {
      if (enrolledCourse.textContent === courseName) {
        return true;
      }
    }
    return false;
  }
});
