# 🎯 Salary Prediction App

An intelligent web application that predicts starting salaries for professionals based on their academic background, technical skills, and personality traits using advanced machine learning algorithms.

![Salary Predictor](./public/main.png)

## ✨ Key Features

- 📊 Accurate salary predictions using ML models
- 🎨 Modern, intuitive user interface with Mantine UI
- 📱 Fully responsive design for all devices
- ✅ Comprehensive form validation
- 🔄 Real-time updates and predictions
- 🛡️ Secure API integration
- 📈 Interactive salary visualization

## 🛠️ Tech Stack

### Frontend Architecture
- **React + TypeScript** - For robust, type-safe UI development
- **Mantine UI** - Modern component library with dark mode support
- **Axios** - Secure API communication
- **Tabler Icons** - Beautiful, consistent iconography

### State Management & Validation
- React Hooks for local state
- Form validation with real-time feedback
- Error boundary implementation
- Loading state management

## 📊 Prediction Parameters

### 🎓 Academic Metrics
- 10th & 12th board examination scores
- College GPA and tier
- Specialization and degree details
- Graduation year

### 💻 Technical Skills Assessment
- Computer Programming
- Electronics & Semiconductors
- Computer Science fundamentals
- Engineering disciplines:
  - Mechanical
  - Electrical
  - Telecom
  - Civil

### 🧠 Personality Evaluation
The app considers key personality traits:
- Conscientiousness
- Agreeableness
- Extraversion
- Neuroticism
- Openness to Experience

## 🚀 Getting Started

1. **Clone the Repository**
```bash
git clone https://github.com/Sri-Rahul/Salary_Predictor.git
cd salary-predictor
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment**
Create a `.env` file in the root directory:
```env
NEXT_PUBLIC_PREDICT_URL=your_prediction_api_url
```

4. **Start Development Server**
```bash
npm run dev
```

## 🔗 API Integration

The application integrates with a Flask-based machine learning backend for predictions. Backend repository: [Salary Prediction Backend](https://github.com/Sri-Rahul/salary-prediction-backend)

### API Features:
- RESTful architecture
- Secure data transmission
- Comprehensive error handling
- Rate limiting
- CORS support

## 💡 Usage Tips

1. **Accurate Data Entry**
   - Provide precise academic scores
   - Rate technical skills honestly
   - Complete all personality assessments

2. **Understanding Results**
   - Predictions are based on historical data
   - Results show annual CTC in INR
   - Consider market variations

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🌟 Acknowledgments

- Mantine UI team for the amazing component library
- Contributors and testers
- ML model training dataset providers

## 📧 Contact

- Project Link: https://github.com/Sri-Rahul/Salary_Predictor

---

<p align="center">Made with ❤️ by Rahul</p>
