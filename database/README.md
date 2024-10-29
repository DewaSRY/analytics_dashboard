## Purpose of the Database Folder

The **database** folder contains a Python script that automates the import of records from a CSV file into a PostgreSQL database. This folder serves to:

- **Facilitate Data Import**: Streamlines the process of transferring large datasets from CSV files into the PostgreSQL database, making data management easier.
- **Utilize Poetry**: Leverages Poetry for dependency management, ensuring that all required libraries are installed for the script to function correctly.
- **Enable Database Interaction**: Allows for efficient interaction with PostgreSQL, executing SQL commands to insert data seamlessly.

---

## How to Run the Script

1. **Install Poetry**: Ensure you have Poetry installed on your system. Follow the instructions on the [Poetry website](https://python-poetry.org/docs/#installation) for installation.

2. **Navigate to the Database Folder**:
   Open your terminal and navigate to the folder containing the script:

   ```bash
   cd path/to/database
   ```

3. **Install Dependencies**:
   Install the required dependencies using Poetry:

   ```bash
   poetry install
   ```

4. **Configure Database Connection**:
   Open `main.py` and update the database connection settings (host, database name, username, password) to match your PostgreSQL setup.

5. **Run the Script**:
   Execute the following command to run the script:
   ```bash
   poetry run python .\main.py
   ```

The script will read data from the specified CSV file and insert the records into the PostgreSQL database.
