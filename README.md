# 🚜 Farmer Website  


---

## 📁 **Project Structure**  

### **Frontend (`front/`)**  
```bash
front/
├── node_modules/         # Dependencies
├── public/              # Static files
├── src/                 # Source code
│   ├── Layout/         # Layout components
│   ├── Pages/          # All pages (Home, FarmerReg, etc.)
│   ├── store/          # Zustand state management
│   ├── App.jsx         # Main React App
│   ├── index.css       # Global CSS
│   ├── main.jsx        # Entry point file
├── index.html          # Main HTML file
├── package.json        # Dependencies & Scripts
├── vite.config.js      # Vite Configuration
└── README.md           # Project Documentation
```
### **Backend (`server/`)**  
```bash
server/
├── node_modules/         # Dependencies
├── src/                 # Source code
│   ├── controllers/    # Business logic for API
│   ├── lib/            # Database connection & utilities
│   ├── middleware/     # Middleware functions (auth, etc.)
│   ├── model/          # Mongoose schemas
│   ├── routes/         # API routes
│   ├── server.js       # Main Express server
├── .env                # Environment variables
├── package.json        # Dependencies & Scripts
├── .gitignore          # Git Ignore file
└── README.md           # Project Documentation
