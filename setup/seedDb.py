import os
import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine
from time import sleep

sleep(3) #Allowing time for database to start before seeding

load_dotenv() #Loading environment variables

#Loading data into Pandas DataFrame ---

df = pd.read_csv("./employees.csv")

#Seeding data to DB ---

DB_URI = f'postgresql+psycopg2://{os.getenv("PG_USER")}:{os.getenv("PG_PASSWORD")}@{os.getenv("PG_HOST")}:{os.getenv("PG_PORT")}/{os.getenv("PG_DB")}'
engine = create_engine(DB_URI)

df.to_sql("Employees", con = engine, if_exists = "replace")