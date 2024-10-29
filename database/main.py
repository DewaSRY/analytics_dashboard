import pandas as pd
from sqlalchemy import create_engine

db_user = 'postgres'         
db_password = 'root'     
db_host = 'localhost'              
db_port = '5432'                    
db_name = 'yellow_taxi_trips'    



csv_file_path = './2014_Yellow_Taxi_Trip_Data_20241025_1.csv'  

df = pd.read_csv(csv_file_path)
def main():
    engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

    chunksize = 10_000  
    current_row = 0

    try:
        for chunk in pd.read_csv(csv_file_path, chunksize=chunksize):
            if 'pickup_datetime' in chunk.columns:
                chunk['pickup_datetime'] = pd.to_datetime(chunk['pickup_datetime'], errors='coerce')
            if 'dropoff_datetime' in chunk.columns:
                chunk['dropoff_datetime'] = pd.to_datetime(chunk['dropoff_datetime'], errors='coerce')

            with engine.begin() as connection:
                chunk.to_sql('trips', con=connection, if_exists='append', index=False)
                current_row += len(chunk)
                print(f"Inserted a chunk of {len(chunk)} rows successfully. Current row {current_row}")

    except SQLAlchemyError as e:
        print(f"An error occurred: {e}")
        engine.dispose()  # Close the engine to reset the connection

if __name__ == "__main__":
    main()
###

""" it will fail on '2860000'
Inserted a chunk of 10000 rows successfully. current row 2860000
"""