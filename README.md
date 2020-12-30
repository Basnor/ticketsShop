# tickersShop

Designing Web Applications

Layouts: <https://www.figma.com/file/fbGm9iJEDOyLZGu5CB47dI/TPU-term?node-id=0%3A1>

For dev:

```sh
source env/bin/activate
npm run build:dev
python manage.py runserver
```

## admin/

```sh
python manage.py createsuperuser
```

+ Email: user@gmail.com
+ Name: User Userovich
+ Password: user

## api/shop/

+ id
+ eventTitle
+ keyWords
+ shortDescription
+ longDescription
+ image
+ startData
+ endData

## DB

```sh
python manage.py makemigrations
python manage.py migrate
cat shop/migrations/0001_initial.py
```
