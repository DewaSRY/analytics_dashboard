import pandas as pd
from sqlalchemy import create_engine

# Database connection parameters
db_user = 'postgres'          # replace with your PostgreSQL username
db_password = 'root'      # replace with your PostgreSQL password
db_host = 'localhost'               # replace with your host
db_port = '5432'                    # default PostgreSQL port
db_name = 'yellow_taxi_trips'           # replace with your database name

# Create a database connection
engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

# Path to the CSV file
csv_file_path = 'path/to/your/file.csv'  # replace with your CSV file path

# Read the CSV file into a DataFrame
df = pd.read_csv(csv_file_path)


# Insert data into the PostgreSQL table
# Replace 'your_table' with your actual table name
df.to_sql('your_table', engine, if_exists='append', index=False)
print(df.head(100));
# print("Data inserted successfully.")




def main():
    try:
        # Insert data into the PostgreSQL table
        df.to_sql('your_table', engine, if_exists='append', index=False)
        print("Data inserted successfully.")
    except Exception as e:
        print(f"An error occurred: {e}")