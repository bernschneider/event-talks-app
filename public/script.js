document.addEventListener('DOMContentLoaded', () => {
    const scheduleDiv = document.getElementById('schedule');
    const categorySearchInput = document.getElementById('categorySearch');
    const noResultsMessage = document.getElementById('noResults');

    let allTalks = [];

    // Function to format time
    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // Function to calculate and display the schedule
    const renderSchedule = (talksToDisplay) => {
        scheduleDiv.innerHTML = ''; // Clear previous schedule
        if (talksToDisplay.length === 0) {
            noResultsMessage.classList.remove('hidden');
            return;
        } else {
            noResultsMessage.classList.add('hidden');
        }

        let currentTime = new Date();
        currentTime.setHours(9, 0, 0, 0); // Event starts at 09:00 AM

        talksToDisplay.forEach((talk, index) => {
            // Add talk entry
            const talkElement = document.createElement('div');
            talkElement.classList.add('talk');

            const startTime = formatTime(currentTime);
            currentTime.setMinutes(currentTime.getMinutes() + talk.duration); // Add talk duration
            const endTime = formatTime(currentTime);

            talkElement.innerHTML = `
                <div class="talk-time">${startTime} - ${endTime}</div>
                <div class="talk-title">${talk.title}</div>
                <div class="talk-speakers">${Array.isArray(talk.speakers) ? talk.speakers.join(' & ') : talk.speakers}</div>
                <div class="talk-category">Categories: ${Array.isArray(talk.category) ? talk.category.join(', ') : talk.category}</div>
                <div class="talk-description">${talk.description}</div>
            `;
            scheduleDiv.appendChild(talkElement);

            // Add 10-minute transition, except after the last talk
            if (index < talksToDisplay.length - 1) {
                currentTime.setMinutes(currentTime.getMinutes() + 10);
            }

            // Add lunch break after 3rd talk
            if (index === 2) {
                const lunchStartTime = formatTime(currentTime);
                currentTime.setMinutes(currentTime.getMinutes() + 60); // 1-hour lunch
                const lunchEndTime = formatTime(currentTime);

                const lunchElement = document.createElement('div');
                lunchElement.classList.add('break');
                lunchElement.innerHTML = `
                    <div class="talk-time">${lunchStartTime} - ${lunchEndTime}</div>
                    <div>LUNCH BREAK</div>
                `;
                scheduleDiv.appendChild(lunchElement);
            }
        });
    };

    // Fetch talks from the server
    fetch('talks.json')
        .then(response => response.json())
        .then(data => {
            allTalks = data;
            renderSchedule(allTalks);
        })
        .catch(error => {
            console.error('Error fetching talks:', error);
            scheduleDiv.innerHTML = '<p>Failed to load schedule. Please try again later.</p>';
        });

    // Search functionality
    categorySearchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredTalks = allTalks.filter(talk => {
            if (Array.isArray(talk.category)) {
                return talk.category.some(cat => cat.toLowerCase().includes(searchTerm));
            }
            return talk.category.toLowerCase().includes(searchTerm);
        });
        renderSchedule(filteredTalks);
    });
});
