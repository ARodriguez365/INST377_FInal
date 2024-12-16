# INST377_Final
INST377 Web Design Final using HTML and JavaScript

Title: Personalized Recipe Finder

Description:

The Personalized Recipe Finder is a web application designed to help users discover recipes that align with their dietary restrictions, allergies, and ingredient preferences. By leveraging the OpenFoodFacts API, the platform filters recipes based on detailed ingredient and nutritional data, providing safe, healthy, and personalized meal options. This tool is ideal for individuals with specific dietary needs, as well as health-conscious users seeking convenience in meal planning.


Target Browsers:

The application is designed to be responsive and accessible across multiple platforms and devices, including iOS (Safari, Chrome), Android (Chrome, Samsung Internet), and Desktop (Chrome, Firefox, Edge, Safari).


Key Features:

Personalized Search - Users can input dietary restrictions, allergies, and available ingredients to find tailored recipes.

Recipe Details - Comprehensive information about each recipe, including nutritional breakdown, ingredient list, and preparation steps.

Trending Recipes - Displays popular and most-clicked recipes based on user activity.

User-Friendly Interface - A clean and interactive design built using React, HTML, CSS, and JavaScript for seamless navigation and interaction.


API Utilization:

The project leverages the OpenFoodFacts API to provide detailed nutritional and ingredient data, allergen information for filtering recipes, and comprehensive food product insights.

Refer to this link for more informaiton of the development of this project: Refer to this link https://drive.google.com/drive/folders/17apKNFV4yWN2xDnZOYQoq5yXV_Qs4Sn0?usp=drive_link for details on: 

Developer Manual:

The Developer Manual includes detailed instructions on setting up, running, and maintaining the project. Refer to the information below for: 

-Installation and setup guidelines.

-Backend and frontend integration details.

-API request structure and examples.

-Database management instructions.

-Troubleshooting tips.

This section provides guidance for future developers to set up and maintain the Food Finder application.

### How to Install the Application
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. **Install Dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```
3. **Install Additional Tools:**
   - Install a local server tool (e.g., `http-server`) to serve static files:
     ```bash
     npm install -g http-server
     ```

### How to Run the Application
1. **Start the Server:**
   Use the local server to host the application:
   ```bash
   http-server -p 8080
   ```
2. **Access the Application:**
   Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

### How to Run Tests
- **Unit Tests:** (if applicable)
  Ensure all tests pass before deploying:
  ```bash
  npm test
  ```

### API Endpoints
| Method | Endpoint                  | Description                                       |
|--------|---------------------------|---------------------------------------------------|
| GET    | `/recipes?search=<term>` | Fetch recipes based on a search term (keyword).   |
| GET    | `/popular`                | Retrieve a list of popular recipes.              |
| POST   | `/users`                  | Add a new user to the system.                    |
| GET    | `/users/:id`              | Fetch user data by user ID.                      |
| DELETE | `/users/:id`              | Delete a user by user ID.                        |

### Known Bugs and Roadmap for Future Development
#### Known Bugs
- Inconsistent ingredient matching for complex queries.
- Limited support for multi-language filtering.

#### Roadmap
1. Integrate a dedicated recipe API (e.g., Spoonacular) for improved recipe results.
2. Expand the keyword search to include synonyms for better results.
3. Develop a mobile app version for iOS and Android.
4. Implement user accounts with saved preferences and histories.
5. Add real-time recipe recommendations based on user activity.

---

Contributors

Adam Rodriguez

Tulasi Venkat

Braedan Henegar

Christopher Castillo
