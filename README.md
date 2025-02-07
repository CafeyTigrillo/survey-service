# 🎯 Restaurant Survey Microservice

## 🌟 What is this?
A lightning-fast microservice designed to collect and manage customer feedback for restaurants through a simple yet powerful survey system. Turn your customers' opinions into actionable insights!

## 🚀 The Magic Endpoint

```http
POST survey/questions
```

This powerful endpoint is your gateway to capturing customer satisfaction! 

### What it does:
Captures a complete survey response with ratings for 5 different aspects of the restaurant experience.

### How to use it:

**Send this:**
```json
{
  "restaurant_id": 123,
  "question_1": 5,  // Rating from 1-5
  "question_2": 4,  // Rating from 1-5
  "question_3": 5,  // Rating from 1-5
  "question_4": 3,  // Rating from 1-5
  "question_5": 4   // Rating from 1-5
}
```

**Get back:**
```json
{
  "message": "Survey created successfully",
  "survey": {
    "id": 1,
    "restaurant_id": 123,
    "question_1": 5,
    "question_2": 4,
    "question_3": 5,
    "question_4": 3,
    "question_5": 4,
    "created_at": "2024-02-07T12:00:00.000Z"
  }
}
```

## 📊 Survey Structure

Each survey captures:
- 🏪 Restaurant identifier
- ⭐ 5 numerical ratings
- 🕒 Automatic timestamp
- 🔑 Unique survey ID

## 🎁 What You Get

- **Simple Integration**: One endpoint to rule them all!
- **Instant Storage**: Direct to MySQL database
- **Error Proof**: Robust error handling
- **Cross-Origin Ready**: CORS enabled
- **Time Tracking**: Automatic timestamps
- **Validation**: Built-in data validation

## 🏗️ Behind the Scenes

The service is built with:
- Express.js for lightning-fast responses
- Sequelize ORM for reliable data handling
- MySQL for robust data storage
- Modern ES6+ JavaScript

## 📈 Response Types

### ✅ Success (201)
You'll get a complete survey object with all the details.

### ❌ Error (500)
If something goes wrong, you'll get detailed error information:
```json
{
  "message": "Error creating the survey",
  "errorDetails": "Specific error message",
  "errorStack": "Full error trace"
}
```

## 🎯 Perfect For
- Restaurant chains
- Food service businesses
- Customer satisfaction tracking
- Quality assurance programs
- Service improvement initiatives
