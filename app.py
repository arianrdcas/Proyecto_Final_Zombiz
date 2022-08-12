from flask import Flask, request, jsonify, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root@localhost/zombiz'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
migrate = Migrate(app,db)
ma = Marshmallow(app)
cors = CORS(app)


# models

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True)
    description = db.Column(db.String(500))
    image = db.Column(db.String(500))

    def __init__(self, title, description, image):
        self.title = title
        self.description = description
        self.image = image

db.create_all()

class ServiceSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'description','image')


service_schema = ServiceSchema()
services_schema = ServiceSchema(many=True)

# apis

@app.route('/addservices', methods=['POST','GET'])
def create_service():

    title = request.json['title']
    description = request.json['description']
    image = "../assets/images/service/service3.png"

    new_service= Service(title, description, image)

    db.session.add(new_service)
    db.session.commit()

    return service_schema.jsonify(new_service)


@app.route('/listAllservices', methods=['GET'])
def get_services():
    all_services = Service.query.all()
    result = services_schema.dump(all_services)
    return jsonify(result)

@app.route('/getServices/<id>', methods=['GET'])
def get_service(id):
    service = Service.query.get(id)
    return service_schema.jsonify(service)

@app.route('/upservices/<id>', methods=['PUT'])
def update_service(id):
    service = Service.query.get(id)

    title = request.json['title']
    description = request.json['description']
    #image = request.json['image']

    service.title = title
    service.description = description
    #service.image = image

    db.session.commit()

    return service_schema.jsonify(service)

@app.route('/deleteservice/<id>', methods=['DELETE'])
def delete_service(id):
    service = Service.query.get(id)
    db.session.delete(service)
    db.session.commit()
    return service_schema.jsonify(service)


#--------------------Usuario-------------------#

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(500))
    email = db.Column(db.String(500))

    def __init__(self, name, password, email):
        self.name = name
        self.password = password
        self.email = email

db.create_all()

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'password','email')


user_schema = UserSchema()
users_schema = UserSchema(many=True)


@app.route('/gestionar')
def gestionar():
    return url_for('gestionar')


@app.route('/login', methods=['POST'])
def log_user():

    name = request.json['username']
    password = request.json['password']

    user = User.query.filter_by(name=name, password=password).first()

    if not user:
        return jsonify('false')
    else:
        return user_schema.jsonify(user)



@app.route('/register', methods=['POST'])
def create_user():
    name = request.json['name']
    password = request.json['password']
    email = request.json['email']

    new_user= User(name, password, email)

    db.session.add(new_user)
    db.session.commit()

    return user_schema.jsonify(new_user)



@app.route('/users', methods=['GET'])
def get_users():
    all_users = User.query.all()
    result = users_schema.dump(all_users)
    return jsonify(result)

@app.route('/users/<id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    return user_schema.jsonify(user)

@app.route('/users/<id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)

    name = request.json['name']
    password = request.json['password']
    email = request.json['email']
    

    user.name = name
    user.password = password
    user.email = email

    db.session.commit()

    return user_schema.jsonify(user)

@app.route('/users/<id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.get(id)
    db.session.delete(user)
    db.session.commit()
    return user_schema.jsonify(user)


if __name__ == "__main__":
    app.run(debug=True)