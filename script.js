document.getElementById('workout-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const date = document.getElementById('date').value;
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const weight = document.getElementById('weight').value;

    // Create a list item
    const li = document.createElement('li');
    li.textContent = `${date} - ${exercise}: ${sets} sets of ${reps} reps at ${weight} kg`;

    // Append to the workout list
    document.getElementById('workout-list').appendChild(li);

    // Clear the form
    document.getElementById('workout-form').reset();
});
