import pandas as pd
from sqlalchemy import create_engine

db_user = 'postgres'         
db_password = 'root'     
db_host = 'localhost'              
db_port = '5432'                    
db_name = 'yellow_taxi_trips'        

csv_file_path = './2014_Yellow_Taxi_Trip_Data_20241025_2.csv'  

df = pd.read_csv(csv_file_path)

def main():
    engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}')

    # Read the CSV file in chunks
    chunksize = 10_000  # Number of rows per chunk
    current_row=0
    try:
        for chunk in pd.read_csv(csv_file_path, chunksize=chunksize):
            chunk.to_sql(db_name, engine, if_exists='append',  index=False)
            current_row= current_row + chunksize
            print(f"Inserted a chunk of {len(chunk)} rows successfully. current row {current_row}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()


###

""" it will fail on '2860000'
Inserted a chunk of 10000 rows successfully. current row 2860000
"""