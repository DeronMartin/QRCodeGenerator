from flask import Flask, render_template, request, jsonify
import qrcode
from PIL import Image
from flask_cors import CORS
import json

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/qrgen', methods=['POST'])
def qrgen():
    if request.method == "POST":
        #data = request.get_json()
        #text = data['text']
        text = request.get_json("text")
        text = text['text']
        print(text)

        #QR Code Generation
        qr = qrcode.make(text)
        qr.save("static/img/result.png")
        print("QR Generated")

        resp = jsonify(success=True)
    return resp

@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, public, max-age=0"
    response.headers["Expires"] = '0'
    response.headers["Pragma"] = "no-cache"
    return response

if __name__ == "__main__":
    app.run(debug=True)