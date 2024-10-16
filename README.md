# London-Crime-Map
UK Crime Map with Search Functionality

Overview
This project provides an interactive crime map for the UK, specifically focused on London. Users can search for specific locations within the city, and the map will display recent crime incidents in that area. Each incident is represented with color-coded pins to indicate the severity of the crime, allowing users to quickly assess safety in various neighborhoods.

Features
Interactive Map: Built using Leaflet.js, this map offers a smooth user experience with zooming and panning capabilities.
Location Search: Users can easily search for places in London using a search box, leveraging the Nominatim API for geolocation.
Crime Data Visualization: Recent crime incidents are fetched from the UK Police API, and displayed as markers on the map. The pins are color-coded based on the severity of the crime:
Red Pins: Represent high-severity crimes (e.g., violent crime, weapons-related).
Yellow Pins: Indicate medium-severity crimes (e.g., burglary, theft).
Green Pins: Used for low-severity incidents.
Popup Information: Clicking on a pin reveals additional details about the crime, including category, location, and outcome status.

**Technologies Used:**
HTML/CSS for structure and styling.
JavaScript for interactive functionalities.
Leaflet.js for mapping and visual representation.
Nominatim API for geocoding search queries.
UK Police API for retrieving crime data.
Installation
To run this project locally, follow these steps:

**HOW TO RUN:**
Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies (if any) and run the server (e.g., using Node.js).
Open index.html in your browser to view the map and start searching for locations in London.
Contributing
Contributions are welcome! If you would like to improve the project or add new features, please submit a pull request.

License
This project is licensed under the MIT License.


