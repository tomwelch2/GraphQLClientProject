FROM python:3.8-slim

ADD .env /

ADD employees.csv /

ADD seedDb.py /

RUN pip3 install pandas sqlalchemy psycopg2_binary python-dotenv

ENTRYPOINT [ "python3" ]

CMD [ "seedDb.py" ]