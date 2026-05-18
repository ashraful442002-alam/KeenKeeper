# KeenKeeper

KeenKeeper is a modern friendship management web application designed to help users maintain meaningful relationships by tracking interactions, monitoring friendship goals, and organizing social connections efficiently.

---

## 🌐 Live Website

🔗  https://keen-keeper-ruddy-seven.vercel.app/

---

## 📌 Project Purpose

The purpose of KeenKeeper is to help users stay connected with important people in their lives by:

- Tracking communication history
- Managing friendship goals
- Monitoring interaction frequency
- Visualizing friendship analytics
- Keeping relationships active and organized

---

# ✨ Features

## 🏠 Home Page
- Responsive hero banner
- Friendship statistics cards
- Dynamic friends listing
- Responsive navigation system

## 👥 Friend Management
- View friend details
- Relationship information
- Friendship status tracking
- Goal management system

## 📞 Quick Check-In System
Users can instantly:
- Make a Call interaction
- Send a Text interaction
- Start a Video interaction

Each interaction:
- Saves to localStorage
- Updates timeline history
- Updates statistics page
- Shows toast notification

## 📅 Timeline Page
- Displays all saved activities
- Real-time localStorage data
- Filter interactions by:
  - All
  - Call
  - Text
  - Video

## 📊 Statistics Page
- Friendship analytics visualization
- Pie chart using Recharts
- Dynamic interaction statistics

## ❌ Error Handling
- Custom 404 error page
- Invalid route protection

---

# 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Frontend Library |
| React Router DOM | Routing |
| Tailwind CSS | Styling |
| DaisyUI | UI Components |
| Recharts | Data Visualization |
| React Hot Toast | Notifications |
| React Icons | Icons |
| Vite | Build Tool |

---

# 📂 Project Structure

```bash
src/
│
├── assets/
│
├── Component/
│   ├── Banner/
│   ├── FeaturedCard/
│   ├── Friends/
│   │   ├── FriendCard.jsx
│   │   └── Friends.jsx
│   │
│   └── shared/
│       ├── Footer/
│       └── Navbar/
│
├── Layout/
│   └── MainLayout.jsx
│
├── Pages/
│   ├── ErrorPage/
│   ├── FriendDetails/
│   ├── Homepage/
│   ├── Stats/
│   └── Timeline/
│
├── Routes/
│   └── Routes.jsx
│
├── App.jsx
├── main.jsx
└── index.css
