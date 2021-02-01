# ticketsShop

Designing Web Applications

This is a studying site build with Django and React. 
The backend uses Django Rest Framework. Frontend is React.

Layouts: <https://www.figma.com/file/fbGm9iJEDOyLZGu5CB47dI/TPU-term?node-id=0%3A1>

## Run project

To get this project running, follow these steps: 

```sh
# Setup a virtualenv
virtualenv venv

# Activate virtualenv
source venv/bin/activate

# Install requirements
$ pip install -r requirements.txt

# Prepare django
python manage.py migrate
python manage.py createsuperuser
python manage.py loaddata dump.json 

# Start dev web server
python manage.py runserver
```


## Develop

```sh
# Install npm packages
npm install

# terminal 1
source env/bin/activate
npm run build:dev

# terminal 2
source env/bin/activate
python manage.py runserver
```

## Admin

/admin

```sh
python manage.py createsuperuser
```

+ Username: admin
+ Password: admin

## DB

```sh
python manage.py makemigrations
python manage.py migrate

# Dump database in to a db.json file
python manage.py dumpdata --natural-foreign --indent=2 --exclude=accounts --exclude=auth --exclude=contenttypes > dump.json

# Load the fixtures(database dumps) into database
python manage.py loaddata dump.json
```
