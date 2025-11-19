# Quiz Master - Complete Quiz Application

A modern, interactive quiz application with an attractive UI built with HTML, CSS, and JavaScript.

## 🎯 Features

- **Multiple Categories**: Science, History, Geography, Technology, and Sports
- **Beautiful UI**: Modern gradient design with smooth animations
- **Interactive Questions**: 10 questions per category with instant feedback
- **Progress Tracking**: Real-time score and progress display
- **Detailed Results**: Complete performance analysis with correct/incorrect breakdown
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Grade System**: Automatic grade assignment (A+ to F) based on performance
- **Time Tracking**: Records time taken to complete the quiz
- **Smooth Animations**: Fade-in effects and transitions throughout

## 📂 Project Structure

```
quiz-app/
├── index.html       # Main HTML file
├── styles.css       # Complete CSS styling
├── script.js        # JavaScript logic and quiz data
└── README.md        # This file
```

## 🚀 How to Use

### Option 1: Direct Opening
1. Navigate to the `quiz-app` folder
2. Double-click on `index.html` to open in your default browser

### Option 2: Using a Local Server
For better performance, serve the files using a local server:

**Using Python 3:**
```bash
cd path/to/quiz-app
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Using Node.js (http-server):**
```bash
npx http-server
```

**Using Live Server (VS Code Extension):**
1. Install the Live Server extension
2. Right-click on `index.html` and select "Open with Live Server"

## 🎮 How to Play

1. **Welcome Screen**: Click "Start Quiz Now" to begin
2. **Category Selection**: Choose your preferred quiz category
3. **Quiz Screen**: 
   - Read each question carefully
   - Select one of the four options
   - View your live score and progress
   - Navigate between questions using Previous/Next buttons
4. **Results Screen**: 
   - See your final score and grade
   - View detailed breakdown of correct/incorrect answers
   - Retake the quiz or return home

## 📊 Quiz Categories

### Science (🔬)
Chemistry, Physics, Biology, Astronomy
- 10 questions covering fundamental science concepts

### History (📚)
Modern History, American History, Ancient History, Renaissance
- 10 questions about important historical events

### Geography (🌍)
Continents, Countries, Mountains, Rivers, Oceans
- 10 questions about world geography

### Technology (💻)
Programming, Web Development, AI & ML, Hardware
- 10 questions about technology and computing

### Sports (⚽)
Football, Tennis, Basketball, Golf, Badminton
- 10 questions about various sports

## 🎨 Design Features

- **Color Scheme**:
  - Primary: Indigo (#6366f1)
  - Secondary: Pink (#ec4899)
  - Success: Green (#10b981)
  - Danger: Red (#ef4444)

- **UI Components**:
  - Gradient backgrounds
  - Smooth animations
  - Responsive grid layouts
  - Custom progress bars
  - Circular score display
  - Feature cards with hover effects

## ⚙️ Technical Details

### HTML Structure
- Semantic HTML5
- Multiple screen sections for different states
- Accessibility considerations

### CSS Features
- CSS Grid and Flexbox layouts
- CSS animations and transitions
- CSS variables for easy customization
- Mobile-first responsive design
- Custom scrollbar styling

### JavaScript Functionality
- Dynamic content rendering
- Event handling
- Score calculation
- Progress tracking
- Grade assignment logic
- Timer functionality

## 📱 Browser Compatibility

Works on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Customization

### Adding New Questions
Edit the `quizData` object in `script.js`:

```javascript
{
    question: 'Your question here?',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correct: 0, // Index of correct answer (0-3)
    category: 'Category Name'
}
```

### Adding New Categories
Add a new entry to the `quizData` object with the same structure as existing categories.

### Changing Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... etc ... */
}
```

## 📝 Notes

- Each quiz has 10 questions
- Each correct answer adds 10 points to the score
- Questions are displayed sequentially
- Answers can be changed before finishing
- Previous answers are retained when navigating
- Results include detailed breakdown of each question

## 🐛 Troubleshooting

**Quiz not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try opening in a different browser
- Ensure all three files are in the same directory

**Animations not smooth?**
- Update your browser to the latest version
- Disable browser extensions that might affect performance

**Mobile view issues?**
- The app is fully responsive
- Try rotating your device to landscape mode
- Zoom out if text appears too large

## 📄 License

Free to use and modify for personal or educational purposes.

## 🎓 Educational Value

This quiz application can be used for:
- Self-assessment
- Knowledge testing
- Study aid
- Classroom activities
- Competitive learning

Enjoy your quiz experience! 🎉
