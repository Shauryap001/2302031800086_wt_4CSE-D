// Event listener for the career assessment form
document.getElementById('careerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get user input for skills and interests
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const interests = document.getElementById('interests').value.split(',').map(interest => interest.trim());

    // Generate career suggestions based on user input
    const suggestions = generateCareerSuggestions(skills, interests);
    displaySuggestions(suggestions);
});

// Function to generate career suggestions based on skills and interests
function generateCareerSuggestions(skills, interests) {
    // Example career data (this can be expanded or fetched from a database)
    const careers = [
        { name: 'Software Developer', keywords: ['programming', 'coding', 'software', 'development'] },
        { name: 'Data Scientist', keywords: ['data', 'analysis', 'statistics', 'machine learning'] },
        { name: 'Web Designer', keywords: ['design', 'creativity', 'user experience', 'web'] },
        { name: 'Graphic Designer', keywords: ['design', 'creativity', 'visual arts'] },
        { name: 'Project Manager', keywords: ['management', 'organization', 'leadership'] },
        { name: 'Marketing Specialist', keywords: ['marketing', 'communication', 'strategy'] },
    ];

    // Filter careers based on user skills and interests
    return careers.filter(career => 
        skills.some(skill => career.keywords.includes(skill.toLowerCase())) || 
        interests.some(interest => career.keywords.includes(interest.toLowerCase()))
    ).map(career => career.name);
}

// Function to display the generated career suggestions
function displaySuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('suggestedCareers');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    if (suggestions.length === 0) {
        suggestionsContainer.innerHTML = '<p>No suggestions found based on your input.</p>';
        return;
    }

    // Create a card for each suggestion
    suggestions.forEach(suggestion => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${suggestion}</h3><p>Explore opportunities in this field.</p>`;
        suggestionsContainer.appendChild(card);
    });
}

// Event listener for the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Your message has been sent!'); // Show a confirmation message
});
